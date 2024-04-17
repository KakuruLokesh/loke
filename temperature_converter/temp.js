function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('from-unit').value;
    var toUnit = document.getElementById('to-unit').value;
    var resultElement = document.getElementById('result');
    var result;
 
    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid temperature.';
        return;
    }
 
    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }
 
    resultElement.textContent = result.toFixed(2) + ' ' + toUnit;
}
 