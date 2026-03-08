import { Saint } from '../types/Saint.js';

export async function getSaints(): Promise<Saint[]> {
    try {
        const response: Response = await fetch('../../docs/saints.json');
        const data: Saint[] = await response.json();
        return data;
    } catch (error: unknown) {
        console.error('Erro ao buscar os dados:', error);
        return [];
    };
};