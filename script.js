window.addEventListener("load", function () {
  window.location.hash = "";
  document.getElementById("HOME").scrollIntoView({ behavior: "smooth" });
});

function toggleMenu() {
  const butnav = document.getElementById("butnav");

  if (butnav.style.top === "-200px" || butnav.style.top === "") {
    butnav.style.top = "65px";
  } else {
    butnav.style.top = "-200px";
  }
}

function toggleFadeOnScroll() {
    const ttgkamiSection = document.querySelector(".ttgkami");
    const tujuanSection = document.querySelector(".tujuan");

    const screenPosition = window.innerHeight;

    // Untuk section .ttgkami
    if (ttgkamiSection) {
        const ttgkamiPosition = ttgkamiSection.getBoundingClientRect().top;

        if (ttgkamiPosition < screenPosition && ttgkamiPosition > 0) {
            ttgkamiSection.classList.add("fade-in");
        } else {
            ttgkamiSection.classList.remove("fade-in");
        }
    }

    // Untuk section .tujuan
    if (tujuanSection) {
        const tujuanPosition = tujuanSection.getBoundingClientRect().top;

        if (tujuanPosition < screenPosition && tujuanPosition > 0) {
            tujuanSection.classList.add("fade-in");
        } else {
            tujuanSection.classList.remove("fade-in");
        }
    }
}

window.addEventListener("scroll", toggleFadeOnScroll);
window.addEventListener("load", toggleFadeOnScroll);


let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const fotoSection = document.querySelector(".foto");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    fotoSection.classList.add("scrolled-down");
    fotoSection.classList.remove("scrolled-up");
  } else {
    // Scroll ke atas
    fotoSection.classList.add("scrolled-up");
    fotoSection.classList.remove("scrolled-down");
  }
  lastScrollTop = scrollTop;
});
