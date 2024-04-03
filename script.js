var total = 0;
var totall = 0;


function cleartotal() {
   total = 0;
    document.getElementById("p1").innerHTML = total;
}

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

//  --------------------------  Code to Total Lump sum column  -------------------------


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


//  --------------------------  readdata to read data from table  -------------------------

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

//  --------------------------  test code below to learn  -------------------------

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
