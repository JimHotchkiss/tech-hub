class UpdateNavbar {
  constructor(featureData) {
    this.retrieveNavbarElement(featureData)
  }

  retrieveNavbarElement(featureData) {
    const navbar = document.getElementsByClassName("navbar")
    console.log(navbar[0], featureData)
  }
}
