class Feature {
  constructor(featureObj) {
    this.components = []
    this.selections = []
    this.id = featureObj.id
    this.title = featureObj.title
    this.iconUrl = featureObj.iconUrl
    this.description = featureObj.description
    this.featureAdapter = new FeatureAdapter(this.id)
    this.upNavbar = new NavBar().updateNavBar(featureObj)
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
        return data.msa.cameras.map((camera) => {
          this.components.push(camera)
        })
      })
      .then(() => {
        this.renderComponents()
      })
      .then((featureObj) => {
        new NavBar().addHomeIcon(featureObj)
      })
  }
  renderComponents() {
    console.log("render components")
    const root = document.getElementById("root")
    const componentsContainer = document.createElement("div")
    componentsContainer.setAttribute("class", "components-container")
    componentsContainer.setAttribute("id", "components-container")
    // Title div
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "feature-title-div")
    if (this.selections.length === 2) {
      console.log("selected monitors")
      titleDiv.innerText = "Select Specialty"
      this.components.map((component) => {
        component.monitors.map((monitor) => {
          console.log(monitor)
        })
      })
      componentsContainer.appendChild(titleDiv)
      // selection.monitors.map((component) => {
      //   // Component Div
      //   const componentDiv = document.createElement("div")
      //   componentDiv.setAttribute("class", "component-div")
      //   componentDiv.setAttribute("id", component.id)
      //   componentDiv.innerText = component.id.toUpperCase()
      //   // Load component div into component container
      //   componentsContainer.appendChild(componentDiv)
      //   // Load component container into root
      //   root.appendChild(componentsContainer)
      // })
    } else if (this.selections.length === 1) {
      titleDiv.innerText = "Select Monitor"
      const selection = this.components.find(
        (element) => element.id === this.selections[0]
      )
      componentsContainer.appendChild(titleDiv)
      selection.monitors.map((component) => {
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
    } else {
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
    this.bindCameraSelectionEventListener()
  }

  bindCameraSelectionEventListener() {
    const componentDiv = document.getElementsByClassName("component-div")
    for (let item of componentDiv) {
      item.addEventListener("click", () => {
        console.log("click")
        this.assignUsersSelectionAndResetFeature(item)
      })
    }
  }

  assignUsersSelectionAndResetFeature(item) {
    this.selections.push(item.id)
    new ResetNavbarAndFeature().resetFeature()
    this.renderComponents()
  }
}
