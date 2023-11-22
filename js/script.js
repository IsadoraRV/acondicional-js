 
 function identificarFaixaEtaria(idade) {
    if (idade >= 0 && idade < 15) {
      return "Criança";
    } else if (idade >= 15 && idade < 30) {
      return "Jovem";
    } else if (idade >= 30 && idade < 60) {
      return "Adulto";
    } else if (idade >= 60) {
      return "Idoso";
    } else {
      return "Idade inválida";
    }
  }

  // Solicitar a idade ao usuário
  var idadeUsuario = prompt("Informe sua idade:");

  // Converter a entrada do usuário para um número
  idadeUsuario = parseInt(idadeUsuario);

  // Verificar se a entrada é um número válido
  if (isNaN(idadeUsuario)) {
    alert("Por favor, informe uma idade válida.");
  } else {
    // Chamar a função e exibir o resultado
    var faixaEtaria = identificarFaixaEtaria(idadeUsuario);
    alert("Você é " + faixaEtaria + ".");
  }