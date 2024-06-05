var sesion= localStorage.getItem("nombre");
var correo= localStorage.getItem("correo");
var cont= localStorage.getItem("password");
var ap= localStorage.getItem("apellido");
const confi=()=>{
    if(sesion==null || correo==null){
        window.location.href="index.html";
    }
    document.querySelector("#usuario").innerHTML=sesion;
    document.querySelector("#gm").innerHTML=correo;
    document.querySelector("#usu").innerHTML=sesion;
    document.querySelector("#app").innerHTML=ap;

}

const no=()=>{
window.location.href="inicio.html";
}
const cerrarSesion=()=>{
    localStorage.clear();
    window.location.href="index.html";
}