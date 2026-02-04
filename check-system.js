const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking system requirements...\n');

// Check Node.js
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  console.log(`✅ Node.js: ${nodeVersion}`);
  
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 16) {
    console.log('⚠️  Warning: Node.js 16+ is recommended');
  }
} catch (error) {
  console.log('❌ Node.js not found. Please install from https://nodejs.org/');
  process.exit(1);
}

// Check npm
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✅ npm: ${npmVersion}`);
} catch (error) {
  console.log('❌ npm not found');
  process.exit(1);
}

// Check MongoDB
try {
  execSync('mongod --version', { encoding: 'utf8', stdio: 'ignore' });
  console.log('✅ MongoDB installed');
} catch (error) {
  console.log('⚠️  MongoDB not found locally. You can use MongoDB Atlas (cloud)');
}

// Check project structure
const requiredFiles = [
  'package.json',
  'backend/server.js',
  'frontend/package.json',
  'frontend/src/App.js',
  '.env.example'
];

console.log('\n📁 Checking project structure...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - Missing`);
    allFilesExist = false;
  }
});

// Check environment files
if (fs.existsSync('.env')) {
  console.log('✅ .env file exists');
} else {
  console.log('⚠️  .env file not found. Copy from .env.example');
}

if (fs.existsSync('frontend/.env')) {
  console.log('✅ frontend/.env file exists');
} else {
  console.log('⚠️  frontend/.env file not found');
}

console.log('\n📋 Summary:');
if (allFilesExist) {
  console.log('✅ All required files are present');
  console.log('\n🚀 Ready to install! Run: npm run install-all');
} else {
  console.log('❌ Some files are missing. Please check the project structure.');
}

console.log('\n📖 For detailed setup instructions, see: setup.md');