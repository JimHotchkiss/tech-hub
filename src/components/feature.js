class Feature {
  constructor(featureObj) {
    this.id = featureObj.id
    this.title = featureObj.title
    this.iconUrl = featureObj.iconUrl
    this.description = featureObj.description
    this.featureAdapter = new FeatureAdapter(this.id)
    this.clearLandingPage()
  }

  clearLandingPage() {
    const featureContainer = document.getElementById("feature-container")
    if (featureContainer.parentNode) {
      featureContainer.parentNode.removeChild(featureContainer)
    }
    this.renderFeature()
  }

  renderFeature() {
    this.featureAdapter.getFeatureData().then((data) => console.log(data))
  }
}
