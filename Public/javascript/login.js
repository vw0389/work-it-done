const loginFormHandler = async event => {
  event.preventDefault();

  const email = $('#login-email').val().trim();
  const password = $('#login-password').val().trim();
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
      console.log("hi");
    }
  }
};

$('#login-form').on('submit', loginFormHandler);

const registerFormHandler = async event => {
  event.preventDefault();

  const email = $('#register-email').val().trim();
  const password = $('#register-password').val().trim();

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
    }
  }
};
$('#register-form').on('submit', registerFormHandler);
