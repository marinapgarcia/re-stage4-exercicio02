let estudantes = [
  { nome: "Ana", nota1: 5, nota2: 6 },
  { nome: "João", nota1: 6, nota2: 9 },
  { nome: "Maria", nota1: 7, nota2: 7.5 }
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2
}

function verificarSituacao(media) {
  return media >= 7 ? "Aprovado" : "Reprovado";
}

estudantes.forEach(function(aluno) {
  let media = calcularMedia(aluno.nota1, aluno.nota2)
  let situacao = verificarSituacao(media)
  alert("Aluno: " + aluno.nome + "\nMédia: " + media.toFixed(2) + "\nSituação: " + situacao)
})