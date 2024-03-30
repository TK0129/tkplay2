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
function test1() {
  const values = Array.from(document.querySelectorAll('#table tr td'))
              .map(td => td.innerHTML);


  document.getElementById("p3").innerHTML = "testing 1";
  document.getElementById("p4").innerHTML = array(2);
  document.getElementById("p3").innerHTML = "testing 2";
   
  // alert("testing pop up window A1");

  let t = 7;
  // alert(t);
   
  alert(array(1));
  // console.log(values) // [1, 2, 3 ... 9]
}
