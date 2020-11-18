const TipCollection = [
  {
    text: "Different colored stones look really good in the bottom of the tank",
  },
  {
    text: "Keep your tank Ph balanced",
  }
]

export const useTip = () => {
  return TipCollection.slice()
}