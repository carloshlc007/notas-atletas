//--------------------------------------------------------------

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
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
//----------------------------------------------------------------

function validaNotas(notas){
    notas.sort(function(a, b) {
        return a - b;
    });
    notas.pop();
    notas.shift();
    return notas;
}

function somarNotas(notas){
    return notas.reduce((total, nota)=>{
        return total + nota;
    },0)
}

function calculaMedia(notas){
    return somarNotas(validaNotas(notas))/notas.length;
}

for (let i = 0; i < atletas.length; i++) {
    
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${atletas[i].notas.join(", ")}`);
    console.log(`Média Válida ${calculaMedia(atletas[i].notas)}`);
    console.log(" ");
    
}

