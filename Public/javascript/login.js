const loginFormHandler = async event => {
  event.preventDefault();

  const email = $('#login-email').val().trim();
  const password = $('#login-password').val().trim();
  console.log('login', email, password);

  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/workspace');
    } else {
      console.log(response);
    }
  }
};

$('#login-form').on('submit', loginFormHandler);

const registerFormHandler = async event => {
  event.preventDefault();
  const email = $('#register-email').val().trim();
  const password = $('#register-password').val().trim();
  console.log('register', email, password);

  if (email && password) {
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/workspace');
    } else {
      console.log(response.status, response.statusText);
    }
  }
};
$('#register-form').on('submit', registerFormHandler);
