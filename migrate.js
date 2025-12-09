require('dotenv').config({ path: 'packages/db/.env' });
const { exec } = require('child_process');

const cmd = 'cd packages/db && pnpm prisma migrate deploy';
exec(cmd, (error, stdout, stderr) => {
  console.log(stdout);
  if (stderr) console.error(stderr);
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
});
