import { v4 as uuidv4 } from "uuid";

function Quotes() {
  return [
    {
      text: "The person who says it cannot be done should not interrupt the person who is doing it",
      author: "- Chinese Proverb",
      id: uuidv4(),
    },
    {
      text: "An unexamined life is not worth living.",
      author: "- Socrates",
      id: uuidv4(),
    },
    {
      text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "- Maya Angelou",
      id: uuidv4(),
    },
    {
      text: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "- Maimonides",
      id: uuidv4(),
    },
    {
      text: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "- Tony Robbins",
      id: uuidv4(),
    },
    {
      text: "Change your thoughts and you change your world.",
      author: "- Norman Vincent Peale",
      id: uuidv4(),
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "- Buddha",
      id: uuidv4(),
    },

    {
      text: "Fall seven times and stand up eight.",
      author: "- Japanese Proverb",
      id: uuidv4(),
    },
  ];
}

export default Quotes;
