import "./styles.scss";
import {useState, useEffect} from "react";

{/*
User Story #10: I can tweet the current quote by clicking on 
the #tweet-quote a element. This a element should include the 
"twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
*/}
export default function App (props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [counter, setCounter] = useState(0);
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "grey"];
  const [color, setColor] = useState("grey");
  const quotes = [
    {text: "An unexamined life is not worth living.", author: "Socrates" },
    {text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.", author: "Abigail Van Buren"},
    {text: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb"},
  ]


  useEffect(() => {
    var randIndex = Math.floor(Math.random()*quotes.length);
    var randColor = Math.floor(Math.random()*colors.length);
    setQuote(quotes[randIndex].text);
    setAuthor(quotes[randIndex].author);
    setColor(colors[randColor]);
    const background = document.querySelector("body");
    const textColor = document.querySelector("#text");
    const authorColor = document.querySelector("#author");
    const buttonBG = document.querySelector("#tweet-quote");
    const buttonBG2 = document.querySelector("#new-quote");
    background.style.backgroundColor=color;
    textColor.style.color = color;
    authorColor.style.color = color;
    buttonBG.style.backgroundColor = color;
    buttonBG2.style.backgroundColor = color;
  }, [counter]);

  return(<>
    <div id="quote-box">
      <p id="text">
        {quote}
      </p>
      <p id="author">
        - {author}
      </p>
      <div id="btn-container">
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        Tweet Quote
      </a>
      <button id="new-quote" onClick={() => {setCounter(counter + 1)}}>
        New Quote
      </button></div>
    </div>
  </>)
}