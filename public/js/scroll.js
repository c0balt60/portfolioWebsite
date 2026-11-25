function onScroll() {
  const header = document.getElementById("header")
  if (window.scrollY > 0) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

document.addEventListener("scroll", onScroll)
document.addEventListener("astro:page-load", onScroll)
