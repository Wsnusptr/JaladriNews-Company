const { Client } = require('pg');

require('dotenv').config({ path: '.env' });

console.log('Testing connection with DIRECT_URL...');
console.log('Host:', process.env.DIRECT_URL?.split('@')[1]?.split(':')[0]);

const client = new Client({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect((err) => {
  if (err) {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Connected to database');
    client.query('SELECT NOW()', (err, res) => {
      if (err) console.error('Query error:', err);
      else console.log('✅ Query result:', res.rows);
      client.end();
    });
  }
});
