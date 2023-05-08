const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log('\nList of files in secret-folder:');
    files.forEach(file => {
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
        if (error) {
          console.log(error);
        }
        else {
          if(!stats.isDirectory()) {
            const extname = path.extname(file.name);
            console.log(`${file.name.slice(0, file.name.indexOf('.'))} - ${extname.slice(1)} - ${stats.size / 1000}kb`);
          }
        }
      });
      
    })
  }
})

