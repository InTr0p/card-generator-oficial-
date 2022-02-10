window.onload = () => {
  let generateCard = () => {
    let card = ["diamond", "heart", "club", "spades"];
    let i = Math.floor(Math.random() * card.length);
    return card[i];
  };
  let generateNumberCard = () => {
    let CardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q"];
    let iCardNumbers = Math.floor(Math.random() * CardNumbers.length);
    return CardNumbers[iCardNumbers];
  };
  document.querySelector(".card").className = `card ${generateCard()}`;
  document.querySelector(".card").innerHTML = generateNumberCard();
  setInterval(() => {
    document.querySelector(".card").className = `card ${generateCard()}`;
    document.querySelector(".card").innerHTML = generateNumberCard();
  }, 100000);
};
let Button = document.querySelector(".button");
Button.addEventListener("click", () => {
  window.onload();
});
