import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

function BoxQuote({ allQuotes, allRandomColor }) {
  //quotes
  const randomQuotes = allQuotes[Math.floor(Math.random() * 4)];
  const [random, setRandom] = useState(randomQuotes);

  const newQuoteHandler = () => {
    //to run another quote
    const randomQuotes = allQuotes[Math.floor(Math.random() * 4)];
    setRandom(randomQuotes);
  };

  //colors
  const randomColors = allRandomColor[Math.floor(Math.random() * 6)];
  const divStyle = {
    backgroundColor: randomColors.color,
    transition: "0.3s all ease-in",
  };

  const textStyle = {
    color: randomColors.color,
    transition: "all 1s ease-out",
  };

  return (
    <div>
      <div id="quote-box" style={divStyle}>
        <div className="box">
          <div className="texts">
            <h2 id="text" style={textStyle}>
              <span className="quotation">❛❛ </span>
              {random.text}
            </h2>
            <p id="author" style={textStyle}>
              {random.author}
            </p>
          </div>

          <div className="footer">
            <a
              style={divStyle}
              href={`//www.twitter.com/intent/tweet?text=${random.text} ${random.author}`}
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a style={divStyle} href="/tumblr" className="tumblr">
              <FontAwesomeIcon icon={faTumblr} />
            </a>
            <button style={divStyle} onClick={newQuoteHandler} id="new-quote">
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxQuote;
