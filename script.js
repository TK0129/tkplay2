function addInput(){
  var amount = $('#amount').val();
  var inputs = $('#inputs').empty();
  for(i = 0; i < amount; i++) {
    inputs.append('<input type="text" name="input[' + i + ']" /> ');
  }
}
