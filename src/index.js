
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs  = {
startEl: document.querySelector('[data-action="start"]'),
stopEl: document.querySelector('[data-action="stop"]'),
bodyEl: document.querySelector('body')
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(color) {
  const currentColorIndex = randomIntegerFromInterval(0, color.length - 1);
   refs.bodyEl.style.backgroundColor = color[currentColorIndex];
}

refs.startEl.addEventListener('click', onClickStart);
refs.stopEl.addEventListener('click', onClickStop);

function onClickStart() { 
 refs.startEl.disabled = true;
 intervalId = setInterval(() => {
  changeBackground(colors)
 }, 1000);
}

function onClickStop() {
refs.startEl.disabled = false;
clearInterval(intervalId);
}



