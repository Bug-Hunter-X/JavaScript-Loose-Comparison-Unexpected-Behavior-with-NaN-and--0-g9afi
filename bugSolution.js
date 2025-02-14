function fooStrict(a, b) {
  if (a === b) {
    return true;
  }
  return false; 
}

function fooIsNaN(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else if (a === b) {
    return true; 
  } else {
    return false;
  }
}
console.log(fooStrict(NaN, NaN)); // false
console.log(fooStrict(0, -0)); // true

console.log(fooIsNaN(NaN, NaN)); // true
console.log(fooIsNaN(0, -0));  // true