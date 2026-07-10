const input = document.getElementById("inputValue")
const btn = document.getElementById("convertButton")
const result = document.getElementById("result")
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

btn.addEventListener("click", function(){
    number = Number(input.value)
    result.innerHTML = `
    <div class="lenght">
            <h2>Length (Meter/Feet)</h2>
            <p id="lenght">${number} meters = ${(number * meterToFeet).toFixed(3)} feets |
            ${number} feets = ${(number * (1 / meterToFeet)).toFixed(3)} meters</p>
        </div>

        <div class="volume">
            <h2>Volume (Liter/Gallon)</h2>
            <p id="volume">${number} liters = ${(number * literToGallon).toFixed(3)} gallons |
            ${number} gallons = ${(number * (1 / literToGallon)).toFixed(3)} liters</p>
        </div>

        <div class="mass">
            <h2>Mass (Kilogram/Pound)</h2>
            <p id="mass">${number} kilograms = ${(number * kilogramToPound).toFixed(2)} pounds |
            ${number} pounds = ${(number * (1 / kilogramToPound)).toFixed(2)} kilograms</p>
        </div>
    `
})
