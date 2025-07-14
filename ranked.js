let venceu = 1000
let perdeu = 478
function ranked(){
    if (venceu >= perdeu){
        resultado = venceu - perdeu;
        console.log("média de vitórias:", resultado);
    }
    else{
        resultado = perdeu - venceu;
        console.log("média de vitórias:", resultado);
    }
    return resultado;  
}
function clasificacao(resultado){
    console.log("Verificaremos agora em qual nivel de heroi você se encontra:")
    if (resultado <= 10) {
        console.log("FERRO");
        return "FERRO";
    } else if (resultado >= 11 && resultado <= 20) {
        console.log("BRONZE");
        return "BRONZE";
    } else if (resultado >= 21 && resultado <= 50) {
        console.log("PRATA");
        return "PRATA";
    } else if (resultado >= 51 && resultado <= 80) {
        console.log("OURO");
        return "OURO";
    } else if (resultado >= 81 && resultado <= 90) {
        console.log("DIAMANTE");
        return "DIAMANTE";
    } else if (resultado >= 91 && resultado <= 100) {
        console.log("LENDÁRIO");
        return "LENDÁRIO";
    } else {
        console.log("IMORTAL");
        return "IMORTAL";
    }
}
let resultadoRanked = ranked();
let nivel = clasificacao(resultadoRanked);
console.log(
    "Meus parabéns seu HEROI possui uma média de vitórias de "+ 
    resultadoRanked + 
    " em sua campanha e esta atualmente no nivel "+ 
    nivel + 
    "."
     );
