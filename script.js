document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopup');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const continueChat = document.getElementById('continueChat');
  const cancelChat = document.getElementById('cancelChat');

  let pendingLink = "";

  // Show welcome popup after 1s
  setTimeout(() => popup.style.display = 'flex', 1000);

  closeBtn.addEventListener('click', () => popup.style.display = 'none');

  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const nights = document.getElementById('nights').value;
    const ref = Math.floor(Math.random() * 100000);
    const bossNumber = "254724821099";

    const message = 
      `Hello Boss 👋,\n\n` +
      `I’d like to book a room at Midwayzz!\n\n` +
      `Booking Ref: ${ref}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Check-in: ${checkin}\n` +
      `Nights: ${nights}\n\n` +
      `Please confirm availability.`;

    pendingLink = `https://wa.me/${bossNumber}?text=${encodeURIComponent(message)}`;
    whatsappPopup.style.display = 'flex';
  });

  continueChat.addEventListener('click', () => {
    window.open(pendingLink, '_blank');
    whatsappPopup.style.display = 'none';
    document.getElementById('bookingForm').reset();
  });

  cancelChat.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
  });
});
