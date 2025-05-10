document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumb");
  let currentIndex = 0;

  const updateMainImage = (index) => {
    const selectedThumb = thumbnails[index];
    mainImage.src = selectedThumb.src;
    thumbnails.forEach((t) => t.classList.remove("active"));
    selectedThumb.classList.add("active");
    currentIndex = index;
  };

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateMainImage(index));
  });

  document.querySelector(".left").addEventListener("click", () => {
    let newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(newIndex);
  });

  document.querySelector(".right").addEventListener("click", () => {
    let newIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(newIndex);
  });
});
