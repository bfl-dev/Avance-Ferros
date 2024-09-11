function loginOn() {
  document.getElementById("login").style.display = "flex";
}

function loginOff() {
  document.getElementById("login").style.display = "none";
}

function registerOn() {
  document.getElementById("register").style.display = "flex";
}

function registerOff() {
  document.getElementById("register").style.display = "none";
}

function login(){
  document.getElementById("logged").style.display = "flex";
  document.getElementById("unlogged").style.display = "none";
  loginOff();
  registerOff();
}

function logout(){
  document.getElementById("logged").style.display = "none";
  document.getElementById("unlogged").style.display = "flex";
  loginOff();
  registerOff();
  location.href = "/index.html"
}

document.addEventListener("DOMContentLoaded", function() {
  var loggedElement = document.getElementById("logged");
  if (loggedElement) {
    var accountElement = loggedElement.getElementsByClassName("user")[0];
    if (accountElement) {
      accountElement.onclick = function() {
        location.href = '/account-settings.html';
      };
    }
  }

  
  var cuentas = ["Configuracion Cuenta", "Editar Cuenta", "Puntos de viajero"];
  if (cuentas.includes(document.title)) {
    login();
  }
});