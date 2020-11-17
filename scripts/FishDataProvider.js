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
  } ]

  export const useFish = () => {
    return fishCollection.slice()
  }