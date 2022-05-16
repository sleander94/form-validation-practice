import './style.css';

const body = document.querySelector('body');
const form = document.createElement('form');

const email = document.createElement('input');
email.required = true;
email.name = 'email';
email.type = 'email';
email.addEventListener('input', () => {
  email.setCustomValidity('');
  email.checkValidity();
});
email.addEventListener('invalid', () => {
  if (email.value === '') {
    email.setCustomValidity('Enter your email');
  } else {
    email.setCustomValidity('Email must be in the form "john@email.com"');
  }
});
form.appendChild(email);

const country = document.createElement('input');
country.required = true;
country.name = 'country';
country.pattern = '[A-Z][a-z]*(\\s[A-Z][a-z]*)*';
country.addEventListener('input', () => {
  country.setCustomValidity('');
  country.checkValidity();
});
country.addEventListener('invalid', () => {
  if (country.value === '') {
    country.setCustomValidity('Enter your country');
  } else {
    country.setCustomValidity(
      'Countries must be capitalized and contain only letters'
    );
  }
});
form.appendChild(country);

const zip = document.createElement('input');
zip.required = true;
zip.name = 'zip';
zip.minLength = '5';
zip.addEventListener('input', () => {
  zip.setCustomValidity('');
  zip.checkValidity();
});
zip.addEventListener('invalid', () => {
  if (zip.value === '') {
    zip.setCustomValidity('Enter your postal code');
  } else {
    zip.setCustomValidity('Postal code must be 5 characters minimum');
  }
});
form.appendChild(zip);

const password = document.createElement('input');
password.required = true;
password.type = 'password';
password.name = 'password';
password.minLength = 8;
password.maxLength = 16;
password.pattern =
  '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,16}$';
password.addEventListener('input', () => {
  confirmPass.setCustomValidity('');
  password.setCustomValidity('');
  if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity('Passwords must match');
    password.setCustomValidity('Passwords must match');
  }
  confirmPass.checkValidity();
  password.checkValidity();
});
password.addEventListener('invalid', () => {
  if (password.value === '') {
    password.setCustomValidity('Enter a password');
  } else if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity('Passwords must match');
    password.setCustomValidity('Passwords must match');
  } else {
    password.setCustomValidity(
      'Password must be 8-16 characters. Must contain at least one of each: lowercase letter, uppercase letter, number, special character.'
    );
  }
});
form.appendChild(password);

const confirmPass = document.createElement('input');
confirmPass.required = true;
confirmPass.type = 'password';
confirmPass.name = 'confirmpass';
confirmPass.addEventListener('input', () => {
  confirmPass.setCustomValidity('');
  password.setCustomValidity('');
  if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity('Passwords must match');
    password.setCustomValidity('Passwords must match');
  }
  confirmPass.checkValidity();
  password.checkValidity();
});
confirmPass.addEventListener('invalid', () => {
  if (confirmPass.value === '') {
    confirmPass.setCustomValidity('Confirm your password');
  } else {
    confirmPass.setCustomValidity('Passwords must match');
  }
});
form.appendChild(confirmPass);

const submit = document.createElement('button');
submit.type = 'submit';
submit.innerText = 'Submit';
submit.addEventListener('click', () => {
  if (password.checkValidity() && confirmPass.checkValidity()) {
    console.log('high five');
  } else {
    console.log('fail');
  }
  console.log(password.checkValidity());
  console.log(confirmPass.checkValidity());
});
form.appendChild(submit);

const inputs = form.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    if (input.checkValidity()) {
      input.classList.remove('error');
    } else {
      input.classList.add('error');
    }
  });
});

body.appendChild(form);
