


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#enviarporcorreo').click(function(){
    alert("El correo fue enviado correctamente!")
})

$('#ingredientes').dblclick(function(){
    $(this).css('color', 'red')
})

$('#preparacion').dblclick(function(){
    $(this).css('color', 'red')
})

$('h5').click(function(){
    $('#cart_row').toggle(400)
    $('#cart_row').toggle(400)
})