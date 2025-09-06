// Part 1: Event Handling
document.getElementById("offerBtn").addEventListener("click", () => {
  document.getElementById("offerMessage").textContent =
    "🎉 Today’s Offer: 10% off on all Safari Adventures!";
});

// Part 2: Interactive Elements
// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Section Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation
document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from refreshing
  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let guests = document.getElementById("guests").value.trim();
  let password = document.getElementById("password").value.trim();
  let feedback = document.getElementById("formFeedback");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullname === "") {
    feedback.textContent = "❌ Full name is required!";
    feedback.className = "error";
  } else if (!emailPattern.test(email)) {
    feedback.textContent = "❌ Enter a valid email address!";
    feedback.className = "error";
  } else if (guests === "" || guests <= 0) {
    feedback.textContent = "❌ Please enter a valid number of guests!";
    feedback.className = "error";
  } else if (password.length < 6) {
    feedback.textContent = "❌ Password must be at least 6 characters long!";
    feedback.className = "error";
  } else {
    feedback.textContent = "✅ Booking successful! We’ll contact you shortly.";
    feedback.className = "success";
  }
});
