const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const hotels = [
    {
      hotelName: "El Bello",
      location: "Manta, Ecuador",
      capacity: "4 people",
      price: "$50/night",
      imageUrl:
      "https://picsum.photos/500/500"
    },
    {
      hotelName: "Los Sellos",
      location: "Quito , Ecuador",
      capacity: "2 people",
      price: "$45/night",
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
      hotelName: "Los Colorados",
      location: " Cuenca, Ecuador",
      capacity: "3 people",
      price: "$30/night",
      imageUrl:
      "images/bountiful_temple_lds.webp"
    },
    {
      hotelName: "Aguardiente",
      location: "Manta, Ecuador",
      capacity: "1 people",
      price: "$25/night",
      imageUrl:
      "images/billings_temple_lds.webp"
    },
    {
      hotelName: "Los Chullas",
      location: "Quito, Ecuador",
      capacity: "5 people",
      price: "$70/night",
      imageUrl:
      "images/bountiful_temple_lds.webp"
    },
    {
      hotelName: "Calamares",
      location: "Cuenca, Ecuador",
      capacity: "4 people",
      price: "$45/night",
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
      hotelName: "Licenciados",
      location: "Manta, Ecuador",
      capacity: "3 people",
      price: "$40/night",
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
        hotelName: "Caracoles",
        location: "Quito, Ecuador",
        capacity: "6 people",
        price: "$75/night",
        imageUrl:
        "images/brisbane_australia_temple_lds.webp"
    },
    {
        hotelName: "Rumberos",
        location: "Cuenca, Ecuador",
        capacity: "4 people",
        price: "$50/night",
        imageUrl:
        "images/bountiful_temple_lds.webp"
    },
    {
        hotelName: "Rocolas",
        location: "Manta, Ecuador",
        capacity: "3 people",
        price: "$25/night",
        imageUrl:
        "images/brisbane_australia_temple_lds.webp"
    },
  ];
  
  createHotelCard(hotels);


  
  const mantaLink = document.querySelector("#manta");
  mantaLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.location == "Manta, Ecuador"));
    
  });
  const quitoLink = document.querySelector("#quito");
  quitoLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.location == "Quito, Ecuador"));
    
  });
  const cuencaLink = document.querySelector("#cuenca");
  cuencaLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.location == "Cuenca, Ecuador"));
    
  });

  let currentForm = null;
  
  function createHotelCard(filteredHotels) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredHotels.forEach(hotel => {
      
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      location.classList.add("location");
      let capacity = document.createElement("p");
      capacity.classList.add("capacity");
      let price = document.createElement("p");
      price.classList.add("price");
      let img = document.createElement("img");
      let formButton = document.createElement("button") 
      

  
      name.textContent = hotel.hotelName;
      location.innerHTML = `<span class="label">Location:</span> ${hotel.location}`;
      capacity.innerHTML = `<span class="label">Capacity:</span> ${hotel.capacity}`;
      price.innerHTML = `<span class="label">Price:</span> ${hotel.price}`;
      img.setAttribute("src", hotel.imageUrl);
      
      img.setAttribute("alt", "${hotel.hotelName} Hotel");
      img.setAttribute("loading", "lazy");
      img.setAttribute("width", "500");
      img.setAttribute("height", "500");
      formButton.textContent = "Reserve Now";

      formButton.classList.add("my-button");

      formButton.addEventListener("click", function() {
        reserveRoom(card, hotel.hotelName);
      });
      card.appendChild(name);
      card.appendChild(img);
      
      card.appendChild(location);
      card.appendChild(capacity);
      card.appendChild(price);
      
      card.appendChild(formButton)
  
      document.querySelector(".res-grid").appendChild(card);
    });
    
  
  }
  function reserveRoom(card, hotelName) {

    if (currentForm) {
      currentForm.remove();
      currentForm = null;
    }

    const existingForm = card.nextElementSibling; 

    if (existingForm && existingForm.classList.contains('reservation-form')) {
        alert("The reservation form is already open for this hotel.");
        return; 
    }
    fetch('siteplanform.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const div = document.createElement('div');
            div.innerHTML = html;

            
            div.querySelector('#hotel-name').textContent = hotelName;

            
            card.insertAdjacentElement('afterend', div);
            currentForm = div;

            div.scrollIntoView({ behavior: 'smooth' });

            
            const form = div.querySelector('form');
            form.onsubmit = function(event) {
                event.preventDefault();
                const name = form.querySelector('#name').value;
                const email = form.querySelector('#email').value;
                window.location.href = 'siteplan.html'; //review form
                div.remove();
                currentForm = null; 
            };

            const checkInInput = div.querySelector('#checkIn');
            const checkOutInput = div.querySelector('#checkOut');
            const breakfastCheckbox = div.querySelector('#brea1');
            const lunchCheckbox = div.querySelector('#lun2');
            const dinnerCheckbox = div.querySelector('#din3');
            const parkingCheckbox = div.querySelector('#par4');

           
            checkInInput.addEventListener('change', calculateTotal);
            checkOutInput.addEventListener('change', calculateTotal);

            
            breakfastCheckbox.addEventListener('change', calculateTotal);
            lunchCheckbox.addEventListener('change', calculateTotal);
            dinnerCheckbox.addEventListener('change', calculateTotal);
            parkingCheckbox.addEventListener('change', calculateTotal);

            const closeButton = div.querySelector('#close-button');
            closeButton.onclick = function() {
                div.remove(); 
                currentForm = null; 
            };
        })
        .catch(error => console.error('Error loading the form:', error));
}

