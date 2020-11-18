import {useQuote} from './QuoteProvider.js'

import {Quote} from './Quote.js'

export const QuotesList = () => {
  const contentElement = document.querySelector(".quotes")

  const allTheQuotes = useQuote()

  for (const quote of allTheQuotes) {
    const quotehtml = Quote(quote)

    contentElement.innerHTML += quotehtml
  }
}