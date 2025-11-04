const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você prefere atividades mais criativas ou analíticas?",
        alternativas: [
            {
                texto: "Prefiro pensar de forma criativa, buscando novas soluções e inovações.",
                afirmacao:[
                     "Sua inclinação para a criatividade é um excelente sinal para áreas como design, publicidade ou desenvolvimento de produtos.",
                     "Você prospera em cenários onde a imaginação é o principal motor, como na produção de conteúdo digital, artes visuais ou marketing criativo." ]
            },
            {
                texto: "Gosto de analisar dados, planejar e tomar decisões baseadas em lógica e estrutura.",
                afirmacao: [
                    "Você se destaca em ambientes estruturados e analíticos, sendo mais indicado para áreas como engenharia, finanças ou TI.",
                "Sua mente lógica é perfeita para otimizar processos, prever tendências e resolver problemas complexos em setores como ciência de dados ou análise financeira."]
            }
        ]
    },
    {
        enunciado: "Você gosta de lidar diretamente com pessoas?",
        alternativas: [
            {
                texto: "Sim, me sinto à vontade para interagir, ajudar e até persuadir outras pessoas.",
                afirmacao: [
                    "Você tem facilidade em se comunicar e criar conexões, sendo ideal para vendas, psicologia, recursos humanos ou atendimento ao cliente.",
                "Você se destaca em tarefas que exigem profundidade e precisão, como análise de sistemas, redação acadêmica ou desenvolvimento de algoritmos."]
            },
            {
                texto: "Prefiro atividades que envolvem mais foco individual e menos interação direta.",
                afirmacao: [
                    "Sua habilidade em se concentrar no trabalho individual faz de você uma pessoa qualificada para áreas como programação, escrita técnica ou pesquisa científica.",
                "Você se destaca em tarefas que exigem profundidade e precisão, como análise de sistemas, redação acadêmica ou desenvolvimento de algoritmos."]
            }
        ]
    },
    {
        enunciado: "Como você lida com situações de pressão?",
        alternativas: [
            {
                texto: "Consegue me manter calmo e encontrar soluções rápidas quando há prazos apertados.",
                afirmacao: ["Sua capacidade de tomar decisões rápidas sob pressão é essencial em áreas como jornalismo, consultoria empresarial ou gestão de crises.",
                "Você brilha em ambientes de alta adrenalina, como trading financeiro, resposta a emergências ou produção de eventos ao vivo."]
            },
            {
                texto: "Prefiro um ritmo de trabalho mais controlado, com tempo suficiente para planejamento e execução.",
                afirmacao: [
                    "Você é mais eficaz em ambientes planejados e organizados, se destacando em gestão de projetos, pesquisa acadêmica ou contabilidade.",
                "Sua paciência e meticulosidade garantem excelência em auditoria, planejamento urbano ou desenvolvimento de políticas públicas."]
            }
        ]
    },
    {
        enunciado: "Você tem facilidade para aprender novas habilidades rapidamente?",
        alternativas: [
            {
                texto: "Sim, tenho facilidade em absorver novos conhecimentos e me adaptar a mudanças.",
                afirmacao: [
                    "Seu aprendizado rápido é um trunfo para carreiras dinâmicas e em constante evolução, como tecnologia, startups ou consultoria estratégica.",
                "Você se adapta facilmente a ferramentas emergentes, como IA, blockchain ou realidade aumentada, em setores inovadores."]
            },
            {
                texto: "Prefiro me aprofundar em áreas que já conheço e melhorar constantemente minhas habilidades.",
                afirmacao: [
                    "Você é excelente em se especializar e se tornar um expert em um campo específico, sendo ideal para engenharia, medicina ou direito.",
                "Sua dedicação à maestria o torna referência em nichos como cirurgia especializada, advocacia tributária ou engenharia aeroespacial."]
            }
        ]
    },
    {
        enunciado: " Você prefere ambientes mais estruturados ou mais flexíveis?",
        alternativas: [
            {
                texto: "Prefiro seguir processos e protocolos bem definidos, com metas claras e objetivos organizados.",
                afirmacao: ["Sua preferência por ambientes organizados sugere que você é ideal para áreas administrativas, finanças ou logística.",
                "Você garante eficiência e conformidade em operações corporativas, cadeias de suprimentos ou controle de qualidade."]
            },
            {
                texto: " Prefiro um ambiente de trabalho mais flexível, onde eu possa explorar novas abordagens e criar soluções fora da caixa.",
                afirmacao: [
                    "Você se adapta bem a ambientes inovadores e pode se destacar em áreas criativas, design ou empreendedorismo.",
                "Sua flexibilidade impulsiona inovações em agências de publicidade, desenvolvimento de jogos ou ventures de impacto social."]
            }
        ]
    }, 
     {
        enunciado: "Você se considera um líder ou um colaborador?",
        alternativas: [
            {
                texto: "Me vejo liderando, motivando a equipe e sendo responsável por guiar o grupo em direção aos objetivos.",
                afirmacao:[
                     "Seu perfil de liderança é perfeito para gestão de equipes, empresas ou consultoria. Você tem o potencial para coordenar projetos e liderar mudanças.",
                "Você inspira times em contextos como direção executiva, coaching empresarial ou liderança de ONGs."]
            },
            {
                texto: "Prefiro seguir orientações de um líder, contribuindo com meu trabalho para o sucesso coletivo.",
                afirmacao: [
                "Sua capacidade de ser um ótimo colaborador é ideal para funções técnicas ou especializadas, como engenharia, pesquisa ou TI.",
                "Você é a espinha dorsal de projetos complexos, atuando como especialista em cibersegurança, biologia molecular ou arquitetura de software."]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
     const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
     caixaAlternativas.appendChild(botaoAlternativas);
 }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
