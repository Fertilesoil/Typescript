interface Produto {
    nome: string;
    quantidade: number;
    valor: number;
}

const Perfume: Produto = {
    nome: 'Sensation',
    quantidade: 59,
    valor: 127.99
}

const Doce: Produto = {
    nome: 'Carolina',
    quantidade: 420,
    valor: 75.40
}

const a1 = [Perfume];
const a2 = [Doce];
const concatenadoSpread = [...a1, ...a2];

console.log(concatenadoSpread)
