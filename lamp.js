var acender = document.getElementById('acender')
var apagar = document.getElementById('apagar')
var foto = document.getElementById('foto')
function ac() {
    foto.src = 'acesa.jpg'
}
function ap() {
    foto.src = 'apagada.jpg'
}
acender.addEventListener('click', ac)
apagar.addEventListener('click', ap)