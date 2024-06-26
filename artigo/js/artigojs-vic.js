//Titulo
document.addEventListener("DOMContentLoaded", function() {
    const titleMain = document.querySelector(".card-title-main");

    titleMain.addEventListener("click", function() {
        let colors = ["#00FFFF", "#9370DB", "#32CD32"]; // Ciano, Roxo Claro, Verde
        let i = 0;

        let interval = setInterval(function() {
            titleMain.style.color = colors[i];
            i = (i + 1) % colors.length;
        }, 300);

        setTimeout(function() {
            clearInterval(interval);
            titleMain.style.color = "#333"; // Volta à cor inicial após 3 segundos
        }, 3000);
    });
});


// Coracao
function toggleFavorite(button) {
    const heartIcon = button.querySelector('#heartIcon');
    if (heartIcon.classList.contains('bi-heart')) {
        heartIcon.classList.replace('bi-heart', 'bi-heart-fill');
        heartIcon.style.fill = 'red';
    } else {
        heartIcon.classList.replace('bi-heart-fill', 'bi-heart');
        heartIcon.style.fill = '';
    }
}