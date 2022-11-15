addEventListener("DOMContentLoaded", (e)=>{   
    let myform = document.querySelector("#myForm");
    let moneda = document.querySelector('.rta');
    let mychek = document.querySelector('#selecion');

    mychek.addEventListener("change", (e)=>{

        let myinput = document.querySelector('input[name="valor"]');

        if( e.target.value == "Dolares"){
            myinput.placeholder = "Ingrese la cantidad en Dolares";
        }else if( e.target.value == "Pesos"){
            myinput.placeholder = "Ingrese la cantidad en pesos";
        }
    })


    myform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        console.log(dataInput);
        let valor = Number(dataInput.valor);

        if(dataInput.scale == "Dolares"){

            let configPeso = Intl.NumberFormat('de-DE',{style: 'currency',currency: 'COP', minimumFractionDigits:2})
            let peso = Math.round(valor * 4821.09);
            console.log(peso);
            moneda.innerHTML = `${configPeso.format(peso)}`
            
        }else if(dataInput.scale == "Pesos"){
            let configDolar = Intl.NumberFormat('de-DE')
            let dolar = valor * 0.00021
            console.log(dolar)
            moneda.innerHTML = `${configDolar.format(dolar)}`;
        }
        
    })

})