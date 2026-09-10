
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cadastroForm = document.getElementById("cadastroForm");

openModalBtn.addEventListener("click", function(){
  document.body.classList.toggle("block");
})

closeModalBtn.addEventListener("click", function(){
  document.body.classList.toggle("close");
});


// closeModalBtn.onclick = function() {
//   modal.style.display = "none";
// }

cadastroForm.onsubmit = function(event) {
  event.preventDefault();

  alert("Seu cadastro foi realizado!");

   document.body.classList.remove("block");
   cadastroForm.reset();
}