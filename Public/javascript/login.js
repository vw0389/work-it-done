const loginFormHandler = event => {
  event.preventDefault();

  const username = $('#login-username').val().trim();
  const password = $('#login-password').val().trim();
};

$('#login-form').on('submit', loginFormHandler);

const registerFormHandler = event => {
  event.preventDefault();

  const username = $('#register-username').val().trim();
  const password = $('#register-password').val().trim();
};
$('#register-form').on('submit', registerFormHandler);
