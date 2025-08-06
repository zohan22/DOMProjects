const $container = document.querySelector(".wrapper");
const $input = document.querySelector("#number");
const $button = document.querySelector(".generate-button");
const $error = document.querySelector(".error");

const evenNumber = (number) => number % 2 === 0;

const oddNumber = (number) => !evenNumber(number);

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const showError = (message) => {
  $error.textContent = `Error: ${message}`;
  $error.classList.add("active");
};

const clearError = () => {
  $error.textContent = "";
  $error.classList.remove("active");
};

const clearContainer = () => {
  $container.innerHTML = "";
};

const createElements = (count) => {
  const $fragment = document.createDocumentFragment();

  for (let i = 0; i <= count; i++) {
    const $div = document.createElement("div");
    $div.textContent = i;
    $div.classList.add("numbers");
    if (evenNumber(i)) {
      $div.style.backgroundColor = "#21bf73";
    }

    if (oddNumber(i)) {
      $div.style.backgroundColor = "#fddb3a";
    }

    if (isPrime(i)) {
      $div.style.backgroundColor = "#fd5e53";
    }

    $fragment.appendChild($div);
  }

  $container.appendChild($fragment);
};

$button.addEventListener("click", () => {
  clearError();
  clearContainer();

  const value = $input.value.trim();

  if (value === "") {
    showError("Enter number value on the input field to generate numbers");
    return;
  }

  const number = Number(value);

  if (isNaN(number)) {
    showError("Input value must be a number");
    return;
  }

  if (number < 1) {
    showError("Input value must be greater than 0");
    return;
  }

  createElements(number);
  $input.value = "";
  $input.focus();
});
