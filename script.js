// Base de dados para a troca de abas interactiva
const conteudos = {
    direto: {
        titulo: "Sistema de Plantio Direto (SPD)",
        texto: "Evita o revolvimento do solo através de maquinários pesados. Ao semear diretamente sobre a palhada da cultura anterior, o solo mantém sua umidade natural, reduz drasticamente o risco de erosões provocadas pelo vento ou chuva e impede a liberação excessiva de CO2 na atmosfera, agindo como um escudo ecológico."
    },
    ilpf: {
        titulo: "Integração Lavoura-Pecuária-Floresta (ILPF)",
        texto: "Uma revolução no uso do espaço. Esse sistema consorcia atividades agrícolas, pecuárias e florestais em uma mesma área. O plantio de árvores gera sombra e bem-estar para o gado, enquanto as raízes estruturam o solo, permitindo produzir grãos, madeira e carne de forma integrada e neutra em carbono."
    },
    bio: {
        titulo: "Bioinsumos e Defensivos Biológicos",
        texto: "Utilização inteligente de microrganismos, fungos benéficos e insetos predadores para combater pragas e nutrir plantações de qualquer escala. Reduz a dependência de insumos químicos tradicionais, regenera a vida microbiana do solo e protege espécies polinizadoras essenciais, como as abelhas."
    }
};

// Função responsável por gerenciar a mudança visual e de texto das abas
function alterarConteudo(tipo) {
    const caixaConteudo = document.getElementById('conteudo-sustentavel');
    
    // Atualiza o texto dinamicamente
    caixaConteudo.innerHTML = `
        <h3>${conteudos[tipo].titulo}</h3>
        <p>${conteudos[tipo].texto}</p>
    `;

    // Remove o destaque visual ('active') de todos os botões de uma vez
    const botoes = document.querySelectorAll('.tab-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    // Adiciona o destaque visual ao botão clicado no momento
    event.currentTarget.classList.add('active');
}
