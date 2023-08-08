const botaoAnimado = document.getElementById('botao-continue');

botaoAnimado.addEventListener('mouseover', function() {
    botaoAnimado.style.background = "linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))";

    botaoAnimado.addEventListener('mouseout', function() {
        botaoAnimado.style.background = "hsl(224, 30%, 27%)";
    })
})