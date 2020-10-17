"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #################### Getting Elements Start ########################
var newFirstBtn = document.getElementById("newfirst");
var oldFirstBtn = document.getElementById("oldfirst");
var cardContainer = document.querySelector("#cardContainer");
var body = document.querySelector("body");
// let body = document.getElementById("mainBody");-----> Why is this not working??????????
// #################### Getting Elements End ########################
// #################### Dummies Start ########################
// ---------- Dummy Text ---------
var dummy = "dummy";
var dummyTextJap = "「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 いい誕生日を迎えられますように。 いい誕生日を迎えられますように。 いまはもうこの種のちょうは絶えてしまっている。 ８時にヒースロー空港に到着する予定です。 いろいろな意味で、正直が最善の策であることは言うまでもない。 そんな不当な提案は、拒否すべきだったのに。";
var dummyText = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.";
// #################### Dummies End ########################
// #################### Card gerneration Start ########################
// ---- empty Array for class Card ----
var cardArray = [];
// ---- Card generation class ----
var Card = /** @class */ (function () {
    function Card(cardImg, cardHeader, cardText) {
        this.cardImg = "";
        this.cardHeader = "";
        this.cardText = "";
        this.cardImg = cardImg;
        this.cardHeader = cardHeader;
        this.cardText = cardText;
        cardArray.push(this);
    }
    Card.prototype.renderCard = function () {
        return "         \n    <div id=\"" + this.cardHeader + "\" class=\"col-sm-6 col-lg-3 text-center mb-3 background-card rounded mt-5 mx-2\">\n            <img\n              src=\"" + this.cardImg + "\"\n              alt=\"\"\n              class=\"fill-img img-fluid rounded mt-3\"\n            />\n            <h3 class=\"text-uppercase text-light my-2\">" + this.cardHeader + "</h3>\n            <p class=\"text-light\">\n            " + this.cardText + "\n            </p>\n          </div>";
    };
    return Card;
}());
// ---- Card generation ----
new Card("../img/tokyo3.jpg", "Tokyo", dummyText);
new Card("../img/fukuoka.jpg", "Fukuoka", dummyText);
new Card("../img/hiroshima.jpg", "Hiroshima", dummyText);
new Card("../img/miyazaki.jpg", "Miyazaki", dummyText);
new Card("../img/kumamoto.jpeg", "Kumamoto", dummyText);
new Card("../img/ogasawara.jpg", "Ogasawara", dummyText);
cardArray.forEach(function (value) {
    cardContainer.innerHTML += value.renderCard();
});
// #################### Card gerneration End ########################
// #################### Creating Sections Start ########################
// ---- empty Array for class CreateSection ----
var createSectionArray = [];
// ---- Create all the Sections with start div "hard facts" ----
var CreateSection = /** @class */ (function (_super) {
    __extends(CreateSection, _super);
    function CreateSection(cardImg, cardHeader, cardText, population, island, funFact, myopinion, background, sectionId) {
        var _this = _super.call(this, cardImg, cardHeader, cardText) || this;
        _this.population = population;
        _this.island = island;
        _this.funFact = funFact;
        _this.myopinion = myopinion;
        _this.background = background;
        _this.sectionId = sectionId;
        createSectionArray.push(_this);
        return _this;
    }
    CreateSection.prototype.renderSections = function () {
        return "    <div class=\"container-fluid seperator\">\n      <h1 class=\"\">" + this.cardHeader + "</h1>\n    </div>\n    <section\n      id=\"sectionBgs \"\n      style=\"\n        background: url(" + this.background + ");\n        background-attachment: fixed;\n        background-size: cover;\n        background-position: center;\n      \"\n    >\n      <div class=\"container-fluid\">\n        <div id=\"" + this.sectionId + "\" class=\"row py-5\">\n        <div class=\"background-card col-10 my-2 row\">\n            <img\n              class=\"col-4 img-fluid p-3\"\n              src=\"" + this.cardImg + "\"\n              alt=\"\"\n            />\n            <div class=\"col-8 p-3 text-light\">\n              <h1 class=\"text-white\">Hard Facts</h1>\n              <h4>Population: " + this.population + "</h4>\n              <h4>Island: " + this.island + "</h4>\n              <h4>Fun Fact: " + this.funFact + "</h4>\n              <h4>My Opinion: " + (this.cardText + this.myopinion) + "</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>";
    };
    return CreateSection;
}(Card));
// ----- Create New Sections start -----
new CreateSection("../img/tokyo-hard-facts.webp", "Tokyo 東京", dummyText, "38mio", "Honshu", "every 12 meter is a venting machine", dummyTextJap, "../img/tokyo4.jpg", "tokyo");
new CreateSection("../img/fukuoka-tenjin.webp", "Fukuoka 福岡", dummyText, "1.5mio", "Kyushu", "Has a whole island as redlight disdrict", dummyTextJap, "../img/fukuoka-background.jpg", "fukuoka");
new CreateSection("../img/Hiroshima-hard-facts.jpg", "Hiroshima 広島", dummyText, "1.2mio", "Honshu", "no Fun, in the atomic bomb museum are surviviors from the bomb working", dummyTextJap, "../img/hiroshima-background.jpg", "hiroshima");
new CreateSection("../img/miyazaki-hard-facts.webp", "Miyazaki 宮崎県", dummyText, "1.2mio", "Honshu", "no Fun, in the atomic bomb museum are surviviors from the bomb working", dummyTextJap, "../img/miyazaki-background.jpg", "hiroshima");
createSectionArray.forEach(function (value) {
    body.innerHTML += value.renderSections();
});
// ----- Create New Sections end -----
// ----- Get all the new generated parent divs for Place cards and Foodies Card -----
var tokyoSection = document.querySelector("#tokyo");
var fukuokaSection = document.querySelector("#fukuoka");
var hiroshimaSection = document.querySelector("#hiroshima");
var miyazakiSection = document.querySelector("#miyazaki");
var kumamotoSection = document.querySelector("#kumamoto");
var ogasawaraSection = document.querySelector("#ogasawara");
// #################### Creating Sections End ########################
// ####################
// ####################
// Creating One Array for all Cards for sorting
var superArray = [];
// ####################
// ####################
// #################### Creating Place Cards Start ########################
// ---- empty Array for class Place ----
var placeArray = [];
// ---- Create all the Place Cards  ----
var Place = /** @class */ (function () {
    function Place(place, date, opinion, located, img) {
        this.place = place;
        this.date = date;
        this.opinion = opinion;
        this.located = located;
        this.img = img;
        placeArray.push(this);
        superArray.push(this);
    }
    Place.prototype.renderPlaces = function () {
        return "    \n        <div class=\"background-card col-10 offset-2 my-2 row\">\n        <div class=\"col-8 p-3 text-light\">\n        <h1 class=\"text-white\">Places</h1>\n        <h1>" + this.place + "</h1>\n        <p>" + this.date + "</p>\n        <h3>Opinion</h3>\n        <p>\n        " + this.opinion + "\n        </p>\n      </div>\n      <img\n        class=\"col-4 img-fluid p-3\"\n        src=\"" + this.img + "\"\n        alt=\"\"\n      />\n    </div>";
    };
    return Place;
}());
new Place("Tokyo Digital Art Museum", "2018-08-06", dummyTextJap, "tokyo", "../img/digitalArtMuseum.jpg");
new Place("Shibuya", "2018-12-14", dummyTextJap, "tokyo", "../img/shibuya.jpg");
new Place("Momochi Beach", "2018-07-26", dummyTextJap, "fukuoka", "../img/momochi.JPG");
new Place("Ohori Park", "2018-03-29", dummyTextJap, "fukuoka", "../img/ohori-park.jpg");
// Get all cards in the right Section
placeArray.forEach(function (value) {
    if (value.located == "tokyo") {
        tokyoSection.innerHTML += value.renderPlaces();
    }
    else if (value.located == "fukuoka") {
        fukuokaSection.innerHTML += value.renderPlaces();
    }
    else if (value.located == "hiroshima") {
        hiroshimaSection += value.renderPlaces();
    }
    else if (value.located == "miyazaki") {
        miyazakiSection += value.renderPlaces();
    }
    else if (value.located == "kumamoto") {
        kumamotoSection += value.renderPlaces();
    }
    else if (value.located == "ogasawara") {
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
var foodiesArray = [];
// ---- Create all the Foodies Cards  ----
var Foodies = /** @class */ (function (_super) {
    __extends(Foodies, _super);
    function Foodies(place, date, opinion, located, img) {
        var _this = _super.call(this, place, date, opinion, located, img) || this;
        foodiesArray.push(_this);
        superArray.push(_this);
        return _this;
    }
    Foodies.prototype.renderFoodies = function () {
        return "    \n            <div class=\"background-card col-10 my-2 row\">\n            <img\n              class=\"col-4 img-fluid p-3\"\n              src=\"" + this.img + "\"\n              alt=\"\"\n            />\n            <div class=\"col-8 p-3 text-light\">\n              <h1 class=\"text-white\">For Foodies</h1>\n              <h1>" + this.place + "</h1>\n              <p>" + this.date + "</p>\n              <h3>Opinion</h3>\n              <p>\n              " + this.opinion + "\n              </p>\n            </div>\n          </div>";
    };
    return Foodies;
}(Place));
new Foodies("Shinjuku Fugu Ichiro", "2019-08-09", dummyTextJap, "tokyo", "../img/japanese-food-1.jpg");
new Foodies("Senkichi Curry Udon", "2017-08-08", dummyTextJap, "tokyo", "../img/Curry-Udon.jpg");
// Get all cards in the right Section
foodiesArray.forEach(function (value) {
    if (value.located == "tokyo") {
        tokyoSection.innerHTML += value.renderFoodies();
    }
    else if (value.located == "fukuoka") {
        fukuokaSection.innerHTML += value.renderFoodies();
    }
    else if (value.located == "hiroshima") {
        hiroshimaSection += value.renderFoodies();
    }
    else if (value.located == "miyazaki") {
        miyazakiSection += value.renderFoodies();
    }
    else if (value.located == "kumamoto") {
        kumamotoSection += value.renderFoodies();
    }
    else if (value.located == "ogasawara") {
        ogasawaraSection += value.renderFoodies();
    }
});
// #################### Creating Foodies Cards End ########################
// #################### Creating Event Cards Start ########################
// ---- empty Array for class Events ----
var eventsArray = [];
// ---- Create all the Events Cards  ----
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(place, date, opinion, located, img) {
        var _this = _super.call(this, place, date, opinion, located, img) || this;
        eventsArray.push(_this);
        superArray.push(_this);
        return _this;
    }
    Events.prototype.renderEvents = function () {
        return "    <div class=\"background-card col-10 offset-2 my-2 row\">\n            <div class=\"col-8 p-3 text-light\">\n              <h1 class=\"text-white\">Events</h1>\n              <h1>" + this.place + "</h1>\n              <p>" + this.date + "</p>\n              <h3>Opinion</h3>\n              <p>\n              " + this.opinion + "\n              </p>\n            </div>\n            <img\n              class=\"col-4 img-fluid p-3\"\n              src=\"" + this.img + "\"\n              alt=\"\"\n            />\n          </div>";
    };
    return Events;
}(Place));
new Events("Hanabi", "2016-07-30", dummyTextJap, "tokyo", "../img/hanabi.jpg");
new Events("Enoshima Shonan no Hoseki", "2018-08-14", dummyTextJap, "tokyo", "../img/enoshima-shonen.jpg");
// Get all cards in the right Section
eventsArray.forEach(function (value) {
    if (value.located == "tokyo") {
        tokyoSection.innerHTML += value.renderEvents();
    }
    else if (value.located == "fukuoka") {
        fukuokaSection.innerHTML += value.renderEvents();
    }
    else if (value.located == "hiroshima") {
        hiroshimaSection += value.renderEvents();
    }
    else if (value.located == "miyazaki") {
        miyazakiSection += value.renderEvents();
    }
    else if (value.located == "kumamoto") {
        kumamotoSection += value.renderEvents();
    }
    else if (value.located == "ogasawara") {
        ogasawaraSection += value.renderEvents();
    }
});
// #################### Creating Event Cards Start ########################
// ###################### Page Sorted ##########################
// console.log(superArray);
// sorting Decending start
function sortDecending() {
    var sortedArray = superArray.sort(byDateDec);
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
    var sortedArray = superArray.sort(byDateAc);
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
