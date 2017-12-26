function howManyHundreds(number) {
  var ByHundred = number / 100;
  var output;
  if (ByHundred < 0) {
    output = Math.floor(Math.abs(ByHundred));
  } else {
    output = Math.floor(ByHundred);

  }
  return output;
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);