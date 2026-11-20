const temperature = 9; // °C (matches static displayed temperature)
const windSpeed = 12; // km/h (matches static displayed wind speed)

function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * (speedKmh ** 0.16) + 0.3965 * tempC * (speedKmh ** 0.16);
}

function displayWindChill() {
  const windChillEl = document.getElementById("wind-chill-value");
  if (!windChillEl) return;

  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = `${chill.toFixed(1)} °C`;
  } else {
    windChillEl.textContent = "N/A";
  }
}

function setFooterInfo() {
  const yearEl = document.getElementById("current-year");
  const lastModEl = document.getElementById("last-modified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  if (lastModEl) {
    lastModEl.textContent = document.lastModified;
  }
}

displayWindChill();
setFooterInfo();