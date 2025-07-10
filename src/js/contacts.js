document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');

  const errorName = document.getElementById('errorName');
  const errorEmail = document.getElementById('errorEmail');
  const errorPhone = document.getElementById('errorPhone');
  const errorMessage = document.getElementById('errorMessage');

  let isValid = true;

//   Parsing Name
  const nameValue = name.value.trim();
  const onlyLettersRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{3,20}$/;

  if (!onlyLettersRegex.test(nameValue)) {
    errorName.textContent = 'Please enter between 3 and 20 letters, letters only';
    errorName.classList.remove('hidden');
    name.classList.add('input-error');
    name.classList.remove('input-correct');
    isValid = false;
  } else {
    errorName.classList.add('hidden');
    name.classList.remove('input-error');
    name.classList.add('input-correct');
  }

//   Parsing Email
  if (!email.value.includes('@') || email.value.trim() === '') {
    errorEmail.classList.remove('hidden');
    email.classList.add('input-error');
    email.classList.remove('input-correct');
    isValid = false;
  } else {
    errorEmail.classList.add('hidden');
    email.classList.remove('input-error');
    email.classList.add('input-correct');
  }

//   Parsing Phone
  const phoneValue = phone.value.trim();
  const phoneRegex = /^\d{7,15}$/;

  if (!phoneRegex.test(phoneValue)) {
    errorPhone.textContent = 'Phone must contain only numbers (7 to 15 digits)';
    errorPhone.classList.remove('hidden');
    phone.classList.add('input-error');
    phone.classList.remove('input-correct');
    isValid = false;
  } else {
    errorPhone.classList.add('hidden');
    phone.classList.remove('input-error');
    phone.classList.add('input-correct');
  }

//   Parsing Message
  if (message.value.trim().length < 5) {
    errorMessage.textContent = 'Message must be at least 5 characters long';
    errorMessage.classList.remove('hidden');
    message.classList.add('input-error');
    message.classList.remove('input-correct');
    isValid = false;
  } else {
    errorMessage.classList.add('hidden');
    message.classList.remove('input-error');
    message.classList.add('input-correct');
  }

  if (isValid) {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');

    document.getElementById('closeModalBtn').addEventListener('click', () => {
        modal.classList.add('hidden');
        location.reload();
    });

    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';

    [name, email, phone, message].forEach(input => {
        input.classList.remove('input-correct');
    });
  }
});
