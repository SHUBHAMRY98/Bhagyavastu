// JavaScript for popup logic
const openPopupBtns = document.querySelectorAll(".openPopup"); // sabhi buttons
const paymentPopup = document.getElementById("paymentPopup");
const orderPopup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const closePaymentPopup = document.getElementById("closePaymentPopup");
const paymentDoneBtn = document.getElementById("paymentDoneBtn");

// Open Payment Popup (sabhi buttons ke liye)
openPopupBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    paymentPopup.style.display = "block";
  });
});

// Close Payment Popup
closePaymentPopup.addEventListener("click", () => {
  paymentPopup.style.display = "none";
});

// Close WhatsApp Popup
closePopup.addEventListener("click", () => {
  orderPopup.style.display = "none";
});

// After Payment → Show WhatsApp Popup
paymentDoneBtn.addEventListener("click", () => {
  paymentPopup.style.display = "none";
  orderPopup.style.display = "block";
});

// Close popup when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === paymentPopup) paymentPopup.style.display = "none";
  if (e.target === orderPopup) orderPopup.style.display = "none";
});
