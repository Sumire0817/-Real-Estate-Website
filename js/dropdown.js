document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const hoursList = document.querySelector(".hours-list");

  function toggleDropdown() {
    if (hoursList.style.display === "" || hoursList.style.display === "none") {
      hoursList.style.display = "block";
    } else {
      hoursList.style.display = "none";
    }
  }

  dropdownToggle.addEventListener("click", toggleDropdown);
});
