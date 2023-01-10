
function applyNumberMask(input) {
    var x = input.value.replace(/\D/g, '').match(/(\d{0,12})/)[1];
    input.value = x;
}
  
function applyCurrencyMask(input) {
    input.value = input.value.replace("$", "");
    input.value = "$" + input.value;
}

