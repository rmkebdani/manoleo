const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  fetch('/send-email', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema al enviar el correo electrónico');
    }
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible.');
    contactForm.reset();
  })
  .catch(error => {
    console.error(error);
    alert('Hubo un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
  });
});
