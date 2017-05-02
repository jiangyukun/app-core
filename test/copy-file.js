import fse from 'fs-extra';

console.log(__dirname)

fse.copy(__dirname + '/copy-file.js', __dirname + '/copy-file1.js', {}, err => {
  if (err) {
   console.log(err)
  }


});