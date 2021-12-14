const loginFormHandler = event => {
  event.preventDefault();

  const email = $('#login-email').val().trim();
  const password = $('#login-password').val().trim();
  if (email && password) {
    const response = fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    }).then( (response) =>{
      if (response.ok) {
        document.location.replace('/workspace');
      }
    });
    
  }
};

$('#login-form').on('submit', loginFormHandler);

const registerFormHandler = event => {
  event.preventDefault();

  const email = $('#register-email').val().trim();
  const password = $('#register-password').val().trim();

  if (email && password) {
    const response = fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    }).then( (response)=> {
      if (response.ok) {
        document.location.replace('/workspace');
      }
    });
    
  }
};
$('#register-form').on('submit', registerFormHandler);
