const fold = document.getElementById("fold");

if (screen.width <= 425) {
  fold.addEventListener("click", (e) => {
    if (fold.dataset.status == "off") {
      fold.style.height = "fit-content";
      fold.dataset.status = "on";
    } else if (fold.dataset.status == "on") {
      fold.style.height = "10rem";
      fold.dataset.status = "off";
    }
  });
}
