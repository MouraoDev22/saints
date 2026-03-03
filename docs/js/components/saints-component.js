import { getSaints } from '../utils/getSaints.js';
const mainSaints = document.querySelector('.apresentacao-personagem');
if (!mainSaints)
    throw new Error('HTMLElement(mainSaints) não encontrado!');
let saints = await getSaints();
export function alterarPersonagem(idBtn) {
    if (!mainSaints)
        throw new Error('HTMLElement(mainSaints) não encontrado!');
    for (const saint of saints) {
        if (saint.nome === idBtn) {
            mainSaints.innerHTML = `
            <section class="apresentacao-personagem__info">
                <h2 class="info__nome">${saint.nome}</h2>
                <p class="info__descricao">${saint.descricao}</p>
            </section>
            <img src="${saint.imagem}" alt="${saint.nome}" class="apresentacao-personagem__img">
            `;
        }
        ;
    }
    ;
    return;
}
;
