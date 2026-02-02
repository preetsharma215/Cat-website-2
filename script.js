const messages = [
  "Hey… thoda sa time lena 💗",
  "Rose Day 🌹 — tumhari presence hi kaafi hai",
  "Chocolate Day 🍫 — tum meri baaton ki sweetness ho",
  "Teddy Day 🧸 — tumhari yaad comfort ban jaati hai",
  "Promise Day 🤞 — koi bade vaade nahi, bas real rahunga",
  "Aur aaj… Valentine’s Day ❤️",
  "Will you be my Valentine? 💖"
];

let index = 0;

const msg = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.getElementById("buttons");
const teddy = document.getElementById("teddy");

msg.innerText = messages[0];

function nextMessage() {
  index++;

  if (index < messages.length) {
    msg.innerText = messages[index];
  }

  if (index === messages.length - 1) {
    nextBtn.style.display = "none";
    buttons.style.display = "flex";
  }
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  buttons.style.display = "none";
  teddy.style.display = "block";
  teddy.innerHTML = `<img src="https://media.tenor.com/1zv7J1pXxE0AAAAi/teddy-love.gif">`;
  msg.innerText =
    "Yayyy 🥺❤️\nThank you for choosing me.\nHappy Valentine’s Day 💖";
}
