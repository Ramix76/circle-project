
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

  if (!validateName(name, errorName)) isValid = false;
  if (!validateEmail(email, errorEmail)) isValid = false;
  if (!validatePhone(phone, errorPhone)) isValid = false;
  if (!validateMessage(message, errorMessage)) isValid = false;

  if (isValid) {
    showModalAndResetForm(name, email, phone, message);
  }
});

function validateName(input, errorElement) {
  const value = input.value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{3,20}$/;

  if (!regex.test(value)) {
    setError(input, errorElement, 'Please enter between 3 and 20 letters, letters only');
    return false;
  }
  setSuccess(input, errorElement);
  return true;
}

function validateEmail(input, errorElement) {
  const value = input.value.trim();

  if (!value.includes('@') || value === '') {
    setError(input, errorElement, 'Please enter a valid email address');
    return false;
  }
  setSuccess(input, errorElement);
  return true;
}

function validatePhone(input, errorElement) {
  const value = input.value.trim();
  const regex = /^\d{7,15}$/;

  if (!regex.test(value)) {
    setError(input, errorElement, 'Phone must contain only numbers (7 to 15 digits)');
    return false;
  }
  setSuccess(input, errorElement);
  return true;
}

function validateMessage(input, errorElement) {
  const value = input.value.trim();

  if (value.length < 5) {
    setError(input, errorElement, 'Message must be at least 5 characters long');
    return false;
  }
  setSuccess(input, errorElement);
  return true;
}

function setError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
  input.classList.add('input-error');
  input.classList.remove('input-correct');
}

function setSuccess(input, errorElement) {
  errorElement.classList.add('hidden');
  input.classList.remove('input-error');
  input.classList.add('input-correct');
}

function showModalAndResetForm(...inputs) {
  const modal = document.getElementById('successModal');
  modal.classList.remove('hidden');

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.classList.add('hidden');
    location.reload();
  });

  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('input-correct');
  });
}