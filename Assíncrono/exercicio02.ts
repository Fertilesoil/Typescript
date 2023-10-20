interface Usuario {
    nome: string;
    data_nascimento: any;
    senha: string;
    email: string;
    sexo: string;
}

const usuario01: Usuario = {
    nome: "Valter Aquino",
    data_nascimento: '1/12/1996',
    senha: "cavalinho30",
    email: "aquinho@email.com",
    sexo: "Masculino"
}

const usuario02: Usuario = {
    nome: "Romilda Rotter",
    data_nascimento: '9/7/2014',
    senha: "jUjUbaAt00mica",
    email: "flint@flint.com",
    sexo: "Feminino"
}

console.log(usuario01, usuario02)