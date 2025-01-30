console.log("JavaScript geladen!");
// Audio

const audio = document.createElement("audio");
audio.src = "media/cave.ogg";
audio.controls = true;
audio.autoplay = true;
audio.volume = 0.05;

document.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch((error) => {
      console.error("Audio konnte nicht abgespielt werden:", error);
    });
  }
});

// Klick-Text, Erste Seite, Überschrift

let textIndex = 0;
const texts = ["Eine kleine Spielerei", "Willkommen zur Demo!"];

function init1() {
  document.querySelector("body").addEventListener("click", function () {
    if (textIndex === texts.length) {
      return;
    }
    this.querySelector("#haupt").textContent = texts[textIndex];
    textIndex = textIndex + 1;
  });

  // Sehr witzig Textbox, Erste Seite
  document.getElementById("alert").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Sehr witzig...");
  });
}

// Klick-Text, erste Seite Hauptbox?

// Orientierung auf welcher Seite du bist

const navLinks = document.querySelectorAll(".nav a");
const currentURL = window.location.href;

navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});

//  Zweite Seite, Zahleingabe
function init2() {
  document.getElementById("zahl").addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    const eingabe = document.getElementById("textfeld").valueAsNumber;
    const zahlRichtig = 6478917;
    const falsch = "choices/flashbang.html";
    const richtig = "thirdmain.html";

    if (eingabe === zahlRichtig) {
      window.location.href = richtig;
    } else {
      window.location.href = falsch;
    }
  });
}
// init existiert

function init3() {
  let textIndex = 0;
  const texts = ["1", "2", "3", "I can only count to 3..."];

  document.querySelector("body").addEventListener("click", function () {
    if (textIndex === texts.length) {
      return;
    }
    this.querySelector("#haupt").textContent = texts[textIndex];
    textIndex = textIndex + 1;
  });

  // Autoscroll auf Seite 3
  let autoScroll = false;

  const zielBild = document.querySelector(".img7");

  if (zielBild) {
    const dahin = zielBild.offsetTop;
    console.log("Zielbild-Position:", dahin);

    window.addEventListener("scroll", () => {
      if (!autoScroll) {
        autoScroll = true;

        const speedScroll = setInterval(() => {
          if (window.scrollY >= dahin) {
            clearInterval(speedScroll);
            console.log("Ziel erreicht, Scrollen gestoppt.");
          } else {
            window.scrollBy(0, 15);
          }
        },);
      }
    });
  } else {
    console.log("Das Zielbild wurde nicht gefunden.");
  }
}
