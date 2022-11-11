const requestURL = 'json/business.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business'];
        business.forEach(displayBusiness);
})

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `${business.name} logo`);
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
    website.setAttribute('href', business.website);
    
    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}