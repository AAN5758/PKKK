// Geser Task
function scrollContainer(containerId, amount) {
    const container = document.getElementById(containerId);
    const screenWidth = window.innerWidth;

    const scrollAmount = screenWidth > 501 ? 510 * amount : screenWidth * amount - 10;

    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Tombol Kembali
function backPage(){
    window.history.back();
}

