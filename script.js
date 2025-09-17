const orderPopup = document.getElementById("popup");
const paymentPopup = document.getElementById("paymentPopup");
const thankYouPopup = document.getElementById("thankYouPopup");
const orderForm = document.getElementById("orderForm");
const submitBtn = document.getElementById("submitBtn");
const paymentDoneBtn = document.getElementById("paymentDoneBtn");

// Open popup on Buy Now
document.querySelectorAll(".openPopup").forEach(btn => {
  btn.addEventListener("click", () => {
    orderPopup.style.display = "block";
  });
});

// Close Popups
document.getElementById("closePopup").addEventListener("click", () => {
  orderPopup.style.display = "none";
});
document.getElementById("closePaymentPopup").addEventListener("click", () => {
  paymentPopup.style.display = "none";
});
document.getElementById("closeThankYouPopup").addEventListener("click", () => {
  thankYouPopup.style.display = "none";
});

// On Form Submit
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  // Store in session
  sessionStorage.setItem("userData", JSON.stringify({ name, email, phone, address }));

  // Format WhatsApp Message
  const message = `Hello, I want to place an order.%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Address: ${address}`;

  // WhatsApp number
  const whatsappNumber = "919953111782";

  // Open WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Show Payment Popup
  orderPopup.style.display = "none";
  paymentPopup.style.display = "block";
});

// After Payment
paymentDoneBtn.addEventListener("click", () => {
  paymentPopup.style.display = "none";
  thankYouPopup.style.display = "block";
});

// Optional: Clicking outside popup closes it
window.addEventListener("click", (e) => {
  if (e.target === orderPopup) orderPopup.style.display = "none";
  if (e.target === paymentPopup) paymentPopup.style.display = "none";
  if (e.target === thankYouPopup) thankYouPopup.style.display = "none";
});
