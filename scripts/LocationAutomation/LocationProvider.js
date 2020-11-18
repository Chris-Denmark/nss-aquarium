const LocationCollection = [
  {
    image: "turtle picture.jpg",
    name: "Great Barrier Reef",
    url: "https://www.australia.com/en-us/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html",
    desc:"Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, both in luxury and on a budget. Whether you explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard, a day on the reef is all about the unforgettable nature that surrounds you. Adopt Australia's easygoing attitude when you island-hop, or stay in one of the many coastal getaways such as Cairns, Airlie Beach, Hervey Bay, Mission Beach and Port Douglas.",
  }
]

export const useLocation = () => {
  return LocationCollection.slice()
}