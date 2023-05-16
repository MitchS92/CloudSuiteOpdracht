
const dropdownButton = document.querySelector(".dropdownToggle");
const dropdownContent = document.querySelector(".dropdownMenu");


dropdownButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});


window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdownToggle")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});
