let movies = [
  {
    name: "The falcon and the winter soldier",
    desc: "After Avengers EndGame",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    desc:
      "The mercurial villain Loki resumes his role as the God of Mischeif in a new series that takes place after the events of Avengers: EndGame",
    image: "images/slider 1.PNG"
  },
  {
    name: "wandavision",
    desc: "Two ssuper-powered beigns living idealized suburban lives",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    desc:
      "A fallen princess, must track down the legendary last dragon to stop the evil forces",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    desc:
      "one yooung boy experiencing an unforgettable summer filled with galato, pasta and endless scooter rides.",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;
//  track current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("content");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].desc));

  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-desc";

  sliders.push(slide);

  if (sliders.length) {
    // formula
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// Video Cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.paused();
  });
});

// card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items, i) => {
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});
