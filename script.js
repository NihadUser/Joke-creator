const button = document.getElementById("btn");
const jokeAuthor = document.getElementById("jokeAuthor");
const jokeTitle = document.getElementById("jokeTitle");
const image = document.getElementById("img");
button.addEventListener("click", () => {
  jokeCreator();
});

jokeCreator = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((res) => imageCreator(res.url, res.title, res.author));
};
const imageCreator = (url, title, author) => {
  image.setAttribute("src", url);
  jokeAuthor.innerHTML = author;
  jokeTitle.innerHTML = title;
};
