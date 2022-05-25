const tempoPreparo = function (food, tempoInformado) {
  console.log(
    `Voce informou o prato ${food} e tempo de ${tempoInformado} segundos`
  )
  let tempoPadrao = 0
  let mensagem = 'Prato inexistente'

  // Verificar se a comida existe
  // Regras:
  //  - Se existir, colocar o tempo padrao da comida na variavel tempoPadrao
  //  - Se a comida nao existir, nao vai entrar nos ifs e vai retornar a mensagem dizendo prato nao existe
  if (food === 'pipoca') {
    tempoPadrao = 10
  } else if (food === 'carne') {
    tempoPadrao = 15
  } else if (food === 'feijao') {
    tempoPadrao = 12
  } else if (food === 'macarrao' || food === 'brigadeiro') {
    tempoPadrao = 8
  } else {
    console.log(mensagem)
    return
  }

  //Se chegou aqui, a comida existe. Entao temos que comparar o tempo padrao da comida contra o tempo informado
  // Regras:
  // - Se tempo informado >= 2x tempoPadrao e tempo informado <= 3x tempoPadrao -> mensagem sinto cheiro de queimado!
  // - Se tempo informado < tempo paadrao -> mensagem "tempo insuficiente"
  // - Se tempo informado > 3x tempo padrao -> mensagem = “kabumm”
  if (tempoInformado === tempoPadrao) {
    mensagem = 'Prato pronto, bom apetite!!!'
  } else if (tempoInformado < tempoPadrao) {
    mensagem = 'tempo insuficiente'
  } else if (
    tempoInformado >= 2 * tempoPadrao &&
    tempoInformado < 3 * tempoPadrao
  ) {
    mensagem = 'A comida queimou.'
  } else if (tempoInformado >= 3 * tempoPadrao) {
    mensagem = 'kabumm'
  } else {
    mensagem = 'Nao faz parte do enunciado'
  }

  console.log(mensagem)
  return
}

tempoPreparo('arroz', 23.99)
