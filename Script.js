
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

/*Aplicando formatação de CPF e Telefone
Fonte: Canal Gemeltec
*/

  const Cpf = document.getElementById("cpf");

  Cpf.addEventListener("keypress", ()=>{

    let tamanho = Cpf.value.length;
    if(tamanho == 3 || tamanho == 7){
      Cpf.value += "."
    }
    else if(tamanho == 11){
      Cpf.value += "-"
    }
  });

  const Telefone = document.getElementById("telefone");

  Telefone.addEventListener("keypress", ()=>{

    let TamanhoT = Telefone.value.length;
    if(TamanhoT == 0){
      Telefone.value += "(";
    }else
      if(TamanhoT == 3){
          Telefone.value += ")";
      }
      else
      if(TamanhoT == 9){
          Telefone.value += "-";
      }
  });