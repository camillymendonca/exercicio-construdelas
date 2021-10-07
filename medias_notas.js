nomeDoAluno = prompt("Digite o seu nome")
notas = prompt("Quais foram as suas três notas?").split(",")
media = (parseFloat(notas[0])+ parseFloat(notas[1]) + parseFloat(notas[02])) / 3
if (media >= 5) {
    alert ("Você foi aprovado!")
} else {
    alert ("Você foi reprovado!")
}