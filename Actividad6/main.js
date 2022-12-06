addEventListener("DOMContentLoaded", (e)=>{
    let myform = document.querySelector('form')
    let tabla = document.querySelector('tbody')

    myform.addEventListener('submit', (e) =>{
        let dataInput = Object.fromEntries(new FormData(e.target));
        e.preventDefault();

        tabla.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${dataInput.cant}</td>
            <td>${dataInput.ingred}</td>
        `)
    })

})
