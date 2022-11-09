const requestURL = 'latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
})

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let pBirth = document.createElement('p');
    let pDeath = document.createElement('p');
    let pChildren = document.createElement('p');
    let portrait = document.createElement('img');

    let prophetOrder = '';

    if (prophet.order == "1") {
        prophetOrder = `${prophet.order}st`;
    } else if (prophet.order == "2") {
        prophetOrder = `${prophet.order}nd`;
    } else {
        prophetOrder = `${prophet.order}th`;
    }

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `${prophetOrder} Latter-day President`;
    pBirth.textContent = `Birth: ${prophet.birthdate}, ${prophet.birthplace} `;
    pDeath.textContent = `Death: ${prophet.death}`;
    pChildren.textContent = `Children: ${prophet.numofchildren}`;
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(pBirth);
    card.appendChild(pDeath);
    card.appendChild(pChildren);
    card.appendChild(portrait);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}