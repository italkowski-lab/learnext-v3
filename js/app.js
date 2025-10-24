// Lista de usuarios: {nombre, email, password}
const users = [
  { nombre: "Iván Talkowski", email: "ivan@example.com", password: "1234" },
  { nombre: "María Pérez", email: "maria@example.com", password: "abcd" }
];

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// Abrir modal
loginBtn.addEventListener("click", () => {
  loginModal.setAttribute("aria-hidden", "false");
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  loginModal.setAttribute("aria-hidden", "true");
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.email === email && u.password === password);

  if(user){
    alert("Bienvenido, " + user.nombre + "!");
    loginBtn.textContent = user.nombre;
    loginModal.setAttribute("aria-hidden", "true");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
