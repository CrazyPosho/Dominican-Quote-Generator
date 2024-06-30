const button = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

button.addEventListener("click", getContent);
function getContent() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const random = getRandomNumber();
      assingPhrase(data, random);
    });
}
function getRandomNumber() {
  return Math.floor(Math.random() * 24);
}
function assingPhrase(data, random) {
  quote.textContent = data[random].quote;
  author.textContent = data[random].author;
}
function refresh() {
  location.reload();
}
