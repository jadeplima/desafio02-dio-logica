function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;


if (vitorias < 10) {
    Nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Platina";
} else if (vitorias >= 90 && vitorias <= 100) {
    nivel = "Diamante";
} else if (vitorias >= 100 && vitorias <= 110) {
    nivel = "Ascendente";
} else if (vitorias >= 110 && vitorias <= 120) {
    nivel = "Imortal";
} else  { (vitorias >= 120 && vitorias <= 130) 
    nivel = "Radiante";
}

    return { saldoVitorias, nivel};

}

const vitorias = 110;
const derrotas = 20;

const resultado = calcularNivel(vitorias, derrotas);
console.log(`O heroi tem saldo de ${resultado.saldoVitorias} esta no nivel de ${resultado.nivel}`);