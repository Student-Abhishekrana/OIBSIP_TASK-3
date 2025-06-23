function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (isNaN(input)) {
    result = "Please enter a valid number.";
  } else if (conversionType === "CtoF") {
    result = `${input}°C = ${((input * 9) / 5 + 32).toFixed(2)}°F`;
  } else {
    result = `${input}°F = ${(((input - 32) * 5) / 9).toFixed(2)}°C`;
  }

  document.getElementById("result").textContent = result;
}
