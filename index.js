// Dados do faturamento mensal
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total do faturamento
let total = 0;
for (let estado in faturamento) {
    total += faturamento[estado];
}

// Calcula e exibe o percentual de cada estado
console.log("Percentual de representação por estado:");
for (let estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
