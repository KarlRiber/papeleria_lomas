
const username = document.getElementById("username");
const psword = document.getElementById("psword");
const submitbutton = document.getElementById("submitbutton");
const contrasena = "1234"

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();

  const interContrasena = psword.value;
  
  if (interContrasena == contrasena)
    location.href = "html/interfaz_01.html"
  else
  alert("Contraseña invalida");
})




