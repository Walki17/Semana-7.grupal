function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let boton = document.getElementById("regBtn"); 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email"); 
let contrasenaUno = document.getElementById("password1");
let contrasenaDos = document.getElementById("password2");
let terminos = document.getElementById("terminos");




boton.addEventListener('click', function() {
    if (nombre.value === "" || apellido.value === "" || email.value === "" || contrasenaUno.value === "" || contrasenaDos.value === "") {
        
        return showAlertError();
    }
  else if (contrasenaUno.value.length < 6) {
        
        return showAlertError();
    }
  else if (contrasenaUno.value !== contrasenaDos.value) {
       
        return showAlertError();
    }
  else if (!terminos.checked) {
        
        return showAlertError();
    }
    else { 
        return showAlertSuccess();
   }

  
});

