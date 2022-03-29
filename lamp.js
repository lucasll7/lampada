var acender = document.getElementById('acender')
var apagar = document.getElementById('apagar')
var foto = document.getElementById('lampada')
function ac() {
    foto.src = 'acesa.jpg'
}
function ap() {
    foto.src = 'apagada.jpg'
}
acender.addEventListener('click', ac)
apagar.addEventListener('click', ap)