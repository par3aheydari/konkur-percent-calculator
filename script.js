// Theme
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") body.classList.add("light");

function toggleTheme() {
  body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
}

// Emoji logic
function getEmoji(percent) {
  if (percent < 20) return "😞";
  if (percent < 40) return "😕";
  if (percent < 60) return "😐";
  if (percent < 80) return "🙂";
  return "😄";
}

// Percent calculation
function calculatePercent() {
  const total = +document.getElementById("total").value;
  const correct = +document.getElementById("correct").value;
  const wrong = +document.getElementById("wrong").value;

  if (!total) return;

  const percent = ((correct - wrong / 3) / total) * 100;
  const emoji = getEmoji(percent);

  document.getElementById("result").innerText =
    `${emoji} درصد شما: ${percent.toFixed(2)}٪`;
}
