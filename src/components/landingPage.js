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
      console.log(feature)
      const featureDiv = document.createElement("div")
      featureDiv.setAttribute("class", "feature-div")
      featureDiv.setAttribute("id", feature.id)

      // Img-Title Div
      const imgTitleDiv = document.createElement("div")
      imgTitleDiv.setAttribute("class", "feature-img-title-div")

      // Img div
      const imgDiv = document.createElement("div")
      imgDiv.setAttribute("class", "feature-img-div")
      imgDiv.setAttribute("id", `${feature.id}-img-url`)
      imgTitleDiv.appendChild(imgDiv)

      // Title Div
      const titleDiv = document.createElement("div")
      titleDiv.setAttribute("class", "feature-title-div")
      titleDiv.innerText = feature.title
      imgTitleDiv.appendChild(titleDiv)

      // Description Div
      const descriptionDiv = document.createElement("div")
      descriptionDiv.setAttribute("class", "feature-description-div")
      descriptionDiv.innerText = feature.description

      featureDiv.appendChild(imgTitleDiv)
      featureDiv.appendChild(descriptionDiv)
      featureContainer.appendChild(featureDiv)
      root.appendChild(featureContainer)
    })
  }
}
