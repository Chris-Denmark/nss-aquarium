/**
 *  FishList which renders individual fish objects as HTML
 */


import {useFish} from './FishDataProvider.js'

import {Fish} from './Fish.js'

export const FishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")

  const allTheFish = useFish()

  for (const fish of allTheFish) {
    const fishhtml = Fish(fish)
  
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishhtml
   
  }
}