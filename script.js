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
      { 'name': '212 SOLAR',
        'address': '82 Jane St #4, New York, NY 10014',
        'phone' : '(877) 212-5123',
        'zip' : 10014 },
      { 'name': 'Solar Bridge LLC',
        'address': '340 E 64th St, New York, NY 10065',
        'phone' : '(646) 414-2448',
        'zip' : 10065 },
      { 'name': 'IPPsolar',
        'address': '299 Broadway # 1501, New York, NY 10007',
        'phone' : '(212) 791-2100',
        'zip' : 10007 },
    { 'name': 'SolarKal',
        'address': '222 Broadway, New York, NY 10038',
        'phone' : '(855) 516-5777',
        'zip' : 10038 },
    { 'name': 'My Solar',
        'address': '116 Fulton St, New York, NY 10038',
        'phone' : '(585) 283-0144',
        'zip' : 10038 },
    { 'name': 'solargreentown',
        'address': '1420 Washington Ave, Bronx, NY 10456',
        'phone' : '(718) 588-3797',
        'zip' : 10456 },
    { 'name': 'x',
        'address': '728 E 136th St #305, Bronx, NY 10454',
        'phone' : '(347) 590-5450',
        'zip' : 10454 },
    { 'name': 'NYsolardoctors llc',
        'address': '896 Faile St, Bronx, NY 10474',
        'phone' : 'N/A',
        'zip' : 10474 },
    { 'name': 'Radiant Solar',
        'address': '3333 Henry Hudson Pkwy W Apt 1a, Bronx, NY 10463',
        'phone' : '(631) 973-3018',
        'zip' : 10463 },
    { 'name': 'Kamtech Solar',
        'address': '203 B Sheridan Blvd, Inwood, NY 11096',
        'phone' : '(718) 736-2862',
        'zip' : 11096 },
    { 'name': 'Sunrun Solar',
        'address': '11220 Rockaway Blvd, Queens, NY 11420',
        'phone' : '(833) 394-3387',
        'zip' : 11420 },
    { 'name': 'Vivid Solar Inc',
        'address': '13039 129th Street South Ozone Park Queens, NY 11420',
        'phone' : '(718) 696-7794',
        'zip' : 11420 },
    { 'name': 'Promsun',
        'address': '67-43 Myrtle Ave #302, Glendale, NY 11385',
        'phone' : '(888) 407-6929',
        'zip' : 11385 },
    { 'name': 'Solarmentor.com',
        'address': '137-01 70th Rd Unit 1, Queens, NY 11367',
        'phone' : '(718) 374-2629',
        'zip' : 11367 },
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

    let closestParagraph = document.createElement('p');
    closestParagraph.innerHTML = '#' + (i + 1);
    outputDiv.appendChild(closestParagraph);

    let nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = 'Name: ' + company.name;
    outputDiv.appendChild(nameParagraph);

    let addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = 'Address: ' + company.address;
    outputDiv.appendChild(addressParagraph);

    let phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = 'Phone: ' + company.phone;
    outputDiv.appendChild(phoneParagraph);
  }
}
