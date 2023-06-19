const { exec } = require('child_process');

exec('qmate config.js', (error, stdout, stderr) => {
  if (error) {
    console.log(`Error executing file: ${error}`);
    return;
  }
  console.log(`Standard output: ${stdout}`);
  console.error(`Standard error: ${stderr}`);
});