function showContact() {
    const content = document.querySelector('.res-grid');
    content.innerHTML = `
        <h1>This is our contact information!</h1>
        
    `;
   
}

function showHome() {
    const content = document.querySelector('.res-grid');
    content.innerHTML = `
        <h1>Welcome to Our Hotel Booking Site</h1>
        <div class="temperature-section1">
            <div class="hero">
                <picture>
                    <source srcset="images/manta.webp" media="(min-width: 1000px)">
                    <source srcset="images/manta.webp" media="(min-width: 500px)">
                    <img src="images/iguana-mobile-view.webp" alt="Beautiful landscape of Madagascar" width="500" height="749">
                </picture>
            </div>
            <div class="city-temperature" id="city1">
                <h2>Manta</h2>
                <p class="temperature" id="temp1">Loading...</p>
            </div>
            <div class="invitation" id="inv1">
                <p class="invitation" id="inv1.0"> Vamos!</p>
            </div>
            
            
        </div>
        <div class="temperature-section2">
            <div class="hero">
                <picture>
                    <source srcset="images/quito.webp" media="(min-width: 1000px)">
                    <source srcset="images/quito.webp" media="(min-width: 500px)">
                    <img src="images/iguana-mobile-view.webp" alt="Beautiful landscape of Madagascar" width="500" height="749">
                </picture>
            </div>
            <div class="city-temperature" id="city2">
                <h2>Quito</h2>
                <p class="temperature" id="temp2">Loading...</p>
            </div>
            <div class="invitation" id="inv1">
                <p class="invitation" id="inv1.0"> Vamos!</p>
            </div>
            
            
        </div>
        <div class="temperature-section3">
            <div class="hero">
                <picture>
                    <source srcset="images/cuenca.webp" media="(min-width: 1000px)">
                    <source srcset="images/cuenca.webp" media="(min-width: 500px)">
                    <img src="images/cuenca-mobile.webp" alt="Beautiful landscape of Madagascar" width="500" height="749">
                </picture>
            </div>
            <div class="city-temperature" id="city3">
                <h2>Cuenca</h2>
                <p class="temperature" id="temp3">Loading...</p>
            </div>
            <div class="invitation" id="inv1">
                <p class="invitation" id="inv1.0"> Vamos!</p>
            </div>
        </div>
    `;
   
}
const apiKey = ''; // Your API key fcbdc36c5a5d4ffb08b5e9bec15b7d19
const cities = ['Manta', 'Quito', 'Cuenca'];

async function getTemperature(city) {
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error in API response');
        }
        const data = await response.json();
        const temperature = data.current.temperature;
        const weatherIcon = data.current.weather_icons[0]; // Get the first weather icon

        // Update the temperature text
        const tempElement = document.getElementById(`temp${cities.indexOf(city) + 1}`);
        tempElement.innerText = `Temperature: ${temperature} °C`;

        // Create an img element for the weather icon
        const iconElement = document.createElement('img');
        iconElement.src = weatherIcon; // Set the icon URL
        iconElement.alt = 'Weather Icon'; // Alt text for accessibility
        iconElement.style.width = '30px'; // Set the width of the icon
        iconElement.style.height = '30px'; // Set the height of the icon
        iconElement.style.marginLeft = '5px'; // Add some space between text and icon

        // Append the icon to the temperature element
        tempElement.appendChild(iconElement);
    } catch (error) {
        console.error(`Error fetching temperature for ${city}:`, error);
        document.getElementById(`temp${cities.indexOf(city) + 1}`).innerText = 'Error loading temperature';
    }
}

// Fetch temperatures for all cities
cities.forEach(city => getTemperature(city));

showHome();

function calculateTotal() {
  const breakfastCost = 2.50;
  const lunchCost = 2.50;
  const dinnerCost = 2.50;
  const parkingCost = 2.00;

  let total = 0;
  const checkInDate = new Date(document.getElementById('checkIn').value);
  const checkOutDate = new Date(document.getElementById('checkOut').value);
  
  
  if (checkOutDate <= checkInDate) {
      document.getElementById('totalAmount').innerText = "Total Amount: $0.00";
      return; 
  }

  const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

  
  const hotelPriceElement = document.querySelector('.price'); 
  const hotelCapacityElement = document.querySelector('.capacity'); 
  const hotelPriceText = hotelPriceElement ? hotelPriceElement.textContent : "$0/night";
  const hotelCapacityText = hotelCapacityElement ? hotelCapacityElement.textContent : "1 person"; 

  const hotelPrice = parseFloat(hotelPriceText.replace(/[^0-9.-]+/g, "")); 
  const hotelCapacity = parseInt(hotelCapacityText.match(/\d+/)[0]); 

  if (days > 0) {
     
      total += hotelPrice * days;

     
      if (document.getElementById('brea1').checked) {
          total += breakfastCost * days * hotelCapacity;
      }
      if (document.getElementById('lun2').checked) {
          total += lunchCost * days * hotelCapacity;
      }
      if (document.getElementById('din3').checked) {
          total += dinnerCost * days * hotelCapacity;
      }
      if (document.getElementById('par4').checked) {
          total += parkingCost * days; 
      }
  }

  document.getElementById('totalAmount').innerText = `Total Amount: $${total.toFixed(2)}`;
}
