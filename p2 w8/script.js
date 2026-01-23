// API key
const API_KEY = "c2d8a37e60dffaccd7689c236e67f329";

const USE_MOCK = true; // false zetten als de api werkt

const MOCK_DATA = {
  name: "Rotterdam",
  main: { temp: 13.4, humidity: 82 },
  weather: [{ description: "bewolkt" }]
};


const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const messageEl = document.getElementById("message");
const resultEl = document.getElementById("result");

const cityTitleEl = document.getElementById("cityTitle");
const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const descEl = document.getElementById("desc");

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
}

async function getWeather() {
  const city = cityInput.value.trim();

  clearResult();
  showMessage("");

  if (city === "") {
    showMessage("Vul eerst een stad in.");
    return;
  }

  // metric systeem
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=nl`;

  try {
    showMessage("Bezig met ophalen...", false);

    const response = await fetch(url);
      // tijdelijk door api
  if (USE_MOCK) {
    const data = MOCK_DATA;

    cityTitleEl.textContent = `Weer in ${data.name}`;
    tempEl.textContent = Math.round(data.main.temp);
    humidityEl.textContent = data.main.humidity;
    descEl.textContent = capitalize(data.weather[0].description);

    resultEl.classList.remove("hidden");
    showMessage("Testdata (API nog niet actief)", false);
    return;
  }


    // error bericht
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Locatie niet gevonden. Probeer een andere stad.");
      }
      throw new Error("Er ging iets mis met de API-aanroep.");
    }

    const data = await response.json();

    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    cityTitleEl.textContent = `Weer in ${cityName}`;
    tempEl.textContent = Math.round(temperature);
    humidityEl.textContent = humidity;
    descEl.textContent = capitalize(description);

    resultEl.classList.remove("hidden");
    showMessage("Gelukt!", false);
  } catch (error) {
    showMessage(error.message);
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});