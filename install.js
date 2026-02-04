const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Installing Hotel Booking App...\n');

// Function to run command and handle errors
function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`📦 Running: ${command}`);
    execSync(command, { 
      cwd, 
      stdio: 'inherit',
      env: { ...process.env, npm_config_audit_level: 'moderate' }
    });
    console.log('✅ Success!\n');
  } catch (error) {
    console.error(`❌ Error running: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Check if Node.js is installed
try {
  execSync('node --version', { stdio: 'ignore' });
  execSync('npm --version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ Node.js and npm are required. Please install from https://nodejs.org/');
  process.exit(1);
}

console.log('✅ Node.js and npm are installed\n');

// Install backend dependencies
console.log('📦 Installing backend dependencies...');
runCommand('npm install --silent');

// Install frontend dependencies
console.log('📦 Installing frontend dependencies...');
const frontendPath = path.join(process.cwd(), 'frontend');
if (fs.existsSync(frontendPath)) {
  runCommand('npm install --silent', frontendPath);
} else {
  console.error('❌ Frontend directory not found');
  process.exit(1);
}

console.log('🎉 Installation completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Run: npm run seed (optional - creates sample data)');
console.log('3. Run: npm run dev');
console.log('4. Open: http://localhost:3000');
console.log('\n📧 Sample accounts after seeding:');
console.log('Admin: admin@luxuryhotel.com / admin123');
console.log('Manager: manager@luxuryhotel.com / manager123');
console.log('Customer: john@example.com / customer123');