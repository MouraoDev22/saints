export async function getSaints() {
    try {
        const response = await fetch('../../docs/saints.json');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Erro ao buscar os dados:', error);
        return [];
    }
    ;
}
;
