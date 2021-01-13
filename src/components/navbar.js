class NavBar {
  constructor() {
    this.renderNavBar()
  }

  renderNavBar() {
    console.log("rendernavbar")
    const root = document.getElementById("root")

    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")

    const iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "icon-div")

    const iconTextSpanDiv = document.createElement("div")
    iconTextSpanDiv.setAttribute("class", "icon-text-span-div")

    const textDiv = document.createElement("div")
    textDiv.setAttribute("class", "text-div")
    textDiv.innerText = "Tech"

    const spanDiv = document.createElement("span")
    spanDiv.setAttribute("class", "span-div")
    spanDiv.innerText = "HUB"

    iconTextSpanDiv.appendChild(iconDiv)
    iconTextSpanDiv.appendChild(textDiv)
    iconTextSpanDiv.appendChild(spanDiv)

    navbar.appendChild(iconTextSpanDiv)

    root.appendChild(navbar)
  }
}
