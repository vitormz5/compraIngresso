function comprar() {
  // recupera o tipo de ingresso selecionado
  let tipo = document.getElementById("tipo-ingresso");
  // recupera a quantidade inserida
  let qtd = parseInt(document.getElementById("qtd").value);

  // condicional para executar a função do tipo escolhido
  if (tipo.value == "pista") {
    comprarPista(qtd);
  } else if (tipo.value == "inferior") {
    comprarInferior(qtd);
  } else if (tipo.value == "superior") {
    comprarSuperior(qtd);
  }
}

// função que pega a variável qtd como parâmetro
function comprarPista(qtd) {
  //recupera a quantidade de ingressos que temos de Pista
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  // se o número inserido for maior que os ingressos disponíveis, acusa erro
  if (qtd > qtdPista) {
    alert("Quantidade indisponível para Pista!");
  } else {
    // se o número inserido for menor, realiza a subtração do qtdPista
    qtdPista = qtdPista - qtd;
    //recupera o textContent que está no qtd-pista e define o novo valor para qtdPista
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso!");
  }
}

// Para as demais opções de compra, são as mesmas funções, somente mudam as variáveis acessadas

function comprarInferior(qtd) {
  let qtdInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );
  if (qtd > qtdInferior) {
    alert("Quantidade indisponível para Cadeira Inferior!");
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  if (qtd > qtdSuperior) {
    alert("Quantidade indisponível para Cadeira Superior!");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso!");
  }
}
