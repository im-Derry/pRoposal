const sky = document.getElementById("sky");

const glyphs = ["♡", "✧", "✿", "♥", "·"];

// Create floating hearts and symbols
for (let i = 0; i < 30; i++) {
  const s = document.createElement("span");

  s.className = "float";
  s.textContent = glyphs[i % glyphs.length];
  s.style.left = Math.random() * 100 + "%";
  s.style.fontSize = 13 + Math.random() * 20 + "px";
  s.style.animationDuration = 10 + Math.random() * 14 + "s";
  s.style.animationDelay = Math.random() * 18 + "s";

  sky.appendChild(s);
}

// Create sparkling stars
for (let i = 0; i < 14; i++) {
  const s = document.createElement("span");

  s.className = "sparkle";
  s.textContent = "✦";
  s.style.left = 5 + Math.random() * 90 + "%";
  s.style.top = 5 + Math.random() * 90 + "%";
  s.style.fontSize = 8 + Math.random() * 10 + "px";
  s.style.animationDelay = Math.random() * 3 + "s";

  sky.appendChild(s);
}

const response = document.getElementById("response");

// When the user clicks the first button
document.getElementById("talk").addEventListener("click", () => {
  response.innerHTML =
    "<strong>Yay, bestie! 💗</strong>" +
    "That makes me happy. Send me a little “hey” whenever " +
    "you’re ready — I’m glad we can talk.";

  response.classList.add("show");
});

// When the user clicks the second button
document.getElementById("later").addEventListener("click", () => {
  response.innerHTML =
    "<strong>That’s completely okay. 🌷</strong>" +
    "Take your time. There’s no pressure at all — " +
    "I just hope you’re doing well.";

  response.classList.add("show");
});