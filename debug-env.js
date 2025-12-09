require('dotenv').config({ path: 'packages/db/.env' });

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('DIRECT_URL:', process.env.DIRECT_URL);

// Try loading from root .env too
const path = require('path');
const fs = require('fs');
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  console.log('\nRoot .env DATABASE_URL line:', envContent.split('\n').find(line => line.includes('DATABASE_URL')));
}
