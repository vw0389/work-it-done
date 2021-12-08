const logout = async () => {
  const response = await fetch('/logout', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log('Logout failed', response.statusText);
  }
};

$('#logout-button').on('click', logout);
