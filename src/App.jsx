import "./styles.scss";
import {useState, useEffect} from "react";

{/*}

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized. */}
export default function App (props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [counter, setCounter] = useState(0);
  const [background, setBackground] = useState("grey");
  const quotes = [
    {text: "quote", author: "author" },
    {text: "quote2", author: "author2"},
  ]
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "grey"];

  useEffect(() => {
    var randIndex = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randIndex].text);
    setAuthor(quotes[randIndex].author);
    setBackground(Math.floor(Math.random()*colors.length));
  }, [counter]);

  return(<>
  <div id="background" style={{backgroundColor: background}}>
    <div id="quote-box">
      <p id="text">
        {quote}
      </p>
      <p id="author">
        {author}
      </p>
      <button id="new-quote" onClick={() => {setCounter(counter + 1)}}>
        New Quote
      </button>
      <button id="tweet-quote">
        [Tweet Quote]
      </button>
    </div>
    </div>
  </>)
}