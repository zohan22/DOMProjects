const $container = document.querySelector(".wrapper");
console.log($container);

const evenNumber = (number) => {
  return number % 2 === 0 ? true : false;
}

const oddNumber = (number) => {
  return !(evenNumber(number))
}

const isPrime = (number) => {
  if(number <= 1) return false

  for(let i=2; i<=Math.sqrt(number); i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return true;
}


const createElements = () => {
  const $fragment = document.createDocumentFragment();

  for (let i = 0; i <= 101; i++) {
    const $div = document.createElement("div");
    $div.textContent = i;
    $div.classList.add("numbers");
    if(evenNumber(i)) {
      $div.style.backgroundColor = '#21bf73'
    }
    
    if(oddNumber(i)) {
      $div.style.backgroundColor = '#fddb3a'
    }
    
    if(isPrime(i)) {
      $div.style.backgroundColor = '#fd5e53'
    }
    $fragment.appendChild($div);
  }

  $container.appendChild($fragment);
};

createElements()