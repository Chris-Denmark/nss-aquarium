import {useLocation} from "./LocationProvider.js"

import {Location} from "./Location.js"

export const LocationCollection = () => {
  const contentElement = document.querySelector(".locations")

  const allTheLocations = useLocation()

  for (const location of allTheLocations) {
    const locationhtml = Location(location)

    contentElement.innerHTML += locationhtml
  }
}