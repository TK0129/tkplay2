function readmyfile() {
  
var file = document.getElementById('inputfile');

// This script will actually read from a file into an array, and output to web page
// and output to the console log

console.log("script3.js 02");
  
file.addEventListener('change', () => {
    var txtArr = [];
    var fr = new FileReader();
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split("-"))];
        }
    }
    fr.onloadend = function() {
        console.log(txtArr);
        document.getElementById('output').textContent=txtArr.join("");
    }

    fr.readAsText(file.files[0]);
})
  
}
