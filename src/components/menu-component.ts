const botoes: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll<HTMLButtonElement>('.personagem__btn');
if (!botoes) throw new Error('HTMLButtonElement(botoes) não encontrado!');

for (const botao of botoes) {
    botao.addEventListener('click', () => {
        alterarClasseBtn(botao);
    });
};

function alterarClasseBtn(botao: HTMLButtonElement): void {
    if (!botoes) throw new Error('HTMLButtonElement(botoes) não encontrado!');
    
    for (const btn of botoes) {
        btn.classList.remove('active');
    };

    botao.classList.add('active');
    return;
};