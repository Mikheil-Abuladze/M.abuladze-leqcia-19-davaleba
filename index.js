const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

function displayCharacters() {
  const container = document.getElementById("characters-container");
  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = `${character.first_name} ${character.last_name}`;

    const name = document.createElement("h3");
    name.textContent = `${character.first_name} ${character.last_name}`;

    const house = document.createElement("p");
    house.textContent = `House: ${character.house}`;

    const actor = document.createElement("p");
    actor.textContent = `Actor: ${character.actor}`;

    characterDiv.appendChild(img);
    characterDiv.appendChild(name);
    characterDiv.appendChild(house);
    characterDiv.appendChild(actor);

    container.appendChild(characterDiv);
  });
}

displayCharacters();
