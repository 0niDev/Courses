const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const res = document.getElementById("reset");
const num = document.getElementById("number");

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
res.addEventListener("click", reset);

function increase() {
  num.innerHTML++;
}
function decrease() {
  num.innerHTML--;
}
function reset() {
  num.innerHTML = 0;
}
