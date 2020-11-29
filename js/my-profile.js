function guardar(){
let nombre = document.getElementById("inputName").value;
let apellido = document.getElementById("inputLastname").value;
let email = document.getElementById("inputEmail4").value;
let edad = document.getElementById("inputAge").value;
let telefono = document.getElementById("inputPhone").value;

if (nombre === "" ||apellido === "" ||email === "" ||edad === "" ||telefono === ""){
    alert ("Completar los campos");
    return false;}

let datos={
    name: nombre,
    lastname: apellido,
    mail: email,
    telephone: telefono,
    age: edad}
localStorage.setItem("data",JSON.stringify(datos))}


    if(localStorage.getItem("data")!= null){
guardarDatos=JSON.parse(localStorage.getItem("data"))
document.getElementById("inputName").value=guardarDatos.name;
document.getElementById("inputLastname").value=guardarDatos.lastname;
document.getElementById("inputEmail4").value=guardarDatos.mail;
document.getElementById("inputAge").value=guardarDatos.telephone;
document.getElementById("inputPhone").value=guardarDatos.age;
    }
