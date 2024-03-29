var total = 0;

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


function cleartotal()
{
   total = 0;
   document.getElementById("p1").innerHTML = total;
}

function adder() 
{
   if (total > 0) { total = 0; }
   
   var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
   var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
  
   total += num1 + num2;
   document.getElementById("p1").innerHTML = total;
   
}

function clearall()
{
   int ar[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 }
   int i, x;
   for (int i = 1; 1 < 12) {
   auto[i]=0; 
   }
   document.getElementById("p2").innerHTML = auto1;
}

function autoadd()
{
   int i, x;
   x = 0;
   for (int i = 1 to 11) {
   x = x + auto[i];
   }
   document.getElementById("p3").innerHTML = x;
}


function lumpadd()
{
   if (total > 0) { total = 0; }

   var num1 = parseInt(document.getElementById("myform").elements["auto1l"].value);
   var num2 = parseInt(document.getElementById("myform").elements["auto5l"].value);
   var num3 = parseInt(document.getElementById("myform").elements["auto8l"].value);

   total += num1 + num2 + num3;
   document.getElementById("p4").innerHTML = total;
}
