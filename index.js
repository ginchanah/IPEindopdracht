console.log("workingjavascript")

const button = document.querySelector(".button")
const text = document.querySelector(".text")
const spacebar = document.querySelector(".spacebar")
const background = document.querySelector(".background")
const begintext = document.querySelector(".begintext")
const yesno = document.querySelector(".yesno")
const audio = new Audio("images/mouse-click-153941.mp3")
const bling = new Audio("images/blingsound.mp3")
const house = document.querySelector(".house")

//Sound Effect by <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=153941">Jurij</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=153941">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/irinairinafomicheva-25140203/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=13691">irinairinafomicheva</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=13691">Pixabay</a>
//Sound Effect by <a href="https://pixabay.com/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185287">floraphonic</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185287">Pixabay</a>

spacebar.style.visibility = "hidden";

background.classList.add("background1")


function displayContent () {
  text.textContent = "You thought this button actually did something, huh. We'll, you're wrong. To actually start, press:"
}

function displaySpacebar () {
  if (spacebar.style.visibility === "hidden") {
      spacebar.style.visibility = "visible";

      console.log("visible spacebar")
    }
    else {
      console.log("not working")
    }
}

function hideStartbutton (){
  button.style.visibility = "hidden";
}

console.log(spacebar)

function displayEverything () {
  displayContent();

  displaySpacebar();

  hideStartbutton();
}

button.addEventListener("click", function() {
  displayEverything();
  audio.play();
}
);

function changeBackground () {
  background.classList.add("background2")
}

let clickState = false;



console.log("the begin state is now: " + clickState)

function spacebarKeydown(event) {
  if (event.key === " ") {
    if (clickState === false) {
      clickState = true;
      changeBackground();
      begintext.style.visibility = "hidden";
      
      text.style.visibility = "visible";
      text.style.color = "black";
      text.textContent = "Ha, I fooled you. There actually is no game. I just don't like the dark. Thank you for turning on the light."
      bling.play();

      console.log("the begin state is now: " + clickState)
    } else {
      text.style.visibility = "visible";
      text.style.color = "black";
      spacebar.style.visibility = "hidden";
      text.textContent = "Did you just try to turn off the light again? Well, it doesn't work like that. But I guess I can thank you for turning on the light. I don't have much to give but...do you want to see my face?"
      yesno.style.visibility = "visible";
      bling.play();

      console.log("the begin state is now: " + clickState)
      }
   }
}

document.addEventListener("keydown", spacebarKeydown)

const yesButton = document.querySelector("#yesbutton")
const noButton = document.querySelector("#nobutton")
const arrows = document.querySelector(".arrows")
const woman = document.querySelector(".woman")

function noDisplay () {
  text.textContent = "Ungrateful brat. Well, here I am anyway, whether you like it or not. And I'll even tell you a secret. If you press these buttons on your keyboard, you can move me."
  yesno.style.visibility = "collapse";
  arrows.style.visibility = "visible";
  woman.style.visibility = "visible";
  document.removeEventListener("keydown", spacebarKeydown)
  audio.play();
}

function yesDisplay () {
  text.textContent = "There you go. Here I am. This is me. And I'll even tell you a secret. If you press these buttons on your keyboard, you can move me."
  yesno.style.visibility = "collapse";
  arrows.style.visibility = "visible";
  woman.style.visibility = "visible";
  document.removeEventListener("keydown", spacebarKeydown)
  audio.play();
}

yesButton.addEventListener("click", yesDisplay)
noButton.addEventListener("click", noDisplay)


let position = { x: 0, y:0 };

function moveUp() {
  const blub = new Audio("images/happy-pop.mp3")
  position.y -= 15;
  woman.style.top = position.y + "px";
  blub.play();

  console.log(position)
  checkTouch();
}

function moveDown() {
  const blub = new Audio("images/happy-pop.mp3")
  position.y += 15;
  woman.style.top = position.y + "px";
  blub.play();

  console.log(position)
  checkTouch();
}

function moveLeft() {
  const blub = new Audio("images/happy-pop.mp3")
  position.x -= 15;
  woman.style.left = position.x + "px";
  blub.play();

  console.log(position)
  checkTouch();
}

function moveRight() {
  const blub = new Audio("images/happy-pop.mp3")
  position.x += 15;
  woman.style.left = position.x + "px";
  blub.play();

  console.log(position)
  checkTouch();
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
      moveUp();
      updateTextAndVisibility();
  } else if (event.key === "ArrowDown") {
      moveDown();
      updateTextAndVisibility();
  }  else if (event.key === "ArrowLeft") {
      moveLeft();
      updateTextAndVisibility();
  } else if(event.key === "ArrowRight") {
      moveRight();
      updateTextAndVisibility();
  }
});

function updateTextAndVisibility() {
  text.textContent = "Bring me to the yellow house.";
  arrows.style.visibility = "hidden";
  house.style.visibility = "visible";
}


function checkTouch() {
  if (position.x >= 405 && position.x <= 480 && position.y >= 330 && position.y <= 390) {
    console.log("home")
  }
}

// let checkTouch = function(){
//   var characterTop =
//   parseInt(window.getComputedStyle(woman).getPropertyValue("top"));
//   var characterLeft =
//   parseInt(window.getComputedStyle(woman).getPropertyValue("left"));
//   if(characterLeft<430 && characterLeft>405  && characterTop>315 && characterTop<330) {
//     alert("u lose")
//   }
// }

//Object { x: 405, y: 315 }



// const box = document.getElementById('box'); // replace with the actual ID of the box
// const woman = document.getElementById('woman'); // replace with the actual ID of the woman

// document.addEventListener('keydown', (event) => {
//   const boxWidth = box.offsetWidth;
//   const boxLeft = box.offsetLeft;
//   const boxRight = boxLeft + boxWidth;
//   const womanWidth = woman.offsetWidth;
//   const womanLeft = woman.offsetLeft;

//   if (event.key === 'ArrowRight') {
//     const newLeft = womanLeft + 10;
//     if (newLeft + womanWidth > boxRight) {
//       return; // prevent movement outside of the box
//     }
//     woman.style.left = `${newLeft}px`;
//   } else if (event.key === 'ArrowLeft') {
//     const newLeft = womanLeft - 10;
//     if (newLeft < boxLeft) {
//       return; // prevent movement outside of the box
//     }
//     woman.style.left = `${newLeft}px`;
//   }
// });





