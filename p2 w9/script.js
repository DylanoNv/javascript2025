
// api key
const API_KEY = "29005ec723c7363ab4b0200d8abce08f";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const messageEl = document.getElementById("message");
const resultEl = document.getElementById("result");

const cityTitleEl = document.getElementById("cityTitle");
const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const descEl = document.getElementById("desc");

const iconEl = document.getElementById("icon");
const windEl = document.getElementById("wind");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");
const feelsEl = document.getElementById("feels");

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function showMessage(text, isError = true) {
  messageEl.textContent = text;
  messageEl.style.color = isError ? "#fca5a5" : "#86efac";
}

function clearResult() {
  resultEl.classList.add("hidden");
  cityTitleEl.textContent = "";
  tempEl.textContent = "";
  humidityEl.textContent = "";
  descEl.textContent = "";
  feelsEl.textContent = "";
  windEl.textContent = "";
  sunriseEl.textContent = "";
  sunsetEl.textContent = "";
  iconEl.src = "";
  iconEl.alt = "";
}

function toHHMM(unixSeconds, timezoneSeconds) {
  const ms = (unixSeconds + timezoneSeconds) * 1000;
  const d = new Date(ms);
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

// miles naar kilometer
function msToKmh(ms) {
  return Math.round(ms * 3.6);
}

function renderWeather(data) {
  localStorage.setItem("lastCity", data.name);

  cityTitleEl.textContent = `Weer in ${data.name}`;
  tempEl.textContent = Math.round(data.main.temp);
  feelsEl.textContent = Math.round(data.main.feels_like);
  humidityEl.textContent = data.main.humidity;
  descEl.textContent = capitalize(data.weather[0].description);

  windEl.textContent = msToKmh(data.wind.speed);

  const tz = data.timezone || 0;
  sunriseEl.textContent = toHHMM(data.sys.sunrise, tz);
  sunsetEl.textContent = toHHMM(data.sys.sunset, tz);

  const iconCode = data.weather[0].icon;
  iconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconEl.alt = data.weather[0].main || "weer";

  resultEl.classList.remove("hidden");
}

async function getWeather(cityFromAuto = null) {
  const city = (cityFromAuto ?? cityInput.value).trim();

  clearResult();
  showMessage("");

  if (city === "") {
    showMessage("Vul eerst een stad in.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=nl`;

  try {
    showMessage("Bezig met ophalen...", false);

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) throw new Error("Stad niet gevonden.");
      if (response.status === 401) throw new Error("API key werkt niet (401).");
      throw new Error("Er ging iets mis met ophalen.");
    }

    const data = await response.json();
    renderWeather(data);
    showMessage("Gelukt", false);
  } catch (error) {
    showMessage(error.message, true);
  }
}

searchBtn.addEventListener("click", () => getWeather());
cityInput.addEventListener("keydown", (e) => { if (e.key === "Enter") getWeather(); });


// refresh
window.addEventListener("load", () => {
  const last = localStorage.getItem("lastCity");
  if (last) {
    cityInput.value = last;
    getWeather(last);
  }
});