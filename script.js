const openPopupBtns = document.querySelectorAll(".openPopup"); // All "Buy Now" buttons
const paymentPopup = document.getElementById("paymentPopup");
const orderPopup = document.getElementById("popup");
const thankYouPopup = document.getElementById("thankYouPopup");
const closePopup = document.getElementById("closePopup");
const closePaymentPopup = document.getElementById("closePaymentPopup");
const closeThankYouPopup = document.getElementById("closeThankYouPopup");
const paymentDoneBtn = document.getElementById("paymentDoneBtn");
const payNowBtn = document.getElementById("payNowBtn"); // Pay Now button

// Open WhatsApp Popup first (order details)
openPopupBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    orderPopup.style.display = "block";  // Show the WhatsApp popup
  });
});

// Close WhatsApp Popup
closePopup.addEventListener("click", () => {
  orderPopup.style.display = "none";
});

// Open Payment Popup when "Pay Now" button is clicked
payNowBtn.addEventListener("click", () => {
  orderPopup.style.display = "none";  // Hide the WhatsApp popup
  paymentPopup.style.display = "block";  // Show the Payment popup
});

// Close Payment Popup
closePaymentPopup.addEventListener("click", () => {
  paymentPopup.style.display = "none";
});

// After Payment → Show Thank You message
paymentDoneBtn.addEventListener("click", () => {
  paymentPopup.style.display = "none";  // Hide the Payment popup
  thankYouPopup.style.display = "block";  // Show the Thank You popup
});

// Close Thank You Popup
closeThankYouPopup.addEventListener("click", () => {
  thankYouPopup.style.display = "none";  // Close the Thank You popup
});

// Close both popups when clicking outside of them
window.addEventListener("click", (e) => {
  if (e.target === paymentPopup) paymentPopup.style.display = "none";
  if (e.target === orderPopup) orderPopup.style.display = "none";
  if (e.target === thankYouPopup) thankYouPopup.style.display = "none";
});
