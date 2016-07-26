
// Toggle navigation

function toggle_navigation(element_class) {
  console.log("Click detected");
  var e = document.getElementsByClassName(element_class);

  if (e.className == "active") {
    console.log("Is active");

  }

  else {
    console.log("Is NOT active");
    e.classList.remore("trigger");
    e.classList.add("trigger-active");
    console.log("Class added");
  }

}
