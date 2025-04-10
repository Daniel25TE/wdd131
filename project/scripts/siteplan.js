const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menu");
  const navigation = document.querySelector(".navigation");
  const navLinks = navigation.querySelectorAll("a");

  menuButton.addEventListener("click", function() {
      navigation.classList.toggle("open");
      menuButton.classList.toggle("open");
  });
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navigation.classList.remove("open"); 
        menuButton.classList.remove("open"); 
    });
});
});

const hotels = [
    {
      hotelName: "El Bello",
      location: "Manta, Ecuador",
      capacity: "4 people",
      price: "$50/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Los Sellos",
      location: "Quito , Ecuador",
      capacity: "2 people",
      price: "$45/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Los Colorados",
      location: " Cuenca, Ecuador",
      capacity: "3 people",
      price: "$30/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Aguardiente",
      location: "Manta, Ecuador",
      capacity: "1 people",
      price: "$25/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Los Chullas",
      location: "Quito, Ecuador",
      capacity: "5 people",
      price: "$70/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Calamares",
      location: "Cuenca, Ecuador",
      capacity: "4 people",
      price: "$45/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
      hotelName: "Licenciados",
      location: "Manta, Ecuador",
      capacity: "3 people",
      price: "$40/night",
      imageUrls: [
        "https://picsum.photos/500/500?random=1",
        "https://picsum.photos/500/500?random=2",
        "https://picsum.photos/500/500?random=3"
      ]
    },
    {
        hotelName: "Caracoles",
        location: "Quito, Ecuador",
        capacity: "6 people",
        price: "$75/night",
        imageUrls: [
            "https://picsum.photos/500/500?random=1",
            "https://picsum.photos/500/500?random=2",
            "https://picsum.photos/500/500?random=3"
          ]
    },
    {
        hotelName: "Rumberos",
        location: "Cuenca, Ecuador",
        capacity: "4 people",
        price: "$50/night",
        imageUrls: [
            "https://picsum.photos/500/500?random=1",
            "https://picsum.photos/500/500?random=2",
            "https://picsum.photos/500/500?random=3"
          ]
    },
    {
        hotelName: "Rocolas",
        location: "Manta, Ecuador",
        capacity: "3 people",
        price: "$25/night",
        imageUrls: [
            "https://picsum.photos/500/500?random=1",
            "https://picsum.photos/500/500?random=2",
            "https://picsum.photos/500/500?random=3"
          ]
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

      let albumContainer = document.createElement("div");
      albumContainer.classList.add("album-container");
      let prevImage = document.createElement("img");
      prevImage.classList.add("album-prev");
      let mainImage = document.createElement("img");
      mainImage.classList.add("album-main");
      let nextImage = document.createElement("img");
      nextImage.classList.add("album-next");

      let leftButton = document.createElement("button");
      leftButton.textContent = "←";
      leftButton.classList.add("album-left-btn");
  
      let rightButton = document.createElement("button");
      rightButton.textContent = "→";
      rightButton.classList.add("album-right-btn");

      let formButton = document.createElement("button");

      
      
  
      name.textContent = hotel.hotelName;
      location.innerHTML = `<span class="label">Location:</span> ${hotel.location}`;
      capacity.innerHTML = `<span class="label">Capacity:</span> ${hotel.capacity}`;
      price.innerHTML = `<span class="label">Price:</span> ${hotel.price}`;

      //img.setAttribute("alt", "${hotel.hotelName} Hotel");
      //img.setAttribute("loading", "lazy");
      //img.setAttribute("width", "500");
      //img.setAttribute("height", "500");
      formButton.textContent = "Reserve Now";
      let currentImageIndex = 0;


      function updateAlbum() {
      let len = hotel.imageUrls.length;
      let prevIndex = (currentImageIndex - 1 + len) % len;
      let nextIndex = (currentImageIndex + 1) % len;
      prevImage.setAttribute("src", hotel.imageUrls[prevIndex]);
      mainImage.setAttribute("src", hotel.imageUrls[currentImageIndex]);
      nextImage.setAttribute("src", hotel.imageUrls[nextIndex]);

      // (Optional) update alt texts
      prevImage.setAttribute("alt", `${hotel.hotelName} - previous image`);
      mainImage.setAttribute("alt", `${hotel.hotelName} - main image`);
      nextImage.setAttribute("alt", `${hotel.hotelName} - next image`);
      
    }
    updateAlbum();
      
      
      
      

    leftButton.addEventListener("click", () => {
        mainImage.classList.add("pressed-left");
        setTimeout(() => {
          currentImageIndex =
            (currentImageIndex - 1 + hotel.imageUrls.length) % hotel.imageUrls.length;
          updateAlbum();
          mainImage.classList.remove("pressed-left");
        }, 400); 
      });
      
   
    rightButton.addEventListener("click", () => {
      mainImage.classList.add("pressed-right");
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % hotel.imageUrls.length;
        updateAlbum();
        mainImage.classList.remove("pressed-right");
      }, 400);
    });

      formButton.classList.add("my-button");

      formButton.addEventListener("click", function() {
        reserveRoom(card, hotel.hotelName);
      });


      albumContainer.appendChild(prevImage);
      albumContainer.appendChild(mainImage);
      albumContainer.appendChild(nextImage);
      albumContainer.appendChild(leftButton);
      albumContainer.appendChild(rightButton);

      card.appendChild(name);
      card.appendChild(albumContainer);
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
        <h1>Contact us!</h1>
        <div class="container">
        <section class="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Email:</strong> ecuadorsdream@yourdream.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p id="fix"><strong>Address:</strong> 123 Main Street, West Jordan, UT 84084</p>
        </section>
    
        <section class="contact-form">
            <h2>Would you like us to contact you? Send us a message!</h2>
            <form action="siteplan.html" method="GET">
                
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
            
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
            
                    <label for="phoneNumber">Your Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your Phone Number" required>

                    <label for="name">Your Message:</label>
                    <textarea name="message" rows="5" placeholder="Enter your Message" required></textarea>

                <fieldset class="cortesy">
                    <label>How would you like us to contact you?</label>
                    <div>(Check all that apply)</div>
                        <label><input type="checkbox" name="email" value="yes">Email</label>
                        <hr>
                        <label><input type="checkbox" name="phone" value="yes">Phone Number</label>
                        
                    
                </fieldset>
                <button type="submit">Send Message</button>
            </form>
        </section>
    
        <section class="map">
            <h2>Our Location</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"></iframe>
        </section>
        </div>
        
    `;
   
}

function showHome() {
    const content = document.querySelector('.res-grid');
    content.innerHTML = `
        <h1>Welcome to Our Hotel Booking Site</h1>
        <div class="temperature-section">
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
            <div class="invitation1" id="inv1">
                <p class="invitation1" id="inv1.0"> Come and enjoy of the best beaches in Manta!</p>
            </div>
            
            
        </div>
        <div class="temperature-section">
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
            <div class="invitation2" id="inv1">
                <p class="invitation2" id="inv1.0"> Explore the churches of the Colonial time in Quito!</p>
            </div>
            
            
        </div>
        <div class="temperature-section">
            <div class="hero">
                <picture>
                    <source srcset="images/cuenca.webp" media="(min-width: 1000px)">
                    <source srcset="images/cuenca.webp" media="(min-width: 500px)">
                    <img src="images/cuenca-mobile.webp" alt="cuenca" width="500" height="749">
                </picture>
            </div>
            <div class="city-temperature" id="city3">
                <h2>Cuenca</h2>
                <p class="temperature" id="temp3">Loading...</p>
            </div>
            <div class="invitation3" id="inv1">
                <p class="invitation3" id="inv1.0"> Visit this beatiful indigenous group and learn their culture!</p>
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
