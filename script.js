const projects = [
  {
    title: "My CV",
    description: "A snapshot of my skills, experience, and journey as a front-end developer. Download the PDF to explore more.",
    link: "https://drive.google.com/file/d/17oA2wgbccMmFVC2Gs7fN3wXfkXEO2naO/view?usp=sharing",
    image: "./ScreenshotCV.png",
    esgMessage: "No printing, no waste. Just purpose and potential — digitally."
  },
  {
    title: "QR Code Component",
    description: "A responsive component challenge from Front-End Mentor. Built with HTML and CSS, it displays a QR code that leads to the Front-End Mentor site. This small project helped reinforce layout techniques, typography, and attention to detail.",
    link: "https://paloma-cardozo.github.io/QR-code-component/",
    image: "./Screenshot-QR.png",
    esgMessage: "Digital solutions = lower footprint. Paperless, clean and smart."
  },
  {
    title: "SmartMatch",
    description: "A playful and dynamic matching app built with HTML, CSS and JavaScript. It randomly pairs students with teachers —perfect for classroom activities or team exercises. Designed with clean UI, fun colors and responsive layout.",
    link: "https://paloma-cardozo.github.io/SmartMatch/",
    image: "./ScreenshotMatch.png",
    esgMessage: "We grow stronger when we grow together. Inclusion makes us all thrive."
  },
  {
    title: "Menu App",
    description: "A dynamic web menu that displays dishes by category: meat, vegetarian, and desserts. Users can filter items using interactive buttons. Built with HTML, CSS, and JavaScript.",
    link: "https://paloma-cardozo.github.io/Menu/",
    image: "./ScreenshotMenu.png",
    esgMessage: "Designing to reduce food waste. Every line of code counts."
  }
];

/* Projects */

const projectSection = document.getElementById("projects");
if (projectSection) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View</a>
      </div>
      <div class="overlay-esg">
        <p>${project.esgMessage}</p>
      </div>
      <img src="${project.image}" alt="${project.title}">
    `;

    projectSection.appendChild(card);
  });
}

/* Dark mode */

const toggleBtn = document.getElementById("toggle-dark");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
}

/* Contact form */

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("user_email");
const emailError = document.getElementById("email-error");
const formMessage = document.getElementById("form-message");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (emailInput && emailError) {
  emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value;
    emailError.textContent = isValidEmail(emailValue) ? "" : "Please enter a valid email address.";
  });
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput?.value || "";

    if (!navigator.onLine) {
      showMessage("You appear to be offline. Please check your internet connection.", "error");
      return;
    }

    if (!isValidEmail(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      return;
    }

    emailjs.sendForm("service_4ufaptz", "template_cgeobrl", this, "YgjWmdrwyiQFs4zdQL")
    .then(() => {
      showMessage("Thank you! Your message has been sent!", "success");
      form.reset();
    })

    .catch(error => {
      showMessage("Oops! Something went wrong. Please try again later.", "error");
      console.error("EmailJS error:", error);
    });
  });
}

function showMessage(text, type) {
  if (formMessage) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    setTimeout(() => {
      formMessage.textContent = "";
      formMessage.className = "form-message";
    }, 5000);
  }
}

/* Visit counter */

const visitElement = document.getElementById("visit-count");
if (visitElement) {
  const countKey = "visit-count";
  let count = localStorage.getItem(countKey);
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem(countKey, count);
  visitElement.textContent = count;
}

/* Intro loader */

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const enterBtn = document.getElementById("enterBtn");
  const mainContent = document.getElementById("mainContent");

  if (enterBtn && loader && mainContent) {
    enterBtn.addEventListener("click", () => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
      document.body.style.overflow = "auto";
      document.body.classList.add("fade-in-main");
      setTimeout(() => {
      document.body.classList.remove("fade-in-main");
    }, 1000);
  });
  });

  document.body.style.overflow = "hidden";
  };
});

/* Star animation */

const container = document.getElementById("stars-container");

function randomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = randomValue(1, 3);
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${randomValue(0, 100)}%`;
  star.style.left = `${randomValue(0, 100)}%`;
  star.style.animationDuration = `${randomValue(2, 5)}s`;

  container?.appendChild(star);
}

if (container) {
  for (let i = 0; i < 100; i++) {
    createStar();
  }
}