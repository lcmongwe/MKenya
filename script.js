function msg() {
  var name = document.getElementById("name").value;

  const output = document.getElementById("message");

  output.innerHTML = "Hey! thank  you for your feedback" + " " + name;
}
