function submitButton() {
  console.log("Clicked");
  document.getElementById("name").value;

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let hobby = document.getElementById("hobbies").value;

  const user = {
    name: name,
    age: age,
    email: email,
    hobby: hobby,
  };

  document.getElementById("jsonOutput").textContent = JSON.stringify(user);
  console.log(user);
  console.log(jsonOutput);
}
