"use strict";

// #################### Getting Elements Start ########################

let newFirstBtn = document.getElementById("newfirst");
let oldFirstBtn = document.getElementById("oldfirst");
let cardContainer = document.querySelector("#cardContainer");
let body = document.querySelector("body");
// let body = document.getElementById("mainBody");-----> Why is this not working??????????

// #################### Getting Elements End ########################

// #################### Dummies Start ########################

// ---------- Dummy Text ---------

let dummy = "dummy";

let dummyTextJap =
  "「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 いい誕生日を迎えられますように。 いい誕生日を迎えられますように。 いまはもうこの種のちょうは絶えてしまっている。 ８時にヒースロー空港に到着する予定です。 いろいろな意味で、正直が最善の策であることは言うまでもない。 そんな不当な提案は、拒否すべきだったのに。";

let dummyText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.";

// #################### Dummies End ########################

// #################### Card gerneration Start ########################

// ---- empty Array for class Card ----
let cardArray = [];
// ---- Card generation class ----
class Card {
  cardImg = "";
  cardHeader = "";
  cardText = "";

  constructor(cardImg, cardHeader, cardText) {
    this.cardImg = cardImg;
    this.cardHeader = cardHeader;
    this.cardText = cardText;
    cardArray.push(this);
  }

  renderCard() {
    return `         
    <div id="${this.cardHeader}" class="col-sm-6 col-lg-3 text-center mb-3 background-card rounded mt-5 mx-2">
            <img
              src="${this.cardImg}"
              alt=""
              class="fill-img img-fluid rounded mt-3"
            />
            <h3 class="text-uppercase text-light my-2">${this.cardHeader}</h3>
            <p class="text-light">
            ${this.cardText}
            </p>
          </div>`;
  }
}

// ---- Card generation ----
new Card("../img/tokyo3.jpg", "Tokyo", dummyText);
new Card("../img/fukuoka.jpg", "Fukuoka", dummyText);
new Card("../img/hiroshima.jpg", "Hiroshima", dummyText);
new Card("../img/miyazaki.jpg", "Miyazaki", dummyText);
new Card("../img/kumamoto.jpeg", "Kumamoto", dummyText);
new Card("../img/ogasawara.jpg", "Ogasawara", dummyText);

cardArray.forEach((value) => {
  cardContainer.innerHTML += value.renderCard();
});

// #################### Card gerneration End ########################

// #################### Creating Sections Start ########################

// ---- empty Array for class CreateSection ----
let createSectionArray = [];
// ---- Create all the Sections with start div "hard facts" ----
class CreateSection extends Card {
  population;
  island;
  funFact;
  myopinion;
  background;
  sectionId;

  constructor(
    cardImg,
    cardHeader,
    cardText,
    population,
    island,
    funFact,
    myopinion,
    background,
    sectionId
  ) {
    super(cardImg, cardHeader, cardText);
    this.population = population;
    this.island = island;
    this.funFact = funFact;
    this.myopinion = myopinion;
    this.background = background;
    this.sectionId = sectionId;
    createSectionArray.push(this);
  }

