var total = 0;

function cleartotal()
{
   total = 0;
   document.getElementById("p1").innerHTML = total;
}

function adder() 
{
   total = 0;
   var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
   var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
  
    total += num1 + num2;
   
}
