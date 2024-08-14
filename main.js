const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-Alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultados");


const perguntas =[
    {
        enunciado: "Pergunta 1",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 2",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 5",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },
];

 let atual = 0;
 let perguntaAtual;
 let historiaFinal = "";

 function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraReseltado();
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=0, initial-scale=1.0">
            <title>Você decide o futuro da IA</title>
        </head>
        <body>
            <div class="caixa-principal"></div>
            <h1>Você decide o futuro da IA</h1>
            <div class="caixa-perguntas"></div>
            <div class="caixa-alternativas"></div>
            <div class="caixa-resultado">
                <p class="texto-resultado"></p>
            </div>
        </body>
        </html>      return;
    }
 }
 perguntaAtual = perguntas[atual];
 caixaPerguntas.textContent = perguntaAtual.enunciado;
 caixaAlternativas.textContent = "";
 mostraAlternativa();

}