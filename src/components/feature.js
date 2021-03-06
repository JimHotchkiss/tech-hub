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
    const root = document.getElementById("root")
    const componentsContainer = document.createElement("div")
    componentsContainer.setAttribute("class", "components-container")
    componentsContainer.setAttribute("id", "components-container")
    // Title div
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "feature-title-div")
    // Breadcrumbs div
    const breadCrumbs = document.createElement("div")
    breadCrumbs.setAttribute("class", "breadcrumbs-div")

    if (this.selections.length === 2) {
      // Render Specialties
      titleDiv.innerText = "Select Specialty"
      breadCrumbs.innerText =
        `CCU: ${this.selections[0]}` +
        "\xa0\xa0\xa0\xa0" +
        `Monitor: ${this.selections[1]}`
      componentsContainer.appendChild(titleDiv)
      componentsContainer.appendChild(breadCrumbs)

      // Filter correct CCU
      const selectedCcu = new FilterSelection().filterCcu(
        this.components,
        this.selections
      )
      // Filter correct Monitor
      const selectedMonitor = new FilterSelection().filterMonitor(
        selectedCcu.monitors,
        this.selections
      )
      // Render Specialites
      selectedMonitor.specialties.map((specialty) => {
        // Component Div
        const componentDiv = document.createElement("div")
        componentDiv.setAttribute("class", "component-div")
        componentDiv.setAttribute("id", specialty.name)
        componentDiv.innerText = specialty.name.toUpperCase()
        // Load component div into component container
        componentsContainer.appendChild(componentDiv)
        // Load component container into root
        root.appendChild(componentsContainer)
      })
    } else if (this.selections.length === 1) {
      titleDiv.innerText = "Select Monitor"
      breadCrumbs.innerText = `CCU: ${this.selections[0]}`
      componentsContainer.appendChild(titleDiv)
      componentsContainer.appendChild(breadCrumbs)
      const selection = this.components.find(
        (element) => element.id === this.selections[0]
      )
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
    } else if (this.selections.length === 3) {
      // Filter correct CCU
      const selectedCcu = new FilterSelection().filterCcu(
        this.components,
        this.selections
      )
      // Filter correct Monitor
      const selectedMonitor = new FilterSelection().filterMonitor(
        selectedCcu.monitors,
        this.selections
      )
      // Filter correct Specialty
      const selectedSpecialtySettings = new FilterSelection().filterSpecialties(
        selectedMonitor.specialties,
        this.selections
      )

      console.log(
        selectedSpecialtySettings.ccuSettings,
        selectedSpecialtySettings.monitorSettings
      )
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
