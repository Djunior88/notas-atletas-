let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(objAtletas) {

  for (let i = 0; i < objAtletas.length; i++) {

    let nome = objAtletas[i].nome;
    let notas = objAtletas[i].notas;

    // ordenando as notas do menor para o maior
    notas = notas.sort(function(a, b) {
      return a - b;
    });

    // tirando a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // somando as notas do meio
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma = soma + nota;
    });

    // calculando a media
    let media = soma / notasComputadas.length;

    // mostrando o resultado
    console.log("Atleta: " + nome);
    console.log("Notas Obtidas: " + notas);
    console.log("Média Válida: " + media);
    console.log("");
  }
}

calcularMediaAtletas(atletas);