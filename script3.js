function readmyfile() {

  var fs = import('fs');
  var contents = fs.readFileSync('C:\Users\tlk01\Documents\TK data\Budget web page doc.LumpSum.txt', 'utf8');
  var lines = contents.split('/\r?\n/');

  console.log(lines);

}
