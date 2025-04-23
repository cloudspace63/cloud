const kafeno = document.querySelector("#kafeno");
const carstvo = document.querySelector("#carstvo");

function createBubbles(element) {
  // Dodaj mehuriće ako već nisu dodati
  if (!element.querySelector(".bubble")) {
    for (let i = 0; i < 60; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.setProperty("--i", i);
      element.appendChild(bubble);
    }
  }
}

function triggerAnimation(element) {
    createBubbles(element);
    element.classList.add("active");
  
    setTimeout(() => {
      element.classList.remove("active");
  
      const bubbles = element.querySelectorAll(".bubble");
      bubbles.forEach(b => b.remove());
    }, 3000);
  }
  

kafeno.addEventListener("mouseenter", () => triggerAnimation(kafeno));
carstvo.addEventListener("mouseenter", () => triggerAnimation(carstvo));
