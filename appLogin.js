var apellido= localStorage.getItem("apellido");
var sesion= localStorage.getItem("nombre");
var correo= localStorage.getItem("correo");
var password= localStorage.getItem("password");

const confi=()=>{
    if(sesion!=null){
        window.location.href="inicio.html";
    }
}

const registrar= async()=>{
    var correo= document.querySelector("#correo").value;
    var password= document.querySelector("#password").value;
    var nombre= document.querySelector("#nombre").value;
    var apellido= document.querySelector("#app").value;
    if(correo.trim()==""||password.trim()==""||nombre.trim()==""||apellido.trim()==""){
        Swal.fire({
            title: "ERROR", 
            text:"Tienes campos vacíos",
            icon: "error"
        });
        return;
    }
    if (!validarCorreo(correo)) {
        Swal.fire({
            title: "ERROR", 
            text:"Introduce un correo electronico valido",
            icon: "error"
        });
    }
    if (!validarPassword(password)) {
        Swal.fire({
            title: "ERROR", 
            text:"tener almenos una(minuscula), un (numero) y min.(8 caracteres)",
            icon: "error"
        });
    }

    const datos = new FormData();
    datos.append("correo", correo);
    datos.append("password", password);
    datos.append("nombre", nombre);
    datos.append("apellido", apellido);
    var respuesta= await fetch("registrarUsuario.php",{
        method:'POST',
        body: datos
    });

    var resultado= await respuesta.json();

    if (resultado.success==true) {
        Swal.fire({
            title: "¡REGRISTRO ÉXITOSO!",
            text: resultado.mensaje,
            icon: "success"
        });
        document.querySelector("#formIniciar").reset();
        setTimeout(() => {
            window.location.href="index.html";
        }, 2000);
    }else{
        Swal.fire({title: "ERROR",
        text: resultado.mensaje,
        icon: "error"});
    }
    
}

const iniciar= async()=>{
    var correo= document.querySelector("#correo").value;
    var password= document.querySelector("#password").value;
    

    if(correo.trim()==""|| password.trim()==""){
        Swal.fire({
            title: "ERROR", 
            text:"Tienes campos vacíos",
            icon: "error"
        });
        return;
    }
    if (!validarCorreo(correo)) {
        Swal.fire({
            title: "ERROR", 
            text:"Introduce un correo electronico valido",
            icon: "error"
        });
    }
    if (!validarPassword(password)) {
        Swal.fire({
            title: "ERROR", 
            text:"Introduce una contraseña valida (mayusculas, minusculas, numeros y min. 8 caracteres ",
            icon: "error"
        });
    }

    const datos = new FormData();
    datos.append("correo", correo);
    datos.append("apellido", apellido);
    datos.append("password", password);

    var respuesta= await fetch("loginUsuario.php",{
        method:'POST',
        body: datos
    });

    var resultado= await respuesta.json();

    if (resultado.success==true) {
        Swal.fire({
            title: "¡ÉXITOSO!",
            text: resultado.mensaje,
            icon: "success"
        });
        document.querySelector("#formSesion").reset();
        localStorage.setItem("nombre",resultado.nombre);
        localStorage.setItem("correo",correo);
        localStorage.setItem("apellido",apellido);
        setTimeout(() => {
            window.location.href="inicio.html";
        }, 2000);
    }else{
        Swal.fire({title: "ERROR",
        text: resultado.mensaje,
        icon: "error"});
}
}
