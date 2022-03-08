var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

while(tentativas>0){
    var chute = parseInt(prompt("digite um o numero desejado"))

    if(chute == numeroSecreto){
    document.write("<h2> Você acertou </h2>")
      break }
    else if(chute>numeroSecreto){
     alert("O numero é menor")
      tentativas=tentativas-1}
    else if(chute<numeroSecreto){
     alert("O numero é maior")
      tentativas=tentativas-1 }
}
 if (chute != numeroSecreto)
  document.write("<h2>"+"As tentativas acabaram, o numero era "+ numeroSecreto +"</h2>")