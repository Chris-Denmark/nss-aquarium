const QuotesList = [
  {
    text: "Just Keep Swimming!",
    author: "-Dory"
  },
  {
    text: "Fish are friends, not food.",
    author: "-Bruce"
  }
]

export const useQuote = () => {
  return QuotesList.slice()
}