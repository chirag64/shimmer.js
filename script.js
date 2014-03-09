var Action = document.getElementById("btn");
var inner = document.getElementById("inner");

//Add event listener to button click
Action.addEventListener("click", function() {
  shimmer(inner);
});