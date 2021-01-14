class FeatureAdapter {
  constructor(featureId) {
    this.featureUrl = `../../data/${featureId}.json`
    this.getFeatureData()
  }
  getFeatureData() {
    return fetch(this.featureUrl).then((response) => response.json())
  }
}
