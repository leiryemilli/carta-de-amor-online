// === CORRIGIDO SEM ERROS ===

// Corações caindo
const containerCoracoes = document.getElementById('coracoes');
const quantidadeCoracoes = 30; // ✨ Faltava definir essa variável!

// Adiciona animações
const estiloAnimacoes = document.createElement('style');
estiloAnimacoes.textContent = `
@keyframes cair {
  0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}
@keyframes pular {
  0% { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(-80px); opacity: 0; }
}
`; // ✨ Faltava o ` aqui no início!
document.head.appendChild(estiloAnimacoes);

// Gerar corações
for (let i = 0; i < quantidadeCoracoes; i++) {
  const coracao = document.createElement('div');
  coracao.textContent = '❤️';
  coracao.style.position = 'absolute';
  coracao.style.left = (Math.random() * 100) + '%'; // ✨ Sem $ aqui!
  coracao.style.top = '-20px';
  coracao.style.fontSize = (15 + Math.random() * 25) + 'px';
  coracao.style.opacity = 0.4 + Math.random() * 0.6;
  coracao.style.animation = 'cair ' + (4 + Math.random() * 6) + 's linear infinite';
  coracao.style.animationDelay = (Math.random() * 5) + 's';
  containerCoracoes.appendChild(coracao);
}

// === BOTÃO E MENSAGEM ===
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
  mensagem.classList.toggle('mensagem-visivel');
  
  // Coração que pula
  const coracaoPulo = document.createElement('div');
  coracaoPulo.textContent = '❤️';
  coracaoPulo.style.position = 'absolute';
  coracaoPulo.style.left = '50%';
  coracaoPulo.style.bottom = '20px';
  coracaoPulo.style.fontSize = '40px';
  coracaoPulo.style.transform = 'translateX(-50%)';
  coracaoPulo.style.animation = 'pular 1s ease-out forwards';
  document.body.appendChild(coracaoPulo);

  setTimeout(() => { coracaoPulo.remove(); }, 1000);
});