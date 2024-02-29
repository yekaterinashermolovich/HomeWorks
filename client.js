const response = await fetch('http://localhost:8000');

console.log(response);

const data = await response.json();

console.log(data);