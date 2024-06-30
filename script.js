document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("new-quote");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  button.addEventListener("click", getContent);

  async function getContent() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      const randomIndex = getRandomNumber(data.length);
      assignPhrase(data[randomIndex]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function assignPhrase({ quote: quoteText, author: authorText }) {
    quote.textContent = quoteText;
    author.textContent = authorText;
  }
});
