const openPopupBtns = document.querySelectorAll(".openPopup"); // All "Buy Now" buttons
const paymentPopup = document.getElementById("paymentPopup");
const orderPopup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const closePaymentPopup = document.getElementById("closePaymentPopup");
const paymentDoneBtn = document.getElementById("paymentDoneBtn");

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

// Open Payment Popup after clicking "✅ I've Done the Payment" button
paymentDoneBtn.addEventListener("click", () => {
  orderPopup.style.display = "none";  // Hide the WhatsApp popup
  paymentPopup.style.display = "block";  // Show the Payment popup
});

// Close Payment Popup
closePaymentPopup.addEventListener("click", () => {
  paymentPopup.style.display = "none";
});

// Close both popups when clicking outside of them
window.addEventListener("click", (e) => {
  if (e.target === paymentPopup) paymentPopup.style.display = "none";
  if (e.target === orderPopup) orderPopup.style.display = "none";
});
