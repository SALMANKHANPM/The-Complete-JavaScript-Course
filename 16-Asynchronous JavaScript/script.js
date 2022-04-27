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
  countriesContainer.style.opacity = 1;
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

// =================== BUILDING A SIMPLE PROMISE ===================
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  // executor function by passing in two arguments: resolve & reject

  console.log('Draw is happening ✨');
  setTimeout(() => {
    if (Math.random() >= 0.9) {
      resolve('You won! 💰');
    } else {
      reject(new Error('You lost!💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(2)
  .then(() => {
    console.log('2 sec timer');
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 sec`));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));
*/

// =================== PROMISIFYING GEOLOCATION  ===================

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(([data]) => {
      console.log(data);
      renderCountry(data);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

// =================== CODING CHALLENGE: 02  ===================
/*
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/
