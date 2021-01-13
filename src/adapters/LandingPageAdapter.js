// This 'Adapter' connects us to the api, the data
class landingPageAdapter {
  constructor() {
    this.baseUrl = "../../data/landingPage.json"
  }
  getLandingPageFeatures() {
    return fetch(this.baseUrl).then((response) => response.json())
  }
}
