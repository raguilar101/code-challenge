document.addEventListener("DOMContentLoaded", () => {
  // load title on page load
  document.getElementById("mainTitle").classList.add("fadeIn", "slideIn");

  var el = document.querySelector(".inactive");

  el.onclick = function () {
    el.classList.toggle("active");
    document.getElementById("mainTitle").classList.remove("slideIn");
    document.getElementById("expandSection").classList.add("active");
    setTimeout(() => {
      document.getElementById("mainTitle").classList.add("fadeOut");
      document.getElementById("moreDetial").classList.add("active");
    }, 900);
  };
});
