function calcular() {
  var precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
  var precoGasolina = parseFloat(
    document.getElementById("precoGasolina").value
  );

  if (isNaN(precoEtanol) || isNaN(precoGasolina)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  // Leve em consideração que o rendimento da gasolina é 70% maior do que o etanol
  var rendimentoGasolina = 0.7;
  var custoEtanol = precoEtanol;
  var custoGasolina = precoGasolina * rendimentoGasolina;

  var abastecerCom = "Gasolina";

  if (custoEtanol < custoGasolina) {
    abastecerCom = "Etanol";
  }

  document.getElementById("resultado").innerHTML =
    "Abasteça com " + abastecerCom;
}
