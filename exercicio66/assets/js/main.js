// Função principal que configura o cronômetro
function relogio() {
    // Função que converte segundos em uma string de hora no formato HH:MM:SS
    function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000); // Cria um objeto Date com os segundos convertidos para milissegundos
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,   // Formato de 24 horas
        timeZone: 'UTC'  // Ajusta para o fuso horário UTC
      });
    }
  
    // Seleciona o elemento do DOM com a classe 'relogio'
    const relogio = document.querySelector('.relogio');
    let segundos = 0;   // Contador de segundos
    let timer;          // Variável que armazenará o identificador do setInterval
  
    // Função que inicia o cronômetro
    function iniciaRelogio() {
      timer = setInterval(function() {
        segundos++;  // Incrementa o contador de segundos
        relogio.innerHTML = criaHoraDosSegundos(segundos);  // Atualiza o display do cronômetro
      }, 1000); // Executa a cada 1000 milissegundos (1 segundo)
    }
  
    // Adiciona um ouvinte de eventos para cliques no documento
    document.addEventListener('click', function(e) {
      const el = e.target;  // Obtém o elemento que foi clicado
  
      // Se o elemento clicado tiver a classe 'zerar'
      if (el.classList.contains('zerar')) {
        clearInterval(timer);  // Para o cronômetro
        relogio.innerHTML = '00:00:00';  // Reseta o display do cronômetro
        relogio.classList.remove('pausado');  // Remove a classe 'pausado' do display
        segundos = 0;  // Reseta o contador de segundos
      }
  
      // Se o elemento clicado tiver a classe 'iniciar'
      if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');  // Remove a classe 'pausado' do display
        clearInterval(timer);  // Para o cronômetro existente (se houver)
        iniciaRelogio();  // Inicia o cronômetro
      }
  
      // Se o elemento clicado tiver a classe 'pausar'
      if (el.classList.contains('pausar')) {
        clearInterval(timer);  // Para o cronômetro
        relogio.classList.add('pausado');  // Adiciona a classe 'pausado' ao display
      }
    });
  }
  
  // Chama a função 'relogio' para iniciar a configuração do cronômetro e definir os event listeners
  relogio();
  