document.getElementById("convertBtn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(tempInput) || tempInput.trim() === "") {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }

    const temperature = parseFloat(tempInput);
    let resultText = "";

    // Conversion logic
    if (unit === "celsius") {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        resultText = `${temperature}°C = ${toFahrenheit.toFixed(2)}°F, ${toKelvin.toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = toCelsius + 273.15;
        resultText = `${temperature}°F = ${toCelsius.toFixed(2)}°C, ${toKelvin.toFixed(2)}K`;
    } else if (unit === "kelvin") {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (toCelsius * 9/5) + 32;
        resultText = `${temperature}K = ${toCelsius.toFixed(2)}°C, ${toFahrenheit.toFixed(2)}°F`;
    }

    // Display result
    resultDiv.textContent = resultText;
    resultDiv.style.color = "black";
});
