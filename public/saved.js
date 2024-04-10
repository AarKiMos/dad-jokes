async function listSavedJokes() {
  const mainContainer = document.querySelector("#main-container");
  const refNode = document.querySelector("#ref-card");

  const response = await fetch(`/api/v1/jokes/saved`);
  const jokes = await response.json();

  console.log(jokes);

  mainContainer.innerHTML = "";

  // document.querySelector("#result-count").innerText = `Showing ${jokes.} jokes`

  jokes.result.forEach((joke_id) => {
    console.log(joke_id);

    const newNode = refNode.cloneNode("true");
    newNode.classList.remove("d-none");
    newNode.id = joke_id;

    const imgNode = newNode.querySelector(".joke-image");
    imgNode.setAttribute("src", `https://icanhazdadjoke.com/j/${joke_id}.png`);

    const idNode = newNode.querySelector(".joke_id");
    idNode.innerText = joke_id;

    const delBtn = newNode.querySelector(".del-btn");
    delBtn.setAttribute("data-joke_id", joke_id);

    delBtn.addEventListener("click", deleteJoke);
    mainContainer.appendChild(newNode);
  });
}

async function deleteJoke(event) {
  console.log(event.target.dataset.joke_id);

  const response = await fetch(
    `/api/v1/jokes/saved/${event.target.dataset.joke_id}`,
    {
      method: "DELETE",
    }
  );
  location.reload();
}

listSavedJokes();
