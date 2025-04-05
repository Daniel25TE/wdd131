const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const hotels = [
    {
      hotelName: "Albuquerque Temple",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "images/billings_temple_lds.webp"
    },
    {
      templeName: "Manti Utah Temple",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
      templeName: "Payson Utah Temple",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/bountiful_temple_lds.webp"
    },
    {
      templeName: "Yigo Guam Temple",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/billings_temple_lds.webp"
    },
    {
      templeName: "Washington D.C. Temple",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/bountiful_temple_lds.webp"
    },
    {
      templeName: "Lima Perú Temple",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
      templeName: "Mexico City Mexico Temple",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/brisbane_australia_temple_lds.webp"
    },
    {
        templeName: "Madrid Spain Temple",
        location: "Madrid, Spain",
        dedicated: "1999, March, 20",
        area: 45800,
        imageUrl:
        "images/brisbane_australia_temple_lds.webp"
    },
    {
        templeName: "Natal Brazil Temple",
        location: "Natal, Brazil",
        dedicated: "2025, May, 17",
        area: 19800,
        imageUrl:
        "images/bountiful_temple_lds.webp"
    },
    {
        templeName: "Cali Colombia Temple",
        location: "Cali, Colombia",
        dedicated: "2025, March, 1",
        area: 9500,
        imageUrl:
        "images/brisbane_australia_temple_lds.webp"
    },
  ];
  
  createHotelCard(hotels);


  
  const mantaLink = document.querySelector("#manta");
  mantaLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.dedicated < "1900"));
    
  });
  const quitoLink = document.querySelector("#quito");
  quitoLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.dedicated > "2000"));
    
  });
  const cuencaLink = document.querySelector("#cuenca");
  cuencaLink.addEventListener("click", () => {
    createHotelCard (hotels.filter(hotel => hotel.area > 90000));
    
  });
  
  function createHotelCard(filteredHotels) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredHotels.forEach(hotel => {
      
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      location.classList.add("location");
      let dedicated = document.createElement("p");
      dedicated.classList.add("dedicated");
      let area = document.createElement("p");
      area.classList.add("area");
      let img = document.createElement("img");
  
      name.textContent = hotel.hotelName;
      location.innerHTML = `<span class="label">Location:</span> ${hotel.location}`;
      dedicated.innerHTML = `<span class="label">Dedicated:</span> ${hotel.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${hotel.area}`;
      img.setAttribute("src", hotel.imageUrl);
      img.setAttribute("alt", "${hotel.hotelName} Hotel");
      img.setAttribute("loading", "lazy");
      img.setAttribute("width", "340");
      img.setAttribute("height", "440");
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(img);
  
      document.querySelector(".res-grid").appendChild(card);
    });
    
  
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
        <div class="temperature-sections">
            <div class="hero">
                <picture>
                    <source srcset="images/iguana-larger-view.webp" media="(min-width: 1000px)">
                    <source srcset="images/iguana-desktop-view-medium.webp" media="(min-width: 500px)">
                    <img src="images/iguana-mobile-view.webp" alt="Beautiful landscape of Madagascar" width="500" height="749">
                </picture>
            </div>
            <div class="city-temperature" id="city1">
                <h2>Manta</h2>
                <p class="temperature" id="temp1">Loading...</p>
            </div>
            <div class="city-temperature" id="city2">
                <h2>Quito</h2>
                <p class="temperature" id="temp2">Loading...</p>
            </div>
            <div class="city-temperature" id="city3">
                <h2>Cuenca</h2>
                <p class="temperature" id="temp3">Loading...</p>
            </div>
        </div>
    `;
   
}

showHome();

