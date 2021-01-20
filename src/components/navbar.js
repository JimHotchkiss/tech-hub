class NavBar {
  constructor() {
    this.bindHomeIconEventListener()
  }

  bindHomeIconEventListener() {
    const navbarHomeIcon = document.getElementById("navbar-home-icon")
    if (navbarHomeIcon) {
      navbarHomeIcon.addEventListener("click", () => {
        new ResetNavbarAndFeature().renderNewLandingPage()
      })
    }
  }

  renderNavBar() {
    const root = document.getElementById("root")

    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    navbar.setAttribute("id", "navbar")

    const iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "icon-div")
    iconDiv.setAttribute("id", "icon-div")
    iconDiv.style.backgroundImage = "url('../images/Grey.png')"

    const iconTextSpanDiv = document.createElement("div")
    iconTextSpanDiv.setAttribute("class", "icon-text-span-div")
    iconTextSpanDiv.setAttribute("id", "icon-text-span-div")

    const textDiv = document.createElement("div")
    textDiv.setAttribute("class", "text-div")
    textDiv.setAttribute("id", "text-div")
    textDiv.innerText = "Tech"

    const spanDiv = document.createElement("span")
    spanDiv.setAttribute("class", "span-div")
    spanDiv.setAttribute("id", "span-div")
    spanDiv.innerText = "HUB"

    iconTextSpanDiv.appendChild(iconDiv)
    iconTextSpanDiv.appendChild(textDiv)
    iconTextSpanDiv.appendChild(spanDiv)

    navbar.appendChild(iconTextSpanDiv)

    root.appendChild(navbar)
  }

  updateNavBar(featureObj) {
    this.updateNavbarText(featureObj)
    this.updateNavbarIcons(featureObj)
  }

  updateNavbarText(featureObj) {
    const textDiv = document.getElementById("text-div")
    const spanDiv = document.getElementById("span-div")
    const featureTitle = featureObj.title.split(" ")
    textDiv.innerText = featureTitle[0]
    spanDiv.innerText = featureTitle[1]
  }

  updateNavbarIcons(featureObj) {
    this.addHomeIcon()
    this.updateFeatureIcon(featureObj)
  }

  addHomeIcon() {
    const iconTextSpanDiv = document.getElementById("icon-text-span-div")
    iconTextSpanDiv.style.marginLeft = "32%"
    iconTextSpanDiv.insertAdjacentHTML(
      "afterend",
      '<div id="navbar-home-icon" class="navbar-home-icon"></div>'
    )
    this.bindHomeIconEventListener()
  }

  addBackBtnIcon() {}

  updateNavbarIcons() {
    const iconDiv = document.getElementById("icon-div")
    iconDiv.style.backgroundImage = ``
    iconDiv.style.width = "0px"
  }
}
