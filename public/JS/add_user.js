async function createUser() {
  let user = {
    Email: document.getElementById('floatingInput').value,
    Password: document.getElementById('floatingPassword').value,
  }
  const data = {email: user.Email,password: user.Password,};
  fetch('/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log('Result:', data))
    .catch((error) => console.error('Error:', error));
}