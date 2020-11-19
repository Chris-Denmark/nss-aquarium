/**
 *  FishList which renders individual fish objects as HTML
 */
import {mostHolyFish} from './FishSorter.js'

import {soldierFish} from './FishSorter.js'

import {nonHolyFish} from './FishSorter.js'

import {Fish} from './Fish.js'

export const FishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")

  const holyFish = mostHolyFish()

  const soldier = soldierFish()

  const losers = nonHolyFish()

  for (const fish of holyFish) {
    const fishhtml = Fish(fish)
  
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishhtml
   
  }

  for (const fish of soldier) {
    const fishhtml = Fish(fish)
  
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishhtml
   
  }
  for (const fish of losers) {
    const fishhtml = Fish(fish)
  
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishhtml
   
  }
}