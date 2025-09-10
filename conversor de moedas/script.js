const taxas = {
  BRL: { USD: 0.20, EUR: 0.18, BRL: 1 },
  USD: { BRL: 5.1, EUR: 0.91, USD: 1 },
  EUR: { BRL: 5.6, USD: 1.1, EUR: 1 }
};

const valorInput = document.getElementById("valor");
const moedaOrigem = document.getElementById("moedaOrigem");
const moedaDestino = document.getElementById("moedaDestino");
const resultado = document.getElementById("resultado");
const btnConverter = document.getElementById("converter");

btnConverter.addEventListener("click", () => {
  const valor = parseFloat(valorInput.value);
  if (isNaN(valor)) {
    resultado.textContent = "Digite um valor válido!";
    return;
  }

  const origem = moedaOrigem.value;
  const destino = moedaDestino.value;
  const taxa = taxas[origem][destino];

  const convertido = (valor * taxa).toFixed(2);
  resultado.textContent = `${valor} ${origem} = ${convertido} ${destino}`;
});
