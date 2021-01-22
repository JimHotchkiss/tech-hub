class FilterSelection {
  filterCcu(components, selections) {
    return components.find((component) => component.id === selections[0])
  }

  filterMonitor(monitors, selections) {
    return monitors.find((component) => component.id === selections[1])
  }

  filterSpecialties(monitor, selections) {
    return monitor.find((specialty) => specialty.name === selections[2])
  }
}
