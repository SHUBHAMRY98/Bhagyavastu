// Popup open/close
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.onclick = () => popup.style.display = "block";
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = (e) => { if (e.target === popup) popup.style.display = "none"; };

// Payment Popup
const paymentPopup = document.getElementById("paymentPopup");
const closePaymentBtn = document.getElementById("closePaymentPopup");
const payBtn = document.getElementById("payBtn");

payBtn.onclick = () => {
  const form = document.getElementById("landingForm");
  if (form.checkValidity()) {
    popup.style.display = "none";
    paymentPopup.style.display = "block";
  } else {
    alert("Please fill all fields");
  }
};

closePaymentBtn.onclick = () => paymentPopup.style.display = "none";
window.onclick = (e) => { if (e.target === paymentPopup) paymentPopup.style.display = "none"; };

// Razorpay Integration
document.getElementById("razorPayBtn").onclick = function(e){
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;

  var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // यहाँ अपना Razorpay key डालें
    "amount": "99900", // ₹999 = 99900 paise
    "currency": "INR",
    "name": "Bhagyavastu",
    "description": "Mahalakshmi Puja Yantra",
    "handler": function (response){
        alert("Payment successful! ID: " + response.razorpay_payment_id);
        paymentPopup.style.display = "none";
    },
    "prefill": {
      "name": name,
      "email": email,
      "contact": phone
    },
    "theme": { "color": "#f5a623" }
  };

  var rzp = new Razorpay(options);
  rzp.open();
};
