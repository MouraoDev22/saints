const logo: HTMLImageElement | null = document.querySelector<HTMLImageElement>('.cabecalho__logo');
if (!logo) throw new Error('HTMLImageElement(logo) não encontrado!');

const mscBlueDream: HTMLAudioElement | null = new Audio('./assets/audio/blue-dream.mp3');
if (!mscBlueDream) throw new Error('HTMLAudioElement(mscBlueDream) não encontrado!');
mscBlueDream.loop = true;
mscBlueDream.volume = 0.25;

logo.addEventListener('click', () => {
    if (mscBlueDream.paused) {
        return mscBlueDream.play();
    } else {
        return mscBlueDream.pause();
    };
});