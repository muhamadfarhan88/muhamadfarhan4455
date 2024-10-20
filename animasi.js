(function() {
    const texts = ["Layanan Aqiqah", "Layanan Catering", "Layanan Qurban"];
    let currentIndex = 0;
    const textElement = document.getElementById('text-typed');
  
    function updateText() {
      textElement.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
    }
  
    // Inicia a animação após o carregamento do DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startAnimation);
    } else {
      startAnimation();
    }
  
    function startAnimation() {
      updateText(); // Atualiza imediatamente para o primeiro texto
      setInterval(updateText, 3000); // Muda o texto a cada 3 segundos
    }
  })();