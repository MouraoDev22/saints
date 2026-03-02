import { Saint } from '../types/Saint.js';

export async function getSaints(): Promise<Saint[]> {
    let resposta: Response = await fetch('../data.json');
    let data: Saint[] = await resposta.json();
    return data;
};