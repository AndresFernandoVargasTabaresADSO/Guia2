addEventListener("DOMContentLoaded", (e)=>{
    let formula = document.querySelector('#form')
    
    formula.addEventListener("submit", (e)=>{
    e.preventDefault()
    let datos = Object.fromEntries(new FormData(e.target))
    let value = datos.centigrados
    let formula = (9/5*value) + 32
    
    respuesta.innerHTML = ` ${formula} Grados Farenheit`
    
    })
    })