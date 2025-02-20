document.addEventListener('DOMContentLoaded', () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);
        const hex = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
    }

    function updateRangeFromInput() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const red = parseInt(hex.substring(1, 3), 16);
        const green = parseInt(hex.substring(3, 5), 16);
        const blue = parseInt(hex.substring(5, 7), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    // Event listeners for ranges
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    // Event listeners for numeric inputs
    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    // Event listener for color picker
    colorPicker.addEventListener('input', updateFromColorPicker);

    updateColor(); // Initialize the color box with the default value
});
