document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeDown = document.getElementById('volume-down');
    const volumeUp = document.getElementById('volume-up');

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value;
        console.log(`Volume: ${volume}`);
    });


    volumeDown.addEventListener('click', () => {
        let volume = parseInt(volumeSlider.value);
        if (volume > 0) {
            volume -= 10;
            volumeSlider.value = volume;
            console.log(`Volume diminué à: ${volume}`);
        }
    });

    volumeUp.addEventListener('click', () => {
        let volume = parseInt(volumeSlider.value);
        if (volume < 100) {
            volume += 10;
            volumeSlider.value = volume;
            console.log(`Volume augmenté à: ${volume}`);
        }
    });
});