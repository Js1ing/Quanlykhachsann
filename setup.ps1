# Hotel Booking App Setup Script
Write-Host "🚀 Hotel Booking App Setup" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Check if Node.js is installed
Write-Host "`n🔍 Checking Node.js installation..." -ForegroundColor Yellow

try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
        
        $npmVersion = npm --version 2>$null
        Write-Host "✅ npm is installed: $npmVersion" -ForegroundColor Green
        
        # Check if MongoDB is available
        Write-Host "`n🔍 Checking MongoDB..." -ForegroundColor Yellow
        try {
            mongod --version 2>$null | Out-Null
            Write-Host "✅ MongoDB is installed locally" -ForegroundColor Green
        } catch {
            Write-Host "⚠️  MongoDB not found locally. You can use MongoDB Atlas (cloud)" -ForegroundColor Yellow
        }
        
        # Check project structure
        Write-Host "`n📁 Checking project structure..." -ForegroundColor Yellow
        
        $requiredFiles = @(
            "package.json",
            "backend/server.js", 
            "frontend/package.json",
            "frontend/src/App.js",
            ".env.example"
        )
        
        $allFilesExist = $true
        foreach ($file in $requiredFiles) {
            if (Test-Path $file) {
                Write-Host "✅ $file" -ForegroundColor Green
            } else {
                Write-Host "❌ $file - Missing" -ForegroundColor Red
                $allFilesExist = $false
            }
        }
        
        if ($allFilesExist) {
            Write-Host "`n🎯 Ready to install dependencies!" -ForegroundColor Green
            Write-Host "`nNext steps:" -ForegroundColor Cyan
            Write-Host "1. Run: npm run install-all" -ForegroundColor White
            Write-Host "2. Run: npm run seed (optional - creates sample data)" -ForegroundColor White
            Write-Host "3. Run: npm run dev" -ForegroundColor White
            Write-Host "4. Open: http://localhost:3000" -ForegroundColor White
            
            Write-Host "`n📧 Sample accounts after seeding:" -ForegroundColor Cyan
            Write-Host "Admin: admin@luxuryhotel.com / admin123" -ForegroundColor White
            Write-Host "Manager: manager@luxuryhotel.com / manager123" -ForegroundColor White
            Write-Host "Customer: john@example.com / customer123" -ForegroundColor White
        } else {
            Write-Host "`n❌ Some required files are missing!" -ForegroundColor Red
        }
        
    } else {
        throw "Node.js not found"
    }
} catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "`n📥 Please install Node.js:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Download the LTS version" -ForegroundColor White
    Write-Host "3. Run the installer" -ForegroundColor White
    Write-Host "4. Restart PowerShell" -ForegroundColor White
    Write-Host "5. Run this script again" -ForegroundColor White
    
    Write-Host "`n🌐 Or install via Chocolatey:" -ForegroundColor Yellow
    Write-Host "choco install nodejs" -ForegroundColor White
    
    Write-Host "`n🌐 Or install via Winget:" -ForegroundColor Yellow
    Write-Host "winget install OpenJS.NodeJS" -ForegroundColor White
}

Write-Host "`n📖 For detailed instructions, see: setup.md" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Green