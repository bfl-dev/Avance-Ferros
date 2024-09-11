
function changeImage() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('seat')) {
            var image = event.target;
            if (image.src.includes("Libre.png")) {
                image.src = 'assets/Seleccionado.png';
            } else {
                image.src = 'assets/Libre.png';
            }
        }
    });
}
