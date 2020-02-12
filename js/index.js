const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// let nav = document.querySelector('nav')

// let ctaH1 = document.querySelector('h1')
// ctaH1.textContent = 'DOM Is Awesome';

let nav = document.querySelectorAll("a");
nav[0].textContent = "Services";
nav[0].style.color = "grey";
nav[1].textContent = "Product";
nav[1].style.color = "grey";
nav[2].textContent = "Vision";
nav[2].style.color = "grey";
nav[3].textContent = "Features";
nav[3].style.color = "grey";
nav[4].textContent = "About";
nav[4].style.color = "grey";
nav[5].textContent = "Contact";
nav[5].style.color = "grey";
// let nav-item-1 = document.querySelector('nav-item-1')
// this.nav-item-1.textContent = 'Services';
// let nav-item-2 = document.querySelector('nav-item-2')
// nav-item-2.textContent = 'Product';
// let nav-item-3 = document.querySelector('nav-item-3')
// nav-item-3.textContent = 'Vision';
// let nav-item-4 = document.querySelector('nav-item-4')
// nav-item-4.textContent = 'Features';
// let nav-item-5 = document.querySelector('nav-item-5')
// nav-item-5.textContent = 'About';
// let nav-item-6 = document.querySelector('nav-item-6')
// nav-item-6.textContent = 'Contact';

let ctaH1 = document.querySelector("h1");
ctaH1.textContent = "DOM Is Awesome";

const textContentNodes = document.querySelectorAll(".text-content");
const sections = ["features", "about", "services", "product", "vision"];
textContentNodes.forEach((element, index) => {
  const section = sections[index];
  element.getElementsByTagName("h4")[0].innerText =
    siteContent["main-content"][`${section}-h4`];
  element.getElementsByTagName("p")[0].innerText =
    siteContent["main-content"][`${section}-content`];
});

document.querySelector(".contact h4").innerText = "Contact";
const contactLines = document.querySelectorAll(".contact p");
contactLines[0].innerHTML = siteContent["contact"]["address"].replace(
  "et So",
  "et<br />\n So"
);
contactLines[1].innerText = siteContent.contact.phone;
contactLines[2].innerText = siteContent.contact.email;
document.querySelector("footer p").innerText = siteContent.footer.copyright;

//element.style.color = "green";
//});

//--------Stretch-----------------------------------------------------------------------
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle";
document.querySelector(".cta-text").appendChild(toggleButton);
toggleButton.addEventListener("click", toggle);

function toggle(clickEvent) {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "blue";
    document.querySelectorAll("header nav a").forEach(element => {
      element.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelectorAll("header nav a").forEach(element => {
      element.style.color = "green";
    });
  }
}
