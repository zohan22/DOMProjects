const $currentYear = document.querySelector(".title-year");
const $date = document.getElementById("dateNow");
const $listGoals = document.querySelectorAll('.info')

const randomHexaNumberGenerator = () => {
  let character = "ABCDEF0123456789";
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    let randomCharacter = Math.floor(Math.random() * character.length);
    hexa += character.charAt(randomCharacter);
  }

  return hexa;
};

const dateNow = () => {
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  let year = now.getFullYear();
  let month = monthsOfYear[now.getMonth()];
  let date = now.getDate();
  return `${month} ${date}, ${year}`;
};

const timeNow = () => {
  const now = new Date();
  let hour = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hour}:${minutes}:${seconds}`;
};


const updateClockAndColors = () => {
  const dateString = `${dateNow()} ${timeNow()}`;
  const bgColor = randomHexaNumberGenerator();
  const textColor = randomHexaNumberGenerator();

  $date.textContent = dateString;
  $date.style.backgroundColor = bgColor;
  $currentYear.style.color = textColor;
};

$currentYear.textContent = 2025;

$listGoals.forEach(el => {
  if(el.textContent.includes('Completed')) {
    el.classList.add('green')
  } else if(el.textContent.includes('In progress')) {
    el.classList.add('yellow')
  } else {
    el.classList.add('red')
  }
})


setInterval(updateClockAndColors, 1000);
