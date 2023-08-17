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

let solar = {
  "companies": [
      { 'name': 'Accord Power Inc',
        'address': '130-30 31st Ave #707, College Point, NY 11354',
        'phone' : '(718) 321-8820',
        'zip' : 11354 },
      { 'name': '1st Light Energy',
        'address': '106-55 150th St, South Jamaica, NY 11435',
        'phone' : '(866) 837-6527',
        'zip' : 11435 },
      { 'name': 'internationalenergy',
        'address': '11414 Sutphin Blvd, Queens, NY 11434',
        'phone' : '(516) 584-3312',
        'zip' : 11434 },
      { 'name': 'S&R Solar Design',
        'address': '124-15 Metropolitan Ave 2nd floor, Queens, NY 11415',
        'phone' : '(516) 884-2208',
        'zip' : 11415 },
      { 'name': 'YSG Solar' ,
        'address': '79 Madison Ave f8, New York, NY 10016',
        'phone' : '(212) 389-9215',
        'zip' : 10016 },
      { 'name': 'New York Solar Installers, Inc',
        'address': '123 E 129th St Unit 7N, New York, NY 10035',
        'phone' : '(646) 921-4447',
        'zip' : 10035 },
      { 'name': 'Brooklyn SolarWorks',
        'address': '200 6th St Suite 3G, Brooklyn, NY 11215',
        'phone' : '(347) 429-7290',
        'zip' : 11215 },
      { 'name': 'Venture Solar',
        'address': '42 West St, Brooklyn, NY 11222',
        'phone' : '(800) 203-4158',
        'zip' : 11222 },
      { 'name': 'Best Energy Power',
        'address': '20 W Fairview Ave, Valley Stream, NY 11580',
        'phone' : '(212) 730-2267',
        'zip' : 11580 },
      { 'name': 'EmPower Solar',
        'address': '4589 Austin Blvd, Island Park, NY 11558',
        'phone' : '(516) 837-3459',
        'zip' : 11558 },
      { 'name': 'Built Well Solar',
        'address': '2473 Jerusalem Ave, North Bellmore, NY 11710',
        'phone' : '(516) 695-1000',
        'zip' : 11710 },
  ]
}

function returnText() {
  let zip_input = parseInt(document.getElementById('zip_input').value);

  let zip_array = [];
  let difference_array = [];

  for (let i = 0; i < solar.companies.length; i++) {
    zip_array.push(solar.companies[i].zip);
    difference_array.push({ index: i, difference: Math.abs(zip_array[i] - zip_input) });
  }

  let outputDiv = document.querySelector('.output');
  outputDiv.innerHTML = '';

  difference_array.sort(function(a, b) { return a.difference - b.difference; });

  for (let i = 0; i < 3; i++) {
    let companyIndex = difference_array[i].index;
    let company = solar.companies[companyIndex];

    let companyBox = document.createElement('div'); 
    companyBox.classList.add('company-box'); 
    outputDiv.appendChild(companyBox);

    let closestParagraph = document.createElement('p');
    closestParagraph.innerHTML = '#' + (i + 1);
    companyBox.appendChild(closestParagraph);

    let nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = 'Name: ' + company.name;
    companyBox.appendChild(nameParagraph);

    let addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = 'Address: ' + company.address;
    companyBox.appendChild(addressParagraph);

    let phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = 'Phone: ' + company.phone;
    companyBox.appendChild(phoneParagraph);
  }
}