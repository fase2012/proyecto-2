const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const proximo = document.getElementById(proximoPasso);

        // Fade out the current section
        atual.classList.remove('ativo');
        atual.classList.add('fade-out');

        // Delay to allow the fade-out animation to complete
        setTimeout(() => {
            atual.classList.remove('fade-out');
            proximo.classList.add('ativo');
            proximo.classList.add('fade-in');
        }, 500); // Match this delay with the CSS transition duration
    });
});
