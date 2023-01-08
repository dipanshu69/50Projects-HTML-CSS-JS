const btn = document.getElementById("btn");
const jokes = document.getElementById("jokes");
console.log(jokes);
console.log(btn);

const getJokes = async () => {
  try {
    const config = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch("https://icanhazdadjoke.com", config);
    const data = await response.json();
    return data.joke;
  } catch (err) {
    console.log(err);
  }
};



btn.addEventListener("click", async() => {
  const joke = await getJokes();
  jokes.innerHTML = joke;
});
