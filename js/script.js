// Seleção dos elementos
const pecas = document.querySelectorAll(".peca");
const contadorAtivas = document.getElementById("contadorAtivas");
const mensagemFinal = document.getElementById("mensagemFinal");
const btnResetar = document.getElementById("btnResetar");

// Configuração
const LIMITE_PECAS = 3;
const TOTAL_PECAS = 6;

// Atualiza o contador de peças ativas
function atualizarContador() {
  const pecasAtivas = document.querySelectorAll(".peca.ativa");
  const quantidade = pecasAtivas.length;
  contadorAtivas.innerText = quantidade;

  // Verifica se atingiu o limite
  if (quantidade >= LIMITE_PECAS) {
    mostrarMensagemLimite();
    desabilitarPecasInativas();
  } else {
    mensagemFinal.innerText = "";
    mensagemFinal.classList.remove("alerta", "vitoria");
    habilitarPecas();
  }

  // Verifica condição de vitória
  if (quantidade === TOTAL_PECAS) {
    mostrarMensagemVitoria();
  }
}

// Mostra mensagem de limite atingido
function mostrarMensagemLimite() {
  mensagemFinal.innerText = "⚠️ Limite atingido!";
  mensagemFinal.classList.add("alerta");
}

// Mostra mensagem de vitória
function mostrarMensagemVitoria() {
  mensagemFinal.innerText = "🎉 Você venceu!";
  mensagemFinal.classList.remove("alerta");
  mensagemFinal.classList.add("vitoria");
}

// Desabilita peças inativas quando limite é atingido
function desabilitarPecasInativas() {
  pecas.forEach((peca) => {
    if (!peca.classList.contains("ativa")) {
      peca.classList.add("desabilitada");
    }
  });
}

// Habilita todas as peças
function habilitarPecas() {
  pecas.forEach((peca) => {
    peca.classList.remove("desabilitada");
  });
}

// Função para resetar todas as peças
function resetarPecas() {
  pecas.forEach((peca) => {
    // Remove classe ativa
    peca.classList.remove("ativa");
    peca.classList.add("bloqueada");
    peca.classList.remove("desabilitada");

    // Volta ao estado inicial
    const icone = peca.querySelector(".icone");
    const titulo = peca.querySelector("h3");
    const texto = peca.querySelector("p");

    icone.innerText = "🔒";
    titulo.innerText = "Peça Bloqueada";
    texto.innerText = "Clique para ativar";
  });

  // Limpa mensagens
  mensagemFinal.innerText = "";
  mensagemFinal.classList.remove("alerta", "vitoria");

  // Atualiza contador
  atualizarContador();
}

// Adiciona evento ao botão resetar
btnResetar.addEventListener("click", resetarPecas);

// Adiciona evento de clique para cada peça
pecas.forEach(function (peca) {
  peca.addEventListener("click", function () {
    // Se está desabilitada, não faz nada
    if (peca.classList.contains("desabilitada") && !peca.classList.contains("ativa")) {
      return;
    }

    const link = peca.dataset.link;

    // Se a peça tem link e está ativa, navega para o link
    if (peca.classList.contains("ativa") && link) {
      window.location.href = link;
      return;
    }

    // Se já atingiu o limite e está tentando ativar uma nova peça, bloqueia
    const pecasAtivas = document.querySelectorAll(".peca.ativa");
    if (pecasAtivas.length >= LIMITE_PECAS && !peca.classList.contains("ativa")) {
      alert("Limite de peças atingido! Resete para ativar novas peças.");
      return;
    }

    // Alterna entre ativa e bloqueada
    peca.classList.toggle("ativa");
    peca.classList.toggle("bloqueada");

    const icone = peca.querySelector(".icone");
    const titulo = peca.querySelector("h3");
    const texto = peca.querySelector("p");
    const iconeAtivo = peca.dataset.icone || "🧩";
    const tituloAtivo = peca.dataset.titulo || "Peça ativada";
    const textoAtivo = peca.dataset.texto || "Peça ativada com sucesso!";

    if (peca.classList.contains("ativa")) {
      icone.innerText = iconeAtivo;
      titulo.innerText = tituloAtivo;
      texto.innerText = textoAtivo;
    } else {
      icone.innerText = "🔒";
      titulo.innerText = "Peça Bloqueada";
      texto.innerText = "Clique para ativar";
    }

    atualizarContador();
  });
});

// Inicializa o contador no carregamento
atualizarContador();

