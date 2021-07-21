import React, { useState } from "react";
import Quotes from "./data";
import "./styles.css";
import BoxQuote from "./components/BoxQuote";
import Colors from "./colors";

function App() {
  const [allQuotes, setAllQuotes] = useState(Quotes());
  const [allRandomColor, setAllRandomColor] = useState(Colors());
  return (
    <div>
      <BoxQuote
        allQuotes={allQuotes}
        setQuotes={setAllQuotes}
        allRandomColor={allRandomColor}
        setRandomColor={setAllRandomColor}
      />
    </div>
  );
}

export default App;
