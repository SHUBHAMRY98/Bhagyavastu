window.onload = function () {
  const openPopupBtns = document.querySelectorAll(".openPopup");
  const orderPopup = document.getElementById("popup");
  const paymentPopup = document.getElementById("paymentPopup");
  const thankYouPopup = document.getElementById("thankYouPopup");

  const closePopup = document.getElementById("closePopup");
  const closePaymentPopup = document.getElementById("closePaymentPopup");
  const closeThankYouPopup = document.getElementById("closeThankYouPopup");

  const paymentDoneBtn = document.getElementById("paymentDoneBtn");
  const orderForm = document.getElementById("orderForm");

  // 1. Show Order Form
  openPopupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      orderPopup.style.display = "block";
    });
  });

  // 2. Close Order Form
  closePopup.addEventListener("click", () => {
    orderPopup.style.display = "none";
  });

  // 3. Submit Form → Send to WhatsApp + Show Payment Popup
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    // WhatsApp message
    const message = `Hello, I want to place an order.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Address:* ${address}`;
    const whatsappURL = `https://wa.me/919953111782?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Close order popup and show payment popup
    orderPopup.style.display = "none";
    paymentPopup.style.display = "block";
  });

  // 4. Close Payment Popup
  closePaymentPopup.addEventListener("click", () => {
    paymentPopup.style.display = "none";
  });

  // 5. Payment Done → Show Thank You
  paymentDoneBtn.addEventListener("click", () => {
    paymentPopup.style.display = "none";
    thankYouPopup.style.display = "block";
  });

  // 6. Close Thank You
  closeThankYouPopup.addEventListener("click", () => {
    thankYouPopup.style.display = "none";
  });

  // Close popups if clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === orderPopup) orderPopup.style.display = "none";
    if (e.target === paymentPopup) paymentPopup.style.display = "none";
    if (e.target === thankYouPopup) thankYouPopup.style.display = "none";
  });
};
