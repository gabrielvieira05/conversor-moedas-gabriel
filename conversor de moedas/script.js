const taxas = {
  BRL: { USD: 0.20, EUR: 0.18, BRL: 1 },
  USD: { BRL: 5.00, EUR: 0.91, USD: 1 },
  EUR: { BRL: 5.56, USD: 1.1, EUR: 1 }
};

const valorInput = document.getElementById("valor");
const moedaOrigem = document.getElementById("moedaOrigem");
const moedaDestino = document.getElementById("moedaDestino");
const resultado = document.getElementById("resultado");
const btnConverter = document.getElementById("converter");
const form = document.getElementById("form-conversor");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = parseFloat(valorInput.value);
  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Digite um valor válido!";
    resultado.className = "error";
    return;
  }
  const origem = moedaOrigem.value;
  const destino = moedaDestino.value;

  if (origem === destino) {
    resultado.textContent = "Escolha moedas diferentes!";
    resultado.className = "error";
    return;
  }
  resultado.className = "";
  const taxa = taxas[origem][destino];
  const convertido = (valor * taxa).toFixed(2);

  resultado.textContent =
    `${valor} ${origem === "BRL" ? "BRL (Real)" : origem === "USD" ? "USD (Dólar)" : "EUR (Euro)"} = ` +
    `${convertido} ${destino === "BRL" ? "BRL (Real)" : destino === "USD" ? "USD (Dólar)" : "EUR (Euro)"}`;
});
