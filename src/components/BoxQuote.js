import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function BoxQuote({ allQuotes, allRandomColor }) {
  //quotes
  const randomQuotes = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  const [random, setRandom] = useState(randomQuotes);

  const newQuoteHandler = () => {
    //to run another quote
    const randomQuotes =
      allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setRandom(randomQuotes);
  };

  //colors
  const randomColors =
    allRandomColor[Math.floor(Math.random() * allRandomColor.length)];
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
        <h1>Random Quote Machine</h1>

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

            <a
              style={divStyle}
              target="_blank"
              href="//www.instagram.com"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <button style={divStyle} onClick={newQuoteHandler} id="new-quote">
              Generate
            </button>
          </div>
          <img
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
            alt="fcc"
            className="fcc"
          />
        </div>
      </div>
    </div>
  );
}

export default BoxQuote;
