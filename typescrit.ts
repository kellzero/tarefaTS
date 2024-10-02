const multiplicacao = ( a: number , b: number):number => a * b



class Saudacao {
    static dizoi(nome:string):string {
        return `${nome} disse oi`;
    }
}

console.log(multiplicacao(2, 4));
console.log(Saudacao.dizoi("pedro"));