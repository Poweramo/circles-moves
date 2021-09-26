const circles = document.querySelectorAll(".circle");

const randomNumber = (min, max) => {
  return `${Math.round(Math.random() * (max - min) + min)}s`;
};

circles.forEach((circle) => circle.style.setProperty("--time", randomNumber(3, 10)));
