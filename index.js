console.log("workingjavascript");

const button = document.querySelector(".button");
const text = document.querySelector(".text");
const spacebar = document.querySelector(".spacebar");
const background = document.querySelector(".background");
const begintext = document.querySelector(".begintext");
const yesno = document.querySelector(".yesno");
const audio = new Audio("images/mouse-click-153941.mp3");
const bling = new Audio("images/blingsound.mp3");
const house = document.querySelector(".house");

//Sound Effect by <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=153941">Jurij</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=153941">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/irinairinafomicheva-25140203/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=13691">irinairinafomicheva</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=13691">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185287">floraphonic</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185287">Pixabay</a>

//spacebar element wordt in het begin niet weergegeven
spacebar.style.visibility = "hidden";

//de achtergrond wordt eerst de class blackground1 gegeven voor de donkere achtergrond
background.classList.add("background1");

//functie om text weer te geven
function displayContent() {
  text.textContent =
    "You thought this button actually did something, huh. We'll, you're wrong. To actually start, press:";
}

//functie om de spacebar weer te geven zou deze "hidden" zijn
function displaySpacebar() {
  if (spacebar.style.visibility === "hidden") {
    spacebar.style.visibility = "visible";

    console.log("visible spacebar");
  }
}

//startknop verbergen
function hideStartbutton() {
  button.style.visibility = "hidden";
}

console.log(spacebar);

//functie om de text en de spacebar element weer te geven en de button te verbergen
function displayEverything() {
  displayContent();

  displaySpacebar();

  hideStartbutton();
}

button.addEventListener("click", function () {
  displayEverything();
  audio.play();
});

//de achtergrond wordt een nieuwe class gegeven om de achtergrond kleur te veranderen
function changeBackground() {
  background.classList.add("background2");
}

let clickState = false;

console.log("the begin state is now: " + clickState);

//functie die het event bepaald als de spacebar geklikt wordt
function spacebarKeydown(event) {
  if (event.key === " ") {
    //clickState om te bepalen of spacebar al geklikt werd of niet
    if (clickState === false) {
      //zo niet wordt de clickState verandert zodat bij de volgende klik een ander event plaatsvindt
      clickState = true;
      //achtergrond wordt naar "background2" verandert
      changeBackground();
      //alles wordt "hidden" behalve de nieuwe textContent
      begintext.style.visibility = "hidden";

      text.style.visibility = "visible";
      text.style.color = "black";
      text.textContent =
        "Ha, I fooled you. There actually is no game. I just don't like the dark. Thank you for turning on the light.";
      //er wordt de sound effect "bling" weergegeven als spacebar geklikt wordt
      bling.play();

      console.log("the begin state is now: " + clickState);
    } else {
      //if clickState = true; wordt een andere text weergegeven
      text.style.visibility = "visible";
      text.style.color = "black";
      spacebar.style.visibility = "hidden";
      text.textContent =
        "Did you just try to turn off the light again? Well, it doesn't work like that. But I guess I can thank you for turning on the light. I don't have much to give but...do you want to see my face?";
      //en er worden 2 buttons weergegeven
      yesno.style.visibility = "visible";
      bling.play();

      console.log("the begin state is now: " + clickState);
    }
  }
}

document.addEventListener("keydown", spacebarKeydown);

const yesButton = document.querySelector("#yesbutton");
const noButton = document.querySelector("#nobutton");
const arrows = document.querySelector(".arrows");
const woman = document.querySelector(".woman");

function noDisplay() {
  //als de no-button geklikt wordt wordt deze text weergegeven
  text.textContent =
    "Ungrateful brat. Well, here I am anyway, whether you like it or not. And I'll even tell you a secret. If you press these buttons on your keyboard, you can move me.";
  //de yes en no-buttons verdwijnen en je kan de vrouw en de peijltjes zien
  yesno.style.visibility = "collapse";
  arrows.style.visibility = "visible";
  woman.style.visibility = "visible";
  //als je opnieuw op spacebar klikt gebeurt niks meer
  document.removeEventListener("keydown", spacebarKeydown);
  //audio effect voor het klikken op een button
  audio.play();
}

