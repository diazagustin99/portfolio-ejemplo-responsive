const modal = document.getElementById('contenedormodal-contacto');
const btnmodal = document.getElementById('btn-contacto');
const btncerrar = document.getElementById('btn-cerrar');
btnmodal.addEventListener('click', ()=>{
    modal.classList.toggle('show'); 
});

btncerrar.addEventListener('click', ()=>{
    modal.classList.toggle('show'); 
});
