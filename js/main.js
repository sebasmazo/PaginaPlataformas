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
    document.getElementById("curiosidades").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    if (document.getElementById("postTipos").style.display == "none"){
        document.getElementById("postTipos").style.display = "inline";
    }else{
        document.getElementById("postTipos").style.display = "none";
    }
    
}
function showFacts() {
    document.getElementById("postTipos").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    if (document.getElementById("curiosidades").style.display == "none") {
        document.getElementById("curiosidades").style.display = "inline";
    } else {
        document.getElementById("curiosidades").style.display = "none";
    }
}
function showGallery() {
    document.getElementById("curiosidades").style.display = "none";
    document.getElementById("postTipos").style.display = "none";
    if (document.getElementById("galeria").style.display == "none") {
        document.getElementById("galeria").style.display = "block";
    } else {
        document.getElementById("galeria").style.display = "none";
    }
}
