const textCard = document.getElementById("text-card");
const synopsis = document.getElementById("synopsis");

if (screen.width <= 425) {
  textCard.addEventListener("click", (e) => {
    if (synopsis.dataset.status == "off") {
      synopsis.style.height = "fit-content";
      synopsis.dataset.status = "on";
    } else if (synopsis.dataset.status == "on") {
      synopsis.style.height = "10rem";
      synopsis.dataset.status = "off";
    }
  });
}
