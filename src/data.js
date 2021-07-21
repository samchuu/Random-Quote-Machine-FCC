import { v4 as uuidv4 } from "uuid";

function Quotes() {
  return [
    {
      text: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "- Charles Swindoll",
      id: uuidv4(),
    },
    {
      text: "Life shrinks or expands in proportion to one’s courage.",
      author: "- Anais Nin",
      id: uuidv4(),
    },
    {
      text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "- Amelia Earhart",
      id: uuidv4(),
    },
    {
      text: "Every strike brings me closer to the next home run.",
      author: "- Babe Ruth",
      id: uuidv4(),
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "- Confucius",
      id: uuidv4(),
    },
  ];
}

export default Quotes;
