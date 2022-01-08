const header = document.querySelector(".header")
const headerNavigation = document.querySelector(".header__navigation")
const headerNavigationLinks = document.querySelectorAll(".header__navigation a")

function showAndHideMobileMenu() {
  headerNavigation.classList.toggle("show")

  if (headerNavigation.classList.contains("show")) {
    header.style.position = "fixed"
  } else {
    header.style.position = "absolute"
  }

  for (const links of headerNavigationLinks) {
    links.addEventListener("click", () => {
      headerNavigation.classList.remove("show")
      header.style.position = "absolute"
    })
  }
}