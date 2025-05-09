document.addEventListener("DOMContentLoaded", () => {
  const sidebarEl = document.querySelector(".side_bar");
  const menuBarEl = document.getElementById("menu_bar");
  const closeBarEl = document.getElementById("close_bar");

  menuBarEl.addEventListener("click", () => {
    sidebarEl.style.display = "flex";
  });

  closeBarEl.addEventListener("click", () => {
    sidebarEl.style.display = "none";
  });
});
