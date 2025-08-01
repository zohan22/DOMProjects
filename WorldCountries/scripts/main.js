const $totalCountries = document.getElementById('total-countries')
const $container = document.querySelector('.countries-wrapper')

const numberOfCountries = (array) => {
  return array.length;
}

const countryUpperCase = (country) => {
  return country.toUpperCase();
}

const namesOfCountries = () => {
  const $fragment = document.createDocumentFragment();
  countries.forEach(country => {
    const $div = document.createElement('div');
    $div.textContent = countryUpperCase(country)
    $div.classList.add('countries');
    $fragment.appendChild($div)
  })

  $container.appendChild($fragment);
}

let text = `Total Number of Countries: ${numberOfCountries(countries)}`

$totalCountries.textContent = text;
namesOfCountries();
