document.addEventListener('DOMContentLoaded', function () {

  const email = {
    name: '',
    email: '',
    phone: ''
  }

  // Get elements
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputPhone = document.querySelector('#phone');
  const form = document.querySelector('#form');
  const btnSubmit = document.querySelector('#form input[type="submit"]')

  // Asign events
  inputName.addEventListener('blur', validateForm);
  inputEmail.addEventListener('blur', validateForm);
  inputPhone.addEventListener('blur', validateForm);
  form.addEventListener('submit', sendEmail);

  // Functions
  function validateForm(e) {
    // filter#1: check empty fields
    if (e.target.value.trim() === '') {
      email[e.target.name] = '';
      checkEmail();
      return;
    }

    // asign values
    email[e.target.name] = e.target.value.trim();
    checkEmail();
  }

  function checkEmail() {
    if (Object.values(email).includes('')) {
      btnSubmit.classList.add('btn-disabled');
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove('btn-disabled');
    btnSubmit.disabled = false;
  }

  function sendEmail(e) {
    e.preventDefault();
    resetForm();
  }

  function resetForm() {
    email.name = '';
    email.email = '';
    email.phone = '';

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';

    checkEmail();
  }
})