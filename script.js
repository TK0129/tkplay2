var total = 0;
var totall = 0;
var LumpSummArr = [];
var CurrSpendArr = [];

//---------------------------------------------------------------------------------
//-----------  Write the Lump Sum Array to verify globally saved         ----------
//---------------------------------------------------------------------------------
function WriteLumpSummArr() {

var file = document.getElementById('inputfile');

// This script will actually read from a file into an array, and output to web page
// and output to the console log
	
	if (LumpSummArr.length === 0) {
		alert("Error: LumpSummArr is empty, please read the LumpSumm File prior to echoing");
		console.log("Error: LumpSummArr is empty, please read the LumpSumm File prior to echoing");	
	}
    console.log("WriteLumpSummArr start");

    console.log("LumpSummArr", LumpSummArr);
 
	console.log("WriteLumpSummArr end");
	
	document.getElementById('outputwlsa').textContent=LumpSummArr.join("");
	
}

//---------------------------------------------------------------------------------
//-----------  Write the Lump Sum Array to verify globally saved         ----------
//---------------------------------------------------------------------------------
function WriteCurrentSpendingArr() {

var file = document.getElementById('inputfile');

// This script will actually read from a file into an array, and output to web page
// and output to the console log
	
	if (CurrSpendArr.length === 0) {
		alert("Error: CurrSpendArr is empty, please read the CurrentSpending File prior to echoing");
		console.log("Error: CurrSpendArr is empty, please read the CurrentSpending File prior to echoing");	
	}
    console.log("WriteCurrentSpending start");

    console.log("WriteCurrentSpending", CurrSpendArr);
 
	console.log("WriteCurrentSpending end");
	
	document.getElementById('outputwcsa').textContent=LumpSummArr.join("");
	
}


//---------------------------------------------------------------------------------
//-----------  read the lump sum file and store into an ARRAY            ----------
//---------------------------------------------------------------------------------
function ReadLumpSumm() {

var file = document.getElementById('inputfilerls');
var line = 0;
var txtArr = [];

// This script will actually read from a file into an array, and output to web page
// and output to the console log

    console.log("read lumpsum start");

    file.addEventListener('change', () => {
      //var txtArr = [];
      var fr = new FileReader();
      fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split("\r\n"))];
		//	console.log("txtArr - 1", txtArr);
        }
      } ;
      fr.onloadend = function() {
        console.log("txtArr - 2", txtArr);
		LumpSummArr = txtArr;
		document.getElementById('outputrls').textContent=txtArr.join("");
      } ;


    fr.readAsText(file.files[0]);
}) ;

	console.log("read lumpsum end");
   //           txtArr = [...txtArr, ...(lines[line].split(";"))];
}

//---------------------------------------------------------------------------------
//-----------  read the current spending file and store into an ARRAY    ----------
//---------------------------------------------------------------------------------
function ReadCurrentSpending() {
  
var file = document.getElementById('inputfilercs');

// This script will actually read from a file into an array, and output to web page
// and output to the console log

console.log("read currentspending start");
  
file.addEventListener('change', () => {
    var txtArr = [];
    var fr = new FileReader();
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split("\r\n"))];
		//	console.log("txtArr", txtArr);
        }
    } ;
    fr.onloadend = function() {
        console.log(txtArr);
		CurrSpendArr = txtArr;
        document.getElementById('outputrcs').textContent=txtArr.join("");
    } ;

    fr.readAsText(file.files[0]);
}) ;
 
	console.log("read currentspending end");
   //           txtArr = [...txtArr, ...(lines[line].split(";"))];
}


//---------------------------------------------------------------------------------
// ----------  example on reading two numbers from web page, adding      ----------
// ----------  the number, dump to consol and write out to web page      ----------
//---------------------------------------------------------------------------------
function adder() {
   if (total > 0) { total = 0; }

   
    var num1a = parseFloat(document.getElementById("myform").elements["num1"].value);
    var num2a = parseFloat(document.getElementById("myform").elements["num2"].value);

    console.log("num1a" ,num1a);
    console.log("num2a" ,num2a);
   
    var n1 = num1a.toFixed(2);
    var n2 = num2a.toFixed(2);
   
    console.log("n1", n1);
    console.log("n2", n2);
   
    total = parseFloat(n1) + parseFloat(n2);

    console.log("total", total);
   
    document.getElementById("p1").innerHTML = total;
}

//---------------------------------------------------------------------------------
//---------  Code to Clear the Test Table calculated sum                -----------
//---------------------------------------------------------------------------------

function cleartotal() {
   total = 0;
    document.getElementById("p1").innerHTML = total;
}

//---------------------------------------------------------------------------------
//  --------------------------  Code to Total Lump sum column  -------------------------
//---------------------------------------------------------------------------------

function LumpSum() {

	total = 0;
	
    var A1Ll = parseFloat(document.getElementById("A1L").value);
	var A6Ll = parseFloat(document.getElementById("A6L").value);
	var A9Ll = parseFloat(document.getElementById("A9L").value);
   
	console.log("LumpSum Start");
	console.log("total", total);
	console.log("A1Ll", A1Ll);
	console.log("A6Ll", A6Ll);
	console.log("A9Ll", A9Ll);
	
	total = parseFloat(A1Ll) + parseFloat(A6Ll) + parseFloat(A9Ll);
 
	console.log("total", total);
	
	document.getElementById("AutoTL").value = parseFloat(total).toFixed(2);
	
	console.log("LumpSum End");
}



//  -------------------------------------------------------------------------------
//  --------------------------  test code below to learn  -------------------------
//  --------------------------  test code below to learn  -------------------------
//  --------------------------  test code below to learn  -------------------------
//  --------------------------  test code below to learn  -------------------------
//  -------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//  --------------------------  readdata to read data from table  -------------------------
//    does not seem to work, just keeping in case 
//---------------------------------------------------------------------------------
function readtable() {

//gets table
var oTable = document.getElementById('table2');

//gets rows of table
var rowLength = oTable.rows.length;

//loops through rows    
for (i = 0; i < rowLength; i++) {
	
	console.log("rows", i);
	
  //gets cells of current row  
   var oCells = oTable.rows.item(i).cells;

   //gets amount of cells of current row
   var cellLength = oCells.length;
	
	console.log("do cells in current row");
	
   //loops through each cell in current row
   for(var j = 0; j < cellLength; j++) {
      // get your cell info here

      var cellVal = oCells.item(j).innerHTML;
      console.log(cellVal);
   }
}
}


//  function to test reading a table cell and storing it in an array 
//  one element from the array is stored into the table as a test 
function test2() {

    var Autoi1 = parseFloat(document.getElementById("Autoi").value);
 // var daynum = parseInt(document.getElementById("iddaynum").elements["autoi"].value);
 // const daynum = parseInt(document.getElementById("idt2").getElementsByClassName("t2").elements["daynum"].value);
   
  console.log("Autoi1", Autoi1);
  
  var i;
  let testarray1 = new Array(0, 1, 2);

  console.log("write testarray1 4A");
    for (i = 0; i < testarray1.length; i++)
      console.log((i+1) + ": " + testarray1[i]);

  let themsg = document.getElementById("Autoi").value;
  testarray1[1] = themsg;
 //  document.getElementById("p3").innerHTML = "testing test2 1";
    
  console.log("write testarray1 4B");
    for (i = 0; i < testarray1.length; i++)
      console.log((i+1) + ": " + testarray1[i]);
 
  document.getElementById("Autotot").value = testarray1[1]; 
  console.log("data end");
}


//  -------------------------------------------------------------------------------
//  --------------------------  test code below to learn  -------------------------
//  -------------------------------------------------------------------------------

//  function to add all the Lump Sum values
function test1() {
//  const values = Array.from(document.querySelectorAll('#table1 tr td'))
//              .map(td => td.innerHTML);

var t1 = document.getElementById("table1");
for (var r = 0; r < t1.rows.length; r++) {
    for (var c = 0; c < t1.rows[r].cells.length; c++) {
        console.log(t1.rows[r].cells[c].innerHTML);
    }
}

   
  document.getElementById("p3").innerHTML = "testing 2";
  //document.getElementById("p4").innerHTML = array(2);
   
  // alert("testing pop up window A1");

  console.log("data start 4");
  
    let tk = 7;
    console.log(tk);

    console.log("t1 write 1");
    for (i = 0; i < t1.length; i++)
      console.log((i+1) + ": " + t1[i]);
   
    console.log("t1 write 2");
    console.log(t1); // [1, 2, 3 ... 9]

  console.log("data end");
}

//---------------------------------------------------------------------------------
// ----------  writefile test                                            ----------
//   does not work - think I need to use local firefox data                  
//---------------------------------------------------------------------------------
function writefile() {
	
  console.log("writefile start");
	
    var textToSave = document.getElementById("inputTextToSave").value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var downloadLink = document.createElement("a");
	
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
	
	console.log("writefile end");
	  
}
