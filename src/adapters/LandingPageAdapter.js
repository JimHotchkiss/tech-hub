// This 'Adapter' connects us to the api, the data
class LandingPageAdapter {
  constructor() {
    this.baseUrl = "../../data/landingPage.json"
  }
  getLandingPageFeatures() {
    return fetch(this.baseUrl).then((response) => response.json())
  }
}