  renderSections() {
    return `    <div class="container-fluid seperator">
      <h1 class="">${this.cardHeader}</h1>
    </div>
    <section
      id="sectionBgs "
      style="
        background: url(${this.background});
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      "
    >
      <div class="container-fluid">
        <div id="${this.sectionId}" class="row py-5">
        <div class="background-card col-10 my-2 row">
            <img
              class="col-4 img-fluid p-3"
              src="${this.cardImg}"
              alt=""
            />
            <div class="col-8 p-3 text-light">
              <h1 class="text-white">Hard Facts</h1>
              <h4>Population: ${this.population}</h4>
              <h4>Island: ${this.island}</h4>
              <h4>Fun Fact: ${this.funFact}</h4>
              <h4>My Opinion: ${this.cardText + this.myopinion}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}

// ----- Create New Sections start -----

new CreateSection(
  "../img/tokyo-hard-facts.webp",
  "Tokyo 東京",
  dummyText,
  "38mio",
  "Honshu",
  "every 12 meter is a venting machine",
  dummyTextJap,
  "../img/tokyo4.jpg",
  "tokyo"
);

new CreateSection(
  "../img/fukuoka-tenjin.webp",
  "Fukuoka 福岡",
  dummyText,
  "1.5mio",
  "Kyushu",
  "Has a whole island as redlight disdrict",
  dummyTextJap,
  "../img/fukuoka-background.jpg",
  "fukuoka"
);

new CreateSection(
  "../img/Hiroshima-hard-facts.jpg",
  "Hiroshima 広島",
  dummyText,
  "1.2mio",
  "Honshu",
  "no Fun, in the atomic bomb museum are surviviors from the bomb working",
  dummyTextJap,
  "../img/hiroshima-background.jpg",
  "hiroshima"
);

new CreateSection(
  "../img/miyazaki-hard-facts.webp",
  "Miyazaki 宮崎県",
  dummyText,
  "1.2mio",
  "Honshu",
  "no Fun, in the atomic bomb museum are surviviors from the bomb working",
  dummyTextJap,
  "../img/miyazaki-background.jpg",
  "hiroshima"
);

createSectionArray.forEach((value) => {
  body.innerHTML += value.renderSections();
});

// ----- Create New Sections end -----
// ----- Get all the new generated parent divs for Place cards and Foodies Card -----

let tokyoSection = document.querySelector("#tokyo");
let fukuokaSection = document.querySelector("#fukuoka");
let hiroshimaSection = document.querySelector("#hiroshima");
let miyazakiSection = document.querySelector("#miyazaki");
let kumamotoSection = document.querySelector("#kumamoto");
let ogasawaraSection = document.querySelector("#ogasawara");

// #################### Creating Sections End ########################
// ####################
// ####################

// Creating One Array for all Cards for sorting
let superArray = [];

// ####################
// ####################
// #################### Creating Place Cards Start ########################
// ---- empty Array for class Place ----
let placeArray = [];
// ---- Create all the Place Cards  ----
class Place {
  place;
  date;
  opinion;
  located;
  img;

  constructor(place, date, opinion, located, img) {
    this.place = place;
    this.date = date;
    this.opinion = opinion;
    this.located = located;
    this.img = img;
    placeArray.push(this);
    superArray.push(this);
  }

  renderPlaces() {
    return `    
        <div class="background-card col-10 offset-2 my-2 row">
        <div class="col-8 p-3 text-light">
        <h1 class="text-white">Places</h1>
        <h1>${this.place}</h1>
        <p>${this.date}</p>
        <h3>Opinion</h3>
        <p>
        ${this.opinion}
        </p>
      </div>
      <img
        class="col-4 img-fluid p-3"
        src="${this.img}"
        alt=""
      />
    </div>`;
  }
}

new Place(
  "Tokyo Digital Art Museum",
  "2018-08-06",
  dummyTextJap,
  "tokyo",
  "../img/digitalArtMuseum.jpg"
);

new Place("Shibuya", "2018-12-14", dummyTextJap, "tokyo", "../img/shibuya.jpg");

new Place(
  "Momochi Beach",
  "2018-07-26",
  dummyTextJap,
  "fukuoka",
  "../img/momochi.JPG"
);

new Place(
  "Ohori Park",
  "2018-03-29",
  dummyTextJap,
  "fukuoka",
  "../img/ohori-park.jpg"
);

// Get all cards in the right Section
placeArray.forEach((value) => {
  if (value.located == "tokyo") {
    tokyoSection.innerHTML += value.renderPlaces();
  } else if (value.located == "fukuoka") {
    fukuokaSection.innerHTML += value.renderPlaces();
  } else if (value.located == "hiroshima") {
    hiroshimaSection += value.renderPlaces();
  } else if (value.located == "miyazaki") {
    miyazakiSection += value.renderPlaces();
  } else if (value.located == "kumamoto") {
    kumamotoSection += value.renderPlaces();
  } else if (value.located == "ogasawara") {
    ogasawaraSection += value.renderPlaces();
  }
});

// ################# ???? does not work ????? ##################

// placeArray.forEach((value) => {
//   switch (value.located) {
//     case "tokyo":
//       tokyoSection.innerHTML += value.renderPlaces();
//     case "fukuoka":
//       fukuokaSection.innerHTML += value.renderPlaces();
//   }
// });

// ###########################################################

// #################### Creating Place Cards End ########################
// #################### Creating Foodies Cards Start ########################
// ---- empty Array for class Foodies ----
let foodiesArray = [];
// ---- Create all the Foodies Cards  ----

class Foodies extends Place {
  constructor(place, date, opinion, located, img) {
    super(place, date, opinion, located, img);
    foodiesArray.push(this);
    superArray.push(this);
  }
  renderFoodies() {
    return `    
            <div class="background-card col-10 my-2 row">
            <img
              class="col-4 img-fluid p-3"
              src="${this.img}"
              alt=""
            />
            <div class="col-8 p-3 text-light">
              <h1 class="text-white">For Foodies</h1>
              <h1>${this.place}</h1>
              <p>${this.date}</p>
              <h3>Opinion</h3>
              <p>
              ${this.opinion}
              </p>
            </div>
          </div>`;
  }
}

new Foodies(
  "Shinjuku Fugu Ichiro",
  "2019-08-09",
  dummyTextJap,
  "tokyo",
  "../img/japanese-food-1.jpg"
);

new Foodies(
  "Senkichi Curry Udon",
  "2017-08-08",
  dummyTextJap,
  "tokyo",
  "../img/Curry-Udon.jpg"
);

// Get all cards in the right Section
foodiesArray.forEach((value) => {
  if (value.located == "tokyo") {
    tokyoSection.innerHTML += value.renderFoodies();
  } else if (value.located == "fukuoka") {
    fukuokaSection.innerHTML += value.renderFoodies();
  } else if (value.located == "hiroshima") {
    hiroshimaSection += value.renderFoodies();
  } else if (value.located == "miyazaki") {
    miyazakiSection += value.renderFoodies();
  } else if (value.located == "kumamoto") {
    kumamotoSection += value.renderFoodies();
  } else if (value.located == "ogasawara") {
    ogasawaraSection += value.renderFoodies();
  }
});

// #################### Creating Foodies Cards End ########################
// #################### Creating Event Cards Start ########################
// ---- empty Array for class Events ----
let eventsArray = [];
// ---- Create all the Events Cards  ----
class Events extends Place {
  constructor(place, date, opinion, located, img) {
    super(place, date, opinion, located, img);
    eventsArray.push(this);
    superArray.push(this);
  }

  renderEvents() {
    return `    <div class="background-card col-10 offset-2 my-2 row">
            <div class="col-8 p-3 text-light">
              <h1 class="text-white">Events</h1>
              <h1>${this.place}</h1>
              <p>${this.date}</p>
              <h3>Opinion</h3>
              <p>
              ${this.opinion}
              </p>
            </div>
            <img
              class="col-4 img-fluid p-3"
              src="${this.img}"
              alt=""
            />
          </div>`;
  }
}

new Events("Hanabi", "2016-07-30", dummyTextJap, "tokyo", "../img/hanabi.jpg");
new Events(
  "Enoshima Shonan no Hoseki",
  "2018-08-14",
  dummyTextJap,
  "tokyo",
  "../img/enoshima-shonen.jpg"
);

// Get all cards in the right Section
eventsArray.forEach((value) => {
  if (value.located == "tokyo") {
    tokyoSection.innerHTML += value.renderEvents();
  } else if (value.located == "fukuoka") {
    fukuokaSection.innerHTML += value.renderEvents();
  } else if (value.located == "hiroshima") {
    hiroshimaSection += value.renderEvents();
  } else if (value.located == "miyazaki") {
    miyazakiSection += value.renderEvents();
  } else if (value.located == "kumamoto") {
    kumamotoSection += value.renderEvents();
  } else if (value.located == "ogasawara") {
    ogasawaraSection += value.renderEvents();
  }
});

// #################### Creating Event Cards Start ########################
// ###################### Page Sorted ##########################

// console.log(superArray);

// sorting Decending start
function sortDecending() {
  let sortedArray = superArray.sort(byDateDec);
  console.log(sortedArray);
  return sortedArray;
}

function byDateDec(a, b) {
  return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}

// oldFirstBtn.addEventListener("click", () => {
//   console.log("hallo");
// });
//

oldFirstBtn.addEventListener("click", sortDecending, false);

// sorting Decending end
// sorting acendig start

function sortAcending() {
  let sortedArray = superArray.sort(byDateAc);
  console.log(sortedArray);
  return sortedArray;
}

function byDateAc(a, b) {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf();
}

newFirstBtn.addEventListener("click", sortAcending, false);

// sorting acendig end

// CALLING FUNCTIONS BECAUSE FOR SOME REASONS THE BUTTONS ARE NOT WORKING
sortDecending();
sortAcending();
