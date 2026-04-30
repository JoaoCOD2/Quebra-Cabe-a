// Capturar os elementos

const botaoAtivar = document.getElementById("btnAtivar");
const botaoDesativar = document.getElementById("btnDesativar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

// Estado da aplicação

let pecaAtivada = false;

// Ativar a peça
botaoAtivar.addEventListener("click", function () {
  if (pecaAtivada === false) {
    peca.classList.remove("bloqueada");
    peca.classList.add("ativa");

    statusTexto.textContent = "Ativada";
    statusTexto.style.color = "#22c55c";

    iconePeca.innerText = "✅";
    tituloPeca.innerText = "Peça ativada";
    textoPeca.innerText = "Parabéns! Você ativou a primeira peça.";

    botaoAtivar.disabled = true;
    botaoDesativar.disabled = false;
    pecaAtivada = true;
  }
});

// Desativar a peça
botaoDesativar.addEventListener("click", function () {
  if (pecaAtivada === true) {
    peca.classList.remove("ativa");
    peca.classList.add("bloqueada");

    statusTexto.textContent = "Bloqueada";
    statusTexto.style.color = "#facc15";

    iconePeca.innerText = "🔒";
    tituloPeca.innerText = "Peça Bloqueada";
    textoPeca.innerText = "Aguardando interação...";

    botaoAtivar.disabled = false;
    botaoDesativar.disabled = true;
    pecaAtivada = false;
  }
});

// Clicar na peça ativa para mostrar explicação sobre DOM
peca.addEventListener("click", function () {
  if (pecaAtivada === true) {
    window.location.href = 'PaginaDOM/index.html';
  }
});
