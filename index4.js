/* 
  JavaScript is minimal here on purpose.
  The website mostly uses CSS for animations.
  This file exists so you can easily add features later.
*/

// Confirm JS is connected (for learning/debugging)
console.log("HerWellness script loaded successfully");



console.log("HerWellness script loaded successfully");

const user = JSON.parse(localStorage.getItem("herwellnessUser"));

// Only run welcome logic if element exists
const welcomeElement = document.getElementById("welcomeUser");

if (welcomeElement) {
  if (user && user.isLoggedIn) {
    welcomeElement.innerText = "Welcome back, " + user.first + " 🌸";
  } else {
    window.location.href = "register.html";
  }
}






const track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".card");

function autoSlide() {
  track.classList.add("fade-out");

  setTimeout(() => {
    track.appendChild(cards[0]); // move first card to end
    cards = document.querySelectorAll(".card");
    track.classList.remove("fade-out");
  }, 800);
}

setInterval(autoSlide, 3000);


const moodButtons = document.querySelectorAll(".mood-btn");
const moodMessage = document.getElementById("moodMessage");
const journalText = document.getElementById("journalText");

const moodData = {
  calm: {
    message: "You seem calm right now. What’s helping you feel this way?",
    prompt: "What is bringing me calm today?"
  },
  tired: {
    message: "Your body might be asking for rest. That’s okay.",
    prompt: "Where do I feel most tired today? What kind of rest do I need?"
  },
  anxious: {
    message: "You’re safe here. Take a slow breath.",
    prompt: "What’s making me feel anxious right now? What feels in my control?"
  },
  low: {
    message: "I’m glad you showed up even while feeling low.",
    prompt: "What feels heavy today? What would support me right now?"
  },
  okay: {
    message: "Being okay is enough. You don’t need to feel amazing.",
    prompt: "How does my body feel today? What do I need more of?"
  }
};

moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    moodButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const mood = btn.dataset.mood;
    moodMessage.textContent = moodData[mood].message;

    if (journalText) {
      journalText.value = moodData[mood].prompt;
      journalText.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Logout Function
function logout() {
  const user = JSON.parse(localStorage.getItem("herwellnessUser"));

  if (user) {
    user.isLoggedIn = false;
    localStorage.setItem("herwellnessUser", JSON.stringify(user));
  }

  window.location.href = "register.html";
}


