// Reveal `.animate` elements as they scroll into view, staggered per batch.
function animate() {
  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, index) => {
        setTimeout(() => entry.target.classList.add("show"), index * 120)
        observer.unobserve(entry.target)
      })
  }, { rootMargin: "0px 0px -8% 0px" })

  document.querySelectorAll(".animate:not(.show)").forEach((el) => observer.observe(el))
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)
