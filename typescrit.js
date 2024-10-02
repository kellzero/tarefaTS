"use strict";
const multiplicacao = (a, b) => a * b;
class Saudacao {
    static dizoi(nome) {
        return `${nome} disse oi`;
    }
}
console.log(multiplicacao(2, 4));
console.log(Saudacao.dizoi("pedro"));
