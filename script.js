// SCROLL ANIMATION
const text = document.querySelector(".r1");
const image = document.querySelector('.i1');

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeight / 1.5;
  if (windowHeight > textPosition) {
    text.classList.remove("push_left");
    image.classList.remove("push_right");
  } else {
    text.classList.add("push_left");
    image.classList.add("push_right");
  }
}

let submit = document.getElementById('submitbtn');
let zipcodeinput = document.getElementById("zipcode-input");

submit.onclick = function(event) {
  event.preventDefault();

      results.textContent = "1st Light Energy";
      address.textContent = "106-55 150th St, South Jamaica, NY 11435";
      phone.textContent = "(866) 837-6527";
}

/*
// API CODE
async function placeSearch(zipcode) {
  try {
    ;
    const results = await fetch(
      "https://api.foursquare.com/v3/places/search?" + searchParams,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3y0lGHgGJwsHZEldogtami5ozh65BAM4qhB4bObZViIU=',
        },
      }
    );
    const data = await results.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

  const searchParams = new URLSearchParams({
    query: 'solar panel providers',
    near: zipcode,
    radius: 80500, // 50 miles in meters
    open_now: 'true',
    sort: 'DISTANCE',
  });
  
  fetch(
    "https://api.foursquare.com/v3/places/search?" + searchParams,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3y0lGHgGJwsHZEldogtami5ozh65BAM4qhB4bObZViIU=',
      },
    }
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })

document.getElementById('zipcode-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const zipcode = document.getElementById('zipcode-input').value;
  const data = await placeSearch(zipcode);

  const venues = data.response.venues;
  displayVenues(venues);
});

function displayVenues(venues) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; 

  venues.forEach((venue) => {
    const name = venue.name;
    const address = venue.location.address || 'Address not available';
    const phone = venue.contact.phone || 'Phone number not available';

    const venueElement = document.createElement('div');
    venueElement.className = 'venue'; 
    venueElement.innerHTML = `<h3>${name}</h3><p>${address}</p><p>${phone}</p>`;

    resultsContainer.appendChild(venueElement);
  });
}
*/


