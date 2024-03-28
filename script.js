var total = 0;

function adder() {
  var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
  var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
  if (total > 100){
    console.log("It's over!");
  } else {
    total += num1 + num2;
    document.getElementById("p1").innerHTML = total;
  }
}
