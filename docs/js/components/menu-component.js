import { alterarPersonagem } from './saints-component.js';
const botoes = document.querySelectorAll('.personagem__btn');
if (!botoes)
    throw new Error('NodeListOf<HTMLButtonElement>(botoes) não encontrado!');
for (const botao of botoes) {
    botao.addEventListener('click', () => {
        alterarClasseBtn(botao);
        alterarPersonagem(botao.id);
        return;
    });
}
;
function alterarClasseBtn(botao) {
    if (!botoes)
        throw new Error('HTMLButtonElement(botoes) não encontrado!');
    for (const btn of botoes) {
        btn.classList.remove('active');
    }
    ;
    botao.classList.add('active');
    return;
}
;
