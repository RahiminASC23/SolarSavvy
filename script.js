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
      results1.textContent = "1st Light Energy";
      address1.textContent = "106-55 150th St, South Jamaica, NY 11435";
      phone1.textContent = "(866) 837-6527";
      results2.textContent = "internationalenergy";
      address2.textContent = "11414 Sutphin Blvd, Queens, NY 11434";
      phone2.textContent = "(516) 584-3312";
      results3.textContent = "S&R Solar Design";
      address3.textContent = "124-15 Metropolitan Ave 2nd floor, Queens, NY 11415";
      phone3.textContent = "(516) 884-2208";
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


