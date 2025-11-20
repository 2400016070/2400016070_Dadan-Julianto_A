const facts = [
  "Baby carrots are just big carrots that were cut small.",
  "Bananas are berries, but strawberries aren't.",
  "You can't hum while holding your nose.",
  "A group of flamingos is called a 'flamboyance'.",
  "Mosquitoes are the deadliest animals on Earth.",
  "The unicorn is the national animal of Scotland.",
  "Octopuses have three hearts.",
  "Butterflies taste with their feet.",
  "Some cats are allergic to humans.",
  "Sloths can take up to a month to digest food."
];

const btn = document.getElementById("btnFact");
const factText = document.getElementById("factText");

btn.addEventListener("click", () => {
  factText.textContent = "Loading...";
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
  }, 500);
});("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});