"use strict";
const logo = document.querySelector('.cabecalho__logo');
if (!logo)
    throw new Error('HTMLImageElement(logo) não encontrado!');
const mscSoldierDream = new Audio('./assets/audio/soldier-dream.mp3');
if (!mscSoldierDream)
    throw new Error('HTMLAudioElement(mscSoldierDream) não encontrado!');
mscSoldierDream.loop = true;
mscSoldierDream.volume = 0.25;
logo.addEventListener('click', () => {
    if (mscSoldierDream.paused) {
        return mscSoldierDream.play();
    }
    else {
        return mscSoldierDream.pause();
    }
    ;
});
