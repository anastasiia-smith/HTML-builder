const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;

// create txt file
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'))

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt(`Input your text: \n`);
rl.prompt();
rl.on('line', (line) => {
  stream.write(`${line}\n`)
  if (line === 'exit') {
    console.log('Successfully closed.')
    rl.pause(); 
  }
});
rl.on('SIGINT', () => {
    console.log('Successfully closed.')
    rl.pause(); 
});







