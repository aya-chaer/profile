let clickCount = 0;
let dark = false;

document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("output");
  clickCount++;

  if (name === "") {
    output.innerText = "Please enter your name ";
    output.style.color = "red";
  } else {
    output.innerText = `Hello, ${name}! (Clicked ${clickCount} times)`;
    output.style.color = "#2b2d42";
  }

  // toggle background
  document.body.style.backgroundColor = dark ? "#fafafa" : "#e4ebf5";
  dark = !dark;
});
