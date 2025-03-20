    const temperature = 10; 
    const windSpeed = 5; 

    
    function calculateWindChill(temp, speed) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    }

    
    function displayWindChill() {
        let windChillElement = document.getElementById('windChill');

        
        if ((temperature <= 50 && windSpeed > 3)) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill} °F`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }

   
    function displayFooterInfo() {
        const currentYearElement = document.getElementById('currentYear');
        const lastModifiedElement = document.getElementById('lastModified');

        
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;

        
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    }

    
    window.onload = function() {
        displayWindChill();
        displayFooterInfo();
    };