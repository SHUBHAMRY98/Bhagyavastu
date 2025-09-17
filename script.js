window.onload = function () {
  const openPopupBtns = document.querySelectorAll(".openPopup");
  const paymentPopup = document.getElementById("paymentPopup");
  const orderPopup = document.getElementById("popup");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const closePopup = document.getElementById("closePopup");
  const closePaymentPopup = document.getElementById("closePaymentPopup");
  const closeThankYouPopup = document.getElementById("closeThankYouPopup");
  const paymentDoneBtn = document.getElementById("paymentDoneBtn");
  const payNowBtn = document.getElementById("payNowBtn");

  // Open WhatsApp Popup first (order details)
  openPopupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      orderPopup.style.display = "block";
    });
  });

  // Close WhatsApp Popup
  closePopup.addEventListener("click", () => {
    orderPopup.style.display = "none";
  });

  // Open Payment Popup
  payNowBtn.addEventListener("click", () => {
    orderPopup.style.display = "none";
    paymentPopup.style.display = "block";
  });

  // Close Payment Popup
  closePaymentPopup.addEventListener("click", () => {
    paymentPopup.style.display = "none";
  });

  // Show Thank You after Payment
  paymentDoneBtn.addEventListener("click", () => {
    paymentPopup.style.display = "none";
    thankYouPopup.style.display = "block";
  });

  // Close Thank You Popup
  closeThankYouPopup.addEventListener("click", () => {
    thankYouPopup.style.display = "none";
  });

  // Click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === paymentPopup) paymentPopup.style.display = "none";
    if (e.target === orderPopup) orderPopup.style.display = "none";
    if (e.target === thankYouPopup) thankYouPopup.style.display = "none";
  });
};
