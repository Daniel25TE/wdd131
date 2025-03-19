const temperature = 10; // in °C
const windSpeed = 5; // in km/h

function calculateWindChill(temp, speed) {
    return (temp <= 10 && speed > 4.8) ? Math.round(13.12 + 0.6215 * temp - 35.75 * (Math.pow(speed, 0.16)) + 0.5396 * temp * (Math.pow(speed, 0.16))) : "N/A";
}

// Document load functionality
document.addEventListener('DOMContentLoaded', () => {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
    
    // Get last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
});