// Live Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialize immediately when page loads

// Weather Fetch
async function fetchWeather() {
    const apiKey = '7f00e165ded2c3175a20d59e879d7520'; // Replace with your OpenWeatherMap API key
    const city = 'Strasbourg'; // Replace with your city (or dynamically pass the city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not available');
        
        const weatherData = await response.json();
        const temp = weatherData.main.temp.toFixed(1); // Temperature in Celsius
        const desc = weatherData.weather[0].description; // Weather description
        const cityName = weatherData.name; // Get the city name from the API response
        const countryName = weatherData.sys.country;

        // Update HTML with weather data
        document.getElementById('temperature').textContent = temp;
        document.getElementById('description').textContent = desc;
        document.getElementById('city-country').textContent = `${cityName}, ${countryName}`;
        //document.getElementById('city-name').textContent = cityName; // Display city name
        //document.getElementById('country-name').textContent = countrname;
    } catch (error) {
        document.getElementById('weather').textContent = 'Unable to fetch weather data.';
    }
}
fetchWeather(); // Fetch weather data when page loads
    
// Optional: Fetch weather every 15 minutes (900000 ms)
setInterval(fetchWeather, 900000); // Update weather data every 15 minutes

// date
// Get the current date
const currentDate = new Date();

// Format the date (optional, you can customize this)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

// Display the date in the footer
document.getElementById('current-date').textContent = formattedDate;