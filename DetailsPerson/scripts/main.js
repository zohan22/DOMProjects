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

const $section = document.querySelector(".wrapper");
const $h1 = document.createElement("h1");
const $h2 = document.createElement("h2");
const $span = document.createElement("span");
const $p = document.createElement("p");
const $lista = document.createElement("ul");
const $bio = document.createElement("p");
const $containerHabilities = document.createElement("div");


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
  const textColor = randomHexaNumberGenerator();
  const bgColor = randomHexaNumberGenerator();

  $span.classList.add("title-year");
  $span.style.color = textColor;
  $p.textContent = dateString;
  $p.id = "dateNow";
  $p.style.backgroundColor = bgColor;
};

const challenges = asabenehChallenges2020.challenges.map(
  ({ name, topics, status, githubUrl }) => ({
    name,
    topics: [...topics],
    status,
    githubUrl,
  })
);

const showDetails = () => {
  challenges.forEach(({ name, topics, status, githubUrl }) => {
    const $challengeDiv = document.createElement("div");
    $challengeDiv.classList.add("challenge-item");

    const $nameDiv = document.createElement("div");
    $nameDiv.classList.add("challenge-name");

    if (githubUrl !== "") {
      const $a = document.createElement("a");
      $a.setAttribute("href", `${githubUrl}`);
      $a.setAttribute("target", "_blank");
      $a.setAttribute("rel", "noopener");
      $a.textContent = name;
      $nameDiv.appendChild($a);
    } else {
      $nameDiv.textContent = name;
    }

    const $detailsDiv = document.createElement("div");
    $detailsDiv.classList.add("challenge-details");

    const $details = document.createElement("details");
    const $summary = document.createElement("summary");
    const $ul = document.createElement("ul");

    //Topic
    $summary.textContent = name.substring(11) || "No topics available";
    $details.appendChild($summary);

    topics.forEach((topic) => {
      const $li = document.createElement("li");
      $li.textContent = topic;
      $ul.appendChild($li);
    });

    $details.appendChild($ul);
    $detailsDiv.appendChild($details);

    const $statusDiv = document.createElement("div");
    $statusDiv.classList.add("challenge-status");

    $statusDiv.textContent = status;

    if (status === "Done") {
      $challengeDiv.classList.add("green");
    }

    if (status === "Ongoing") {
      $challengeDiv.classList.add("yellow");
    }

    if (status === "Coming") {
      $challengeDiv.classList.add("red");
    }

    $challengeDiv.appendChild($nameDiv);
    $challengeDiv.appendChild($detailsDiv);
    $challengeDiv.appendChild($statusDiv);

    $lista.appendChild($challengeDiv);
  });

  $section.appendChild($lista);
};

const showFullName = () => {
  const { firstName, lastName } = asabenehChallenges2020.author;
  const fullName = `${firstName} ${lastName}`;
  const $h2 = document.createElement("h2");
  $h2.textContent = fullName;
  $h2.classList.add("title-fullname");
  $section.insertAdjacentElement("beforeend", $h2);
};

const socialMedia = () => {
  const { socialLinks } = asabenehChallenges2020.author;
  const $socialUl = document.createElement("ul");
  $socialUl.classList.add("social-media");
  socialLinks.forEach(({ url, social }) => {
    if (typeof social !== "string" || social === "") {
      return;
    }
    const $li = document.createElement("li");
    const $a = document.createElement("a");
    $a.setAttribute("href", url);
    $a.setAttribute("target", "_blank");
    $a.setAttribute("rel", "noopener");
    $a.insertAdjacentHTML("afterbegin", social);
    $li.appendChild($a);
    $socialUl.appendChild($li);
  });
  $section.insertAdjacentElement("beforeend", $socialUl);
};

const showSkills = () => {
  const { titles, qualifications, skills } = asabenehChallenges2020.author;

  const $titlesContainer = document.createElement("div");
  const $title = document.createElement("h3");
  $title.classList.add("container-skills-titles");
  $title.textContent = "Titles";
  $titlesContainer.appendChild($title);
  titles.forEach((el) => {
    const $p = document.createElement("p");
    $p.textContent = `${el[0]} ${el[1]}`;
    $titlesContainer.appendChild($p);
  });

  const $skillsContainer = document.createElement("div");
  const $skillsTitle = document.createElement("h3");
  $skillsTitle.classList.add("container-skills-titles");
  $skillsTitle.textContent = "Skills";
  $skillsContainer.appendChild($skillsTitle);
  skills.forEach((skill) => {
    const $p = document.createElement("p");
    $p.textContent = `✅ ${skill}`;
    $skillsContainer.appendChild($p);
  });

  const $qualificationsContainer = document.createElement("div");
  const $qualificationsTitle = document.createElement("h3");
  $qualificationsTitle.classList.add("container-skills-titles");
  $qualificationsTitle.textContent = "Qualifications";
  $qualificationsContainer.appendChild($qualificationsTitle);
  qualifications.forEach((qualification) => {
    const $p = document.createElement("p");
    if (qualification.includes("Computer")) {
      $p.textContent = `📖 ${qualification}`;
    } else {
      $p.textContent = `🎓 ${qualification}`;
    }
    $qualificationsContainer.appendChild($p);
  });

  $containerHabilities.classList.add("container-skills");
  $containerHabilities.appendChild($titlesContainer);
  $containerHabilities.appendChild($skillsContainer);
  $containerHabilities.appendChild($qualificationsContainer);

  $section.appendChild($containerHabilities);
};

const showKeyWords = () => {
  const { keywords } = asabenehChallenges2020;
  const $p = document.createElement("p");
  const $containerKeywords = document.createElement("div");
  $containerKeywords.classList.add("container-keywords");
  keywords.forEach(keyword => {
    const $span = document.createElement("span");
    $span.style.padding = '5px 10px'
    $span.style.backgroundColor = randomHexaNumberGenerator();
    $span.style.borderRadius = '20px';
    $span.style.fontWeight = '600';
    $span.style.fontSize = '12px';
    $span.textContent = `#${keyword}`;
    $containerKeywords.appendChild($span);
  })

  $p.classList.add("title-keyword");
  $p.textContent = "Keywords";
  $section.insertAdjacentElement("beforeend", $p);
  $section.insertAdjacentElement("beforeend", $containerKeywords);
}

$span.textContent = asabenehChallenges2020.challengeYear;
$h1.textContent = `${asabenehChallenges2020.challengeTitle} in `;
$h1.classList.add("title");
$h1.appendChild($span);
$section.appendChild($h1);
$h2.textContent = asabenehChallenges2020.challengeSubtitle;
$h2.classList.add("subtitle");
$section.insertAdjacentElement("beforeend", $h2);
$section.appendChild($p);
showDetails();
showFullName();
socialMedia();
$bio.classList.add("info");
$bio.textContent = asabenehChallenges2020.author.bio;
$section.appendChild($bio);
showSkills();
showKeyWords();

setInterval(updateClockAndColors, 1000);