function yesDisplay() {
  //als de yes-button geklikt wordt wordt deze text weergegeven
  text.textContent =
    "There you go. Here I am. This is me. And I'll even tell you a secret. If you press these buttons on your keyboard, you can move me.";
  //de yes en no-buttons verdwijnen en je kan de vrouw en de peijltjes zien
  yesno.style.visibility = "collapse";
  arrows.style.visibility = "visible";
  woman.style.visibility = "visible";
  //als je opnieuw op spacebar klikt gebeurt niks meer
  document.removeEventListener("keydown", spacebarKeydown);
  //audio effect voor het klikken op een button
  audio.play();
}

yesButton.addEventListener("click", yesDisplay);
noButton.addEventListener("click", noDisplay);

//Bepaal de beginpositie van de vrouw
let position = { x: 0, y: 0 };

//functie om de vrouw naar boven te bewegen
function moveUp() {
  //sound effect spelen als vrouw beweegt
  const blub = new Audio("images/happy-pop.mp3");
  blub.play();

  //position updaten
  position.y -= 25;
  woman.style.top = position.y + "px";

  console.log(position);

  //check of de vrouw in aanraking komt met het huis
  checkTouch();
}

//functie om de vrouw naar beneden te bewegen
function moveDown() {
  //sound effect spelen als vrouw beweegt
  const blub = new Audio("images/happy-pop.mp3");
  blub.play();

  //position updaten
  position.y += 25;
  woman.style.top = position.y + "px";

  console.log(position);

  //check of de vrouw in aanraking komt met het huis
  checkTouch();
}

//functie om de vrouw naar links te bewegen
function moveLeft() {
  //sound effect spelen als vrouw beweegt wordt
  const blub = new Audio("images/happy-pop.mp3");
  blub.play();

  //position updaten
  position.x -= 25;
  woman.style.left = position.x + "px";

  console.log(position);

  //check of de vrouw in aanraking komt met het huis
  checkTouch();
}

//functie om de vrouw naar rechts te bewegen
function moveRight() {
  const blub = new Audio("images/happy-pop.mp3");
  blub.play();

  //position updaten
  position.x += 25;
  woman.style.left = position.x + "px";

  console.log(position);

  //check of de vrouw in aanraking komt met het huis
  checkTouch();
}

document.addEventListener("keydown", move);

//functie die het keydown event voor de arrow keys bepaald
function move(event) {
  //check of arrow up key is geklikt
  if (event.key === "ArrowUp") {
    //zo ja, beweegt vrouw en toon nieuwe text
    moveUp();
    updateTextAndVisibility();
  }
  //check of arrow down key is geklikt
  else if (event.key === "ArrowDown") {
    moveDown();
    updateTextAndVisibility();
  }
  //check of arrow left key is geklikt
  else if (event.key === "ArrowLeft") {
    moveLeft();
    updateTextAndVisibility();
  }
  //check of arrow right key is geklikt
  else if (event.key === "ArrowRight") {
    moveRight();
    updateTextAndVisibility();
  }
}

//text die verschijnt nadat de arrow keys geklikt worden, huis wordt zichtbaar en peiltjes verdwijnen
function updateTextAndVisibility() {
  text.textContent = "Bring me to the yellow house.";
  arrows.style.visibility = "hidden";
  house.style.visibility = "visible";
}

const party = new Audio("images/success-fanfare-trumpets.mp3");

// Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6185">Pixabay</a>

//functie die checkt of de vrouw in aanraking komt met het huis
function checkTouch() {
  //checkt of de vrouw zich binnen de positie bevindt waar het huis op de pagina wordt weergegeven
  if (
    position.x >= 405 &&
    position.x <= 480 &&
    position.y >= 330 &&
    position.y <= 390
  ) {
    console.log("home");
    //zo ja, toon ending screen
    setTimeout(endingScreen, 100);
  }
}

//functie voor de ending screen
function endingScreen() {
  //update naar eind-text
  text.textContent = "Thank you. I am home. You may leave now.";
  //party sound effect omdat je klaar bent met spelen
  party.play();
  //je kan niet meer bewegen, keydown event voor arrow keys wordt removed
  document.removeEventListener("keydown", move);
  //na 6 seconden wordt de pagina reload naar de opening screen
  setTimeout(startScreen, 6000);
}

//zorgt ervoor dat de pagina opnieuw wordt geladen
function startScreen() {
  location.reload(true);
}
