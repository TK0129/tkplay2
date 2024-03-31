var total = 0;
var totall = 0;

var auto1 = 0;
var auto2 = 0;
var auto3 = 0;
var auto4 = 0;
var auto5 = 0;
var auto6 = 0;
var auto7 = 0;
var auto8 = 0;
var auto9 = 0;
var auto10 = 0;
var auto11 = 0;

var auto1l = 0;
var auto51 = 0;
var auto81 = 0;

var daynum;

function cleartotal() {
   total = 0;
    document.getElementById("p1").innerHTML = total;
}

function adder() {
   if (total > 0) { total = 0; }
   
    var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
    var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
  
    total += num1 + num2;
    document.getElementById("p1").innerHTML = total;
}

//  --------------------------  test code below to learn  -------------------------

//  function to add all the Lump Sum values
function test2(daynum, daysinyear) {
   
  var i;
  let testarray1 = new Array(0, 1, 2);

  console.log("write testarray1 3A");
    for (i = 0; i < testarray1.length; i++)
      console.log((i+1) + ": " + testarray1[i]);
   
  testarray1[1] = daynum;
  document.getElementById("p3").innerHTML = "testing test2 1";
    
  console.log("write testarray1 3B");
    for (i = 0; i < testarray1.length; i++)
      console.log((i+1) + ": " + testarray1[i]);
  
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
