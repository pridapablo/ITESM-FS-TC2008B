// The API is running on a server
// I'm making a request as a promise
// We'll avoid using the .then method and use async/await instead (better practice)

// I'm using the fetch API

const response = await fetch("http://127.0.0.1:3002/api/hello", {
  method: "GET",
});

// I'm getting the response as a JSON object
if (response.ok) {
  const message = await response.text();

  console.log(message);

  // I'm using the DOM API to change the text of the element with id "response-placeholder"

  const resultDiv = document.getElementById("response-placeholder");
  resultDiv.innerHTML = message;
}
