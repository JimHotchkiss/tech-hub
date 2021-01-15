class Feature {
  constructor(featureObj) {
    this.components = []
    this.selections = []
    this.id = featureObj.id
    this.title = featureObj.title
    this.iconUrl = featureObj.iconUrl
    this.description = featureObj.description
    this.featureAdapter = new FeatureAdapter(this.id)
    this.updateNavbar = new UpdateNavbar(featureObj)
    this.clearLandingPage()
    this.fetchAndLoadFeatureComponents()
  }

  clearLandingPage() {
    const featureContainer = document.getElementById("feature-container")
    if (featureContainer.parentNode) {
      featureContainer.parentNode.removeChild(featureContainer)
    }
  }

  fetchAndLoadFeatureComponents() {
    this.featureAdapter
      .getFeatureData()
      .then((data) => {
        return data.cameras.map((camera) => {
          this.components.push(camera)
        })
      })
      .then(() => {
        this.renderComponents()
      })
  }
  renderComponents() {
    const root = document.getElementById("root")
    const componentsContainer = document.createElement("div")
    componentsContainer.setAttribute("class", "components-container")
    // Title div
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "feature-title-div")
    titleDiv.innerText = "Select CCU"
    componentsContainer.appendChild(titleDiv)
    this.components.map((component) => {
      // Component Div
      const componentDiv = document.createElement("div")
      componentDiv.setAttribute("class", "component-div")
      componentDiv.setAttribute("id", component.id)
      componentDiv.innerText = component.id.toUpperCase()

      // Load component div into component container
      componentsContainer.appendChild(componentDiv)

      // Load component container into root
      root.appendChild(componentsContainer)
    })
  }
}
