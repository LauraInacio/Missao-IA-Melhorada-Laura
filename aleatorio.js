const nomes = ["Laura", "Igor", "Maria", "Eduardo", "Nathili", "Emerson", "Andreia", "Zelia"];

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
