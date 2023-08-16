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

// API CODE
document.getElementById("zipcode-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const zipcode = document.getElementById("zipcode-input").value;
    const apiKey = "fsq3y0lGHgGJwsHZEldogtami5ozh65BAM4qhB4bObZViIU="; 

    fetch(`https://api.foursquare.com/v3/venues/search?near=${zipcode}&radius=80500&query=solar+panel+providers&client_id=${apiKey}&v=20230815`)
      .then(response => response.json())
      .then(data => {
        const venues = data.response.venues;
        displayVenues(venues);
      })
      .catch(error => console.error(error));
  });

  function displayVenues(venues) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    venues.forEach(venue => {
      const name = venue.name;
      const address = venue.location.address || "Address not available";
      const phone = venue.contact.phone || "Phone number not available";

      const venueElement = document.createElement("div");
      venueElement.className = "venue";
      venueElement.innerHTML = `<h3>${name}</h3><p>${address}</p><p>${phone}</p>`;

      resultsContainer.appendChild(venueElement);
    });
  }

  