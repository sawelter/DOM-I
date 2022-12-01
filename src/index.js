const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// ------ ALL VARIABLES --------- //
  // node list of all navigation links 
const nav = document.querySelectorAll("nav a");

// call to action heading and button
const ctaHeading = document.querySelector(".cta h1");
const ctaButton = document.querySelector(".cta button");

// main text boxes (features, about, services, product, vision)
const texts = document.querySelectorAll(".text-content");

// images
const middleImg = document.querySelector("#middle-img");
const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");

// contact information
const contactHeader = document.querySelector(".contact h4");
const contactInfo = document.querySelectorAll(".contact p");

// footer
const footer = document.querySelector("footer");
const footerLink = document.querySelector("footer a");





// ------ NAVIGATION --------- //
    // set text for each nav link
nav.forEach((element, index) => element.textContent = siteContent.nav[`nav-item-${index+1}`]);
    // make each nav link italic
nav.forEach(element => element.classList.add("italic"));



// ------ CALL TO ACTION --------- //

// set text for cta
ctaHeading.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;



// ------ MAIN CONTENT --------- //

// set text for the main content: features, about, services, product, vision; each of five sections has h4 and p

// Surely there's a better way.
//  define variables of each header and content
const featuresH = texts[0].querySelector("h4");
const featuresT = texts[0].querySelector("p");
const aboutH = texts[1].querySelector("h4");
const aboutT = texts[1].querySelector("p");
const servicesH = texts[2].querySelector("h4");
const servicesT = texts[2].querySelector("p");
const productH = texts[3].querySelector("h4");
const productT = texts[3].querySelector("p");
const visionH = texts[4].querySelector("h4");
const visionT = texts[4].querySelector("p");

// set the textContent for each of these
featuresH.textContent = siteContent["main-content"]["features-h4"];
featuresT.textContent = siteContent["main-content"]["features-content"];

aboutH.textContent = siteContent["main-content"]["about-h4"];
aboutT.textContent = siteContent["main-content"]["about-content"];

servicesH.textContent = siteContent["main-content"]["services-h4"];
servicesT.textContent = siteContent["main-content"]["services-content"];

productH.textContent = siteContent["main-content"]["product-h4"];
productT.textContent = siteContent["main-content"]["product-content"];

visionH.textContent = siteContent["main-content"]["vision-h4"];
visionT.textContent = siteContent["main-content"]["vision-content"];


// ------ IMAGES --------- //

// set the images
middleImg.setAttribute("src", siteContent["images"]["accent-img"]);
logoImg.setAttribute("src", siteContent["images"]["logo-img"]);
ctaImg.setAttribute("src", siteContent["images"]["cta-img"]);
// document.querySelector("#middle-img").setAttribute("src", "../mocks/img/accent.png");
// logoImg.setAttribute("src", "../mocks/img/logo.png");
// ctaImg.setAttribute("src", "../mocks/img/cta.png");


// ------ FOOTER--------- //

// copyright

footerLink.classList.add("bold");
footerLink.textContent = siteContent["footer"]["copyright"];


// ------ CONTACT INFO --------- //

// contact info: h4, address, phone, email
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];




// Alternative Excess Code

// ------ NAVIGATION --------- //
// nav[0].textContent = siteContent.nav["nav-item-1"];
// nav[1].textContent = siteContent.nav["nav-item-2"];
// nav[2].textContent = siteContent.nav["nav-item-3"];
// nav[3].textContent = siteContent.nav["nav-item-4"];
// nav[4].textContent = siteContent.nav["nav-item-5"];
// nav[5].textContent = siteContent.nav["nav-item-6"];

// This seems to work too? 
// for(let i = 0; i < nav.length; i++) {
//   nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
// }