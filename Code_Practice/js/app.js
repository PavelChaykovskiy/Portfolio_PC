let age = +prompt(`how old are you`, `18`);
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm(`do you have permision from your parents?`);
  }
}

if (checkAge(age)) {
  alert(`Welcome!`);
} else {
  alert(`please wait until 18`);
}
