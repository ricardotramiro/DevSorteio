document.addEventListener('DOMContentLoaded', () => {
  function generateNumber() {
    // Pegando os valores inseridos nos inputs
    const min = parseInt(document.querySelector(".input-min").value);
    const max = parseInt(document.querySelector(".input-max").value);
    const resultElement = document.querySelector(".result");

    // Verificando se os valores inseridos são números
    if (isNaN(min) || isNaN(max)) {
      alert("Por favor, insira números válidos nos campos.");
      return; // Impede a execução caso os valores não sejam números
    }

    // Verificando se o valor mínimo é menor que o máximo
    if (min >= max) {
      alert("O valor mínimo tem que ser menor que o valor máximo");
      return; // Impede a execução caso o valor mínimo seja maior ou igual ao máximo
    }

    // Gerando o número aleatório
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Mostrando o resultado no console
    console.log(result);

    // Atualizando a página com o resultado
    resultElement.innerText = `Resultado: ${result}`;
  }

  // Atribuindo o evento ao botão
  document.querySelector("button").addEventListener("click", generateNumber);
});



