class LandingPage {
  constructor() {
    this.features = []
    this.adapter = new landingPageAdapter()
    this.fetchAndLoadLandingPageFeatures()
  }

  fetchAndLoadLandingPageFeatures() {
    this.adapter
      .getLandingPageFeatures()
      .then((data) => {
        return data.features.map((feature) => {
          this.features.push(feature)
        })
      })
      .then(() => {
        this.render()
      })
  }

  render() {
    const root = document.getElementById("root")
    const featureContainer = document.createElement("div")
    featureContainer.setAttribute("class", "feature-container")
    this.features.map((feature) => {
      const featureDiv = document.createElement("div")
      featureDiv.setAttribute("class", "feature-div")
      featureDiv.setAttribute("id", feature.id)
      featureDiv.innerText = feature.title
      featureContainer.appendChild(featureDiv)
      root.appendChild(featureContainer)
    })
  }
}
