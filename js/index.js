function login(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if (user === "admin" && pass === "1234"||user === "root" && pass === "admin" ){
        window.location="paginas/administracion.html";
    }
    else{
        swal('Error','Usuario o Password incorrectas','error')
    }
}