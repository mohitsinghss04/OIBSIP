function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (inputValue === '') {
        output.innerHTML = 'Please enter a temperature value.';
        return;
    }

    const value = parseFloat(inputValue);
    let result = '';

    if (inputUnit === 'celsius') {
        const fahrenheit = (value * 9/5) + 32;
        result = `${value}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (inputUnit === 'fahrenheit') {
        const celsius = (value - 32) * 5/9;
        result = `${value}°F = ${celsius.toFixed(2)}°C`;
    }

    output.innerHTML = `Result: ${result}`;
}
