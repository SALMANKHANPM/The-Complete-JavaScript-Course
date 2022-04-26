'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${
//         Object.entries(data.languages)[0][1]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.entries(data.currencies)[0][1]['name']
//       }</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

///////////////////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(data.currencies)[0][1]['name']
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call contry 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('usa');

// setTimeout(() => {
  //   console.log('1 sec passed!!');
  //   setTimeout(() => {
    //     console.log('2 sec passed!!');
//     setTimeout(() => {
//       console.log('3 sec passed!!');
//       setTimeout(() => {
//         console.log('4 sec passed!!');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
*/

// =================== PROMISES & FETCH API ===================

/*
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch('https://restcountries.com/v3.1/name/usa');
console.log(request);

// const getCoutryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     }) // parse response to JSON [to read the data]
//     .then(function ([data]) {
//       console.log(data);
//       renderCountry(data);
//     });
// };

const getCoutryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(([data]) => renderCountry(data));
};

getCoutryData('usa');
*/

// =================== CHAINING PROMISES ===================
// =================== HANDLING REJECTED PROMISES ===================
// =================== THROWING ERRORS MANUALLY ===================

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCoutryData = function (country) {
//   // Country
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);

//       // Neighbour
//       const [neighbour] = data.borders;
//       console.log(neighbour);

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       response.json();
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//     })
//     .then(([data]) => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(error => {
//       console.error(`${error} 💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);
      const [neighbour] = data.borders;
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(([data]) => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// =================== CODING CHALLENGE-01 ===================

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch, please reload the page (${response.status})`
        );
      }
      return response.json();
    })
    .then(data => {
      const country = data.country;
      const city = data.city;
      getCountryData(country);
      console.log(`You are in ${city}, ${country}`);
    })
    .catch(err => {
      renderError(`Something went wrong 💥💥 ${err.msg}. Try again!`);
      console.log(`${err} 💥💥💥`);
    });
};

whereAmI(-33.933, 18.474);
*/

// =================== EVENT LOOP IN PRACTICE ===================
/*
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/
