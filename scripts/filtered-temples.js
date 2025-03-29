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
      templeName: "Albuquerque Temple",
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




