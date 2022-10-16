function validate() {
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  if (userName === 'robin' && password === '1234') {
    alert('Login sucessfuly!');
  } else {
    alert('Login failed');
  }
}