addEventListener("DOMContentLoaded", (e)=> {
    var task1 = document.getElementById("check3")
    var task2 = document.getElementById("check4")
    var task3 = document.getElementById("check2")
    var chekear = document.getElementById("check1");
    var lista = document.getElementById("lista");

    chekear.addEventListener("click", (e)=>
    {
        if (chekear.checked && task1.checked && task2.checked && task3.checked) {
            lista.innerHTML = "Tus tareas del dia fueron realizadas. ";
        } else{
            lista.innerHTML = "Tienes tareas por realizar.";
        }

    })

})