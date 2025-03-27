const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
const temples = [
    {
      templeName: "Aba Nigeria Temple",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah Temple",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah Temple",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam Temple",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C. Temple",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú Temple",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico Temple",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Madrid Spain Temple",
        location: "Madrid, Spain",
        dedicated: "1999, March, 20",
        area: 45800,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/b0695278af88e03701eac449cba57686e21b080f/full/3840%2C/0/default.jpg"
    },
    {
        templeName: "Natal Brazil Temple",
        location: "Natal, Brazil",
        dedicated: "2025, May, 17",
        area: 19800,
        imageUrl:
        "https://newsroom.churchofjesuschrist.org/media/960x720/2023-10-24-Natal_Brazil_Temple_Exterior-Entry.jpg"
    },
    {
        templeName: "Cali Colombia Temple",
        location: "Cali, Colombia",
        dedicated: "2025, March, 1",
        area: 9500,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/d595efd5205e11ecac0eeeeeac1e10ba43576aeb/full/800%2C/0/default.jpg"
    },
  ];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCard (temples.filter(temple => temple. area > 0));
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  createTempleCard (temples.filter(temple => temple.dedicated < "1900"));
  
});
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  createTempleCard (temples.filter(temple => temple.dedicated > "2000"));
  
});
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  createTempleCard (temples.filter(temple => temple.area > 90000));
  
});
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  createTempleCard (temples.filter(temple => temple.area < 10000));
  
});
function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", "${temple.templeName} Temple");
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
  

}




