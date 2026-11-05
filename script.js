const weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny Weather",
        description: "The sun is shining brightly. It's a perfect day to enjoy the outdoors!"
    },
    cloudy: {
        icon: "☁️",
        title: "Cloudy Weather",
        description: "The sky is covered with clouds. It looks like a calm and peaceful day."
    },
    rainy: {
        icon: "🌧️",
        title: "Rainy Weather",
        description: "It's raining outside. Grab your umbrella and enjoy the beautiful rain!"
    },
    stormy: {
        icon: "⛈️",
        title: "Stormy Weather",
        description: "Thunder and lightning are expected. Stay safe and remain indoors."
    },
    snowy: {
        icon: "❄️",
        title: "Snowy Weather",
        description: "Snowflakes are falling. Enjoy the beautiful winter atmosphere!"
    },
    windy: {
        icon: "💨",
        title: "Windy Weather",
        description: "The wind is blowing strongly. Hold on to your hats!"
    }
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const weatherDescription = document.getElementById("weatherDescription");

weatherSelect.addEventListener("change", function () {
    const selectedWeather = weatherSelect.value;

    if (selectedWeather === "") {
        weatherIcon.textContent = "🌤️";
        weatherTitle.textContent = "Welcome!";
        weatherDescription.textContent = "Select a weather condition to see its details.";
        document.body.className = "";
        return;
    }

    const weather = weatherData[selectedWeather];

    weatherIcon.textContent = weather.icon;
    weatherTitle.textContent = weather.title;
    weatherDescription.textContent = weather.description;

    document.body.className = selectedWeather;
});