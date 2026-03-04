export async function getSaints() {
    let resposta = await fetch('../../docs/data.json');
    let dados = await resposta.json();
    return dados;
}
;
