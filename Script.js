const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [
  {
    enunciado: "Como a tecnologia impactou o mercado de trabalho?",
    alternativas: [
      { texto: "Criou novas oportunidades e profissões.", afirmacao: "A tecnologia ampliou o mercado de trabalho." },
      { texto: "Eliminou empregos tradicionais.", afirmacao: "A tecnologia trouxe desafios para empregos antigos." }
    ]
  },
  {
    enunciado: "Como a tecnologia influencia o meio ambiente?",
    alternativas: [
      { texto: "Ajuda a preservar a natureza.", afirmacao: "A tecnologia auxilia na proteção ambiental." },
      { texto: "Contribui para o consumo e poluição.", afirmacao: "O uso excessivo da tecnologia gera impactos ambientais." }
    ]
  },
  // Adicione mais perguntas se quiser
];

let atual = 0;
let historiaFinal = "";

// Inicia o jogo: oculta tela inicial e mostra perguntas
botaoIniciar.addEventListener("click", () => {
  telaInicial.classList.add("escondido");
  caixaPrincipal.classList.remove("escondido");
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  botaoReiniciar.style.display = "none";
  mostraPergunta();
});

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach((alt) => {
    const botao = document.createElement("button");
    botao.textContent = alt.texto;
    botao.classList.add("botao-alternativa");
    botao.addEventListener("click", () => {
      historiaFinal += alt.afirmacao + " ";
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "Resultado final:";
  textoResultado.textContent = historiaFinal.trim();
  caixaAlternativas.innerHTML = "";
  botaoReiniciar.style.display = "inline-block";
}

botaoReiniciar.addEventListener("click", () => {
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  botaoReiniciar.style.display = "none";
  mostraPergunta();
});
                                
