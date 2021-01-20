class ResetNavbarAndFeature {
  renderNewLandingPage() {
    this.resetNavbar()
    this.resetFeature()
    new LandingPage()
  }

  resetNavbar() {
    const navbar = document.getElementById("navbar")
    if (navbar.parentNode) {
      navbar.parentNode.removeChild(navbar)
    }
  }

  resetFeature() {
    const componentsContainer = document.getElementById("components-container")
    if (componentsContainer) {
      componentsContainer.parentNode.removeChild(componentsContainer)
    }
  }
}
