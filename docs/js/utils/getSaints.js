export async function getSaints() {
    let resposta = await fetch('../data.json');
    let data = await resposta.json();
    return data;
}
;
