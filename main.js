const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".links-wrapper");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

// Getting feature tab buttons and displays
const tabButtons = [
  document.querySelector(".tab-btn-1"),
  document.querySelector(".tab-btn-2"),
  document.querySelector(".tab-btn-3"),
];
const featureTabs = [
  document.querySelector(".feature-tab-1"),
  document.querySelector(".feature-tab-2"),
  document.querySelector(".feature-tab-3"),
];

// Getting faq list buttons and answer paragraphs
const faqDropdownBtn = document.querySelectorAll(".faq-btn");
const faqAnswer = document.querySelectorAll(".answer");

window.addEventListener("DOMContentLoaded", function () {
  menuBtn.addEventListener("click", () => {
    openMenuBtn.classList.toggle("hidden");
    closeMenuBtn.classList.toggle("hidden");
    navLinks.classList.toggle("hidden");
    navBar.classList.toggle("mobile-menu");
    document.querySelector("body").style = "overflow:hidden;height:100vh;";
  });

  // event listeners for the features section display toggling
  tabButtons.forEach((tabBtn, index) => {
    tabBtn.addEventListener("click", () => {
      tabButtons.forEach((btn, i) => {
        btn.classList.toggle("tab-active", i === index);
        featureTabs[i].classList.toggle("hidden-tab", i !== index);
      });
    });
  });

  // Dropdown questions
  faqDropdownBtn.forEach((faqBtn, index) => {
    faqBtn.addEventListener("click", () => {
      faqBtn.classList.toggle("active-faq-btn");

      // Toggle only the corresponding answer
      faqAnswer[index].classList.toggle("visible");
    });
  });

  //   Handling the contact form

  function isValidEmail(email) {
    // function to check the email is in a valid format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    // Get the email value
    const emailValue = emailInput.value;
    if (emailValue === "") {
      document.querySelector(".email-input").classList.add("error");
      document.querySelector("input").classList.add("error-warning");
      errorMessage.innerHTML = `Email cannot be blank`;
    }
    // Validate the email format
    else if (isValidEmail(emailValue)) {
      emailInput.value = ""; // Clear the input field
      form.innerHTML = `Thank you for subscribing with ${emailValue}!`;
      form.style =
        "color:white; font-size:1.5rem;font-style:italic;text-align:center;";
    } else {
      document.querySelector(".email-input").classList.add("error");
      document.querySelector("input").classList.add("error-warning");
      errorMessage.innerHTML = `Whoops! Make sure it's a valid email`;
    }

    // Clear the error message when the user starts typing
    emailInput.addEventListener("input", function () {
      document.querySelector(".email-input").classList.remove("error");
      document.querySelector("input").classList.remove("error-warning");
      errorMessage.innerHTML = ``;
    });
  });
});
