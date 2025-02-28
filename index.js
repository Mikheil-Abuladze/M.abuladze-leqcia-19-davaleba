const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poshttps://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%https://miro.medium.com/v2/resize:fit:768/1*obDCz57X7D2Kd1XvcdI0Iw.jpeg29.jpg/revision/latest/scale-to-width-down/1200?cb=20141230074301ter.jpghthttps://i0.wp.com/thebookdragonchronicles.wordhttps://miro.medium.com/v2/resize:fit:1400/format:webp/1*obDCz57X7D2Kd1XvcdI0Iw.jpegpress.com/wp-content/uploads/2016/04/hermionemovie1.jpg?w=494&h=686&ssl=1tp://hp-https://imgix.bustle.com/rehost/2016/9/14/f4246d6d-be37-4fdc-875c-279afc2519f2.jpg?w=248&h=177&fit=crop&crop=faces&dpr=2api.herokuapp.com/images/hermione.jpeghtthttps://upload.wikimedia.org/wikipedia/en/d/d3/By https://harrypotter.fandom.com/f/p/3343172654596426636/r/3344233352138735836, Fair use, https://en.wikipedia.org/w/index.php?curid=12437770Hermione_Granger_poster.jpgps://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
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
