
const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option');
const resultContainer = document.getElementById('result');
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');
const characterDescription = document.getElementById('characterDescription');
const restartBtn = document.getElementById('restartBtn');

// Perguntas e Pontuação
let currentQuestionIndex = 0;
let scores = [0, 0]; // Índice 0 para Personagem A, Índice 1 para Personagem B

const questions = [
    {
        question: 'Qual é o seu passatempo favorito?',
        options: ['Ler livros de magia', 'Jogar esportes (quadribol)'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Qual é seu tipo de aventura favorita?',
        options: ['Explorar masmorras', 'Participar de torneios'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Qual poder você gostaria de ter?',
        options: ['Telecinese', 'Superforça'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Como você prefere resolver problemas?',
        options: ['Com inteligência', 'Com ação rápida'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Qual seria seu meio de transporte?',
        options: ['Dragão', 'Motocicleta voadora'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Qual é seu lugar favorito?',
        options: ['Biblioteca antiga', 'Estádio de quadribol'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Como você lida com desafios?',
        options: ['Com paciência', 'Com coragem'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Quem você escolheria como aliado?',
        options: ['Um sábio ancião', 'Um guerreiro forte'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Como você se diverte?',
        options: ['Jogando jogos de estratégia', 'Praticando esportes radicais'],
        scores: [ [3, 1], [1, 3] ]
    },
    {
        question: 'Qual é sua maior qualidade?',
        options: ['Sabedoria', 'Determinação'],
        scores: [ [3, 1], [1, 3] ]
    }
];

const characters = [
    {
        name: 'Personagem A',
        description: 'Você é o sábio e poderoso mago do universo XPTO.',
        image: 'img/personagem_a.webp'
    },
    {
        name: 'Personagem B',
        description: 'Você é o destemido e atlético campeão do universo XPTO.',
        image: 'img/personagem_b.webp'
    }
];


function startQuiz() {
    startBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => selectOption(index);
    });
}

function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedScores = currentQuestion.scores[optionIndex];

    scores[0] += selectedScores[0]; // Personagem A
    scores[1] += selectedScores[1]; // Personagem B

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const characterIndex = scores[0] > scores[1] ? 0 : 1;
    const character = characters[characterIndex];

    characterImage.src = character.image;
    characterName.textContent = character.name;
    characterDescription.textContent = character.description;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = [0, 0];
    resultContainer.classList.add('hidden');
    startBtn.classList.remove('hidden');
}


startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
