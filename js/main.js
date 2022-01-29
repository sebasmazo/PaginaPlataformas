function obtenerDatos(params) {
    var nombre = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var razafavorita = document.getElementById("cats").value;
    const user = {name: nombre, email: email, razafavorita: razafavorita};
    if (nombre!="" && email!="") {
        alert(user.name + ", bienvenido a nuestro blog michero!!!");
    }else{
        alert("Por favor ingrese los datos para suscribirse");
    }
} 
function showTypes(){
    if (document.getElementById("postTipos").style.display == "none"){
        document.getElementById("postTipos").style.display = "inline";
    }else{
        document.getElementById("postTipos").style.display = "none";
    }
    
}
