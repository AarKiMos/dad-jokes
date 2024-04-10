async function getJokes(event) {
  const mainContainer = document.querySelector("#main-container");
  const refNode = document.querySelector("#ref-card");

  const input = document.querySelector("#search-query").value;
  console.log(input);

  const response = await fetch(`/api/v1/jokes/search?term=${input}`);
  const jokes = await response.json();

  console.log(jokes);

  mainContainer.innerHTML = "";

  // document.querySelector("#result-count").innerText = `Showing ${jokes.} ;

  jokes.results.forEach((joke) => {
    const joke_id = joke.id;
    console.log(joke_id);

    const newNode = refNode.cloneNode("true");
    newNode.classList.remove("d-none");
    newNode.id = joke_id;

    const imgNode = newNode.querySelector(".joke-image");
    imgNode.setAttribute("src", `https://icanhazdadjoke.com/j/${joke_id}.png`);

    const idNode = newNode.querySelector(".joke_id");
    idNode.innerText = joke_id;

    const saveBtn = newNode.querySelector(".save-btn");
    saveBtn.setAttribute("data-joke_id", joke_id);

    saveBtn.addEventListener("click", saveJoke);
    mainContainer.appendChild(newNode);
  });
}

document.querySelector("#search-submit").addEventListener("click", getJokes);

async function saveJoke(event) {
  console.log(event.target.dataset.joke_id);

  const response = await fetch("/api/v1/jokes/saved", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      joke_id: event.target.dataset.joke_id,
    }),
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
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}
