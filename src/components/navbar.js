class NavBar {
  constructor() {
    // this.renderNavBar()
  }

  renderNavBar() {
    const root = document.getElementById("root")

    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")

    const iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "icon-div")

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
    this.addBackBtnIcon()
  }

  addHomeIcon() {
    const iconTextSpanDiv = document.getElementById("icon-text-span-div")
    iconTextSpanDiv.insertAdjacentHTML(
      "afterend",
      '<div id="navbar-home-icon" class="navbar-home-icon"></div>'
    )
  }
}
