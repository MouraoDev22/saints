export async function getSaints() {
    let resposta = await fetch('./data.json');
    let dados = await resposta.json();
    return dados;
}
;
