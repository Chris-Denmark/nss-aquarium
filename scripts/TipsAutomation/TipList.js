import {useTip} from "./TipProvider.js"

import {Tip} from "./Tip.js"

export const TipCollection = () => {
  const contentElement = document.querySelector(".tankTips")

  const allTheTips = useTip()

  for (const tip of allTheTips) {
    const tiphtml = Tip(tip)

    contentElement.innerHTML += tiphtml
  }
}