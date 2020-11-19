const fishCollection = [ 
  {
  image: "goldfish image.jfif",
  name: "Tom",
  species: "Goldfish",
  length: 3,
  location: "Neighbor's backyard pond",
  diet: "Cheetos"
  },
  {
  image: "clownfish image.jfif",
  name: "Marlin",
  species: "Clownfish",
  length: 8,
  location: "Red Sea",
  diet: "Jalapeno Poppers"
  },
  {
  image: "stingray image.jfif",
  name: "Steve",
  species: "Stingray",
  length: 15,
  location: "The Bermuda Triangle",
  diet: "Algae"
  },
  {
  image: "Whaleshark image.jpg",
  name: "Albert",
  species: "Whale Shark",
  length: 36,
  location: "Exotic pet store",
  diet: "Cheeseburgers"
  },
  {
  image: "Tigershark image.jpg",
  name: "Tony",
  species: "Tiger Shark",
  length: 25,
  location: "Antarctica",
  diet: "Smaller Fish"
  },
  {
  image: "Swordfish image.jpg",
  name: "Stanley",
  species: "Swordfish",
  length: 20,
  location: "Grand Banks of Newfoundland",
  diet: "Steak"
  } ]

  export const useFish = () => {
    return fishCollection.slice()
  }