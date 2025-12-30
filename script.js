// Theme
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
}

function toggleTheme() {
  body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
}

// Percent Calculator
function calculatePercent() {
  const total = +document.getElementById("total").value;
  const correct = +document.getElementById("correct").value;
  const wrong = +document.getElementById("wrong").value;

  if (!total) return;

  const percent = ((correct - wrong / 3) / total) * 100;
  document.getElementById("result").innerText =
    `درصد شما: ${percent.toFixed(2)}٪`;
}
