document.addEventListener('DOMContentLoaded', () => {
    const fishNet = document.querySelector('.fish-net');
    const trashItems = document.querySelectorAll('.trash li');
    setTimeout(() => {
        fishNet.style.backgroundImage = "url('icons/fish-net-half-full.png')"; // Replace with the full net image
    }, 7500); // Change image after 5 seconds
    setTimeout(() => {
        fishNet.style.backgroundImage = "url('icons/fish-net-half-full-more.png')"; // Replace with the full net image
    }, 10000);
    setTimeout(() => {
        fishNet.style.backgroundImage = "url('icons/fish-net-full-completely.png')"; // Replace with the full net image
    }, 16500); 
    function checkCollision() {
        const netRect = fishNet.getBoundingClientRect();
    
        trashItems.forEach((trash) => {
            const trashRect = trash.getBoundingClientRect();
    
            // Check for collision
            const isCaught =
                netRect.left < trashRect.right &&
                netRect.right > trashRect.left &&
                netRect.top < trashRect.bottom &&
                netRect.bottom > trashRect.top;
    
            if (isCaught && !trash.classList.contains('caught')) {
                trash.classList.add('caught'); // Add the class to stop the animation
                console.log(`${trash.className} caught!`);
            }
        });
    }

    setInterval(checkCollision, 100);
});


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const button = document.getElementById('no');

    // Événement pour détecter le mouvement de la souris
    body.addEventListener("mousemove", (event) => {
        if (!button) return; // Vérifie que le bouton existe

        const rect = button.getBoundingClientRect();
        const mouseX = event.clientX; // Position X de la souris
        const mouseY = event.clientY; // Position Y de la souris

        const distanceX = (rect.x + rect.width / 2) - mouseX;
        const distanceY = (rect.y + rect.height / 2) - mouseY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Si la souris s'approche du bouton (distance < 100px)
        if (distance < 100) {
            // Calcul des nouvelles positions
            let newTop = Math.random() * (body.scrollHeight - rect.height);
            let newLeft = Math.random() * (body.scrollWidth - rect.width);

            // Ajuster pour que le bouton ne sorte pas de l'écran
            if (newTop < 0) newTop = 0;
            if (newLeft < 0) newLeft = 0;
            if (newTop + rect.height > body.scrollHeight) {
                newTop = body.scrollHeight - rect.height;
            }
            if (newLeft + rect.width > body.scrollWidth) {
                newLeft = body.scrollWidth - rect.width;
            }

            // Mettre à jour la position du bouton
            button.style.position = 'absolute';
            button.style.top = `${newTop}px`;
            button.style.left = `${newLeft}px`;
        }
    });
});


