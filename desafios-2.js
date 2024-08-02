// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function calculaIMC(peso, altura) {
//         let imc = peso / (altura * altura);
//         return imc;
// }
// let resultadoIMC = calculaIMC(57 , 1.78);
// console.log(`O IMC é: ${resultadoIMC}`);
// ================================================================================================================
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function calcularFatorial (numero) {
//     if (numero == 0 || numero == 1) {
//         return 1;
//     } 

//     let fatorial = 1;
//     for(let i = 2; i<=numero; i++) {
//         fatorial = fatorial * i;
//     }

//     return fatorial;
// }
// let numero = 2;
// let resultadoFatorial = calcularFatorial(numero);
// console.log(`O fatorial do número ${numero} é: ${resultadoFatorial}`);
// ================================================================================================================
// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
// function conversorDolar(dolar) {
//     let real = dolar * 4.80;
//     return real;
// }
// let dolar = 9;
// let real = conversorDolar(dolar);
// console.log(`US$ ${dolar} equivale a R$ ${real}`);
// ================================================================================================================
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que 
// serão dadas como parâmetro.
// function mostrarAreaPerimetro(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);

//     console.log(`A área da sala é: ${area} metros quadrado`);
//     console.log(`O perímetro da sala é: ${perimetro} metros`);
// }
// let altura = 3;
// let largura = 5;
// mostrarAreaPerimetro(altura, largura);
// ================================================================================================================
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será 
// fornecido como parâmetro. Considere Pi = 3,14.
// function mostrarAreaPerimetroSalaCircular(raio) {
//     pi = 3.14;
//     let area = pi * (raio * raio);
//     let perimetro = 2 * pi * raio;
//     console.log(`A área da sala circular é: ${area} metros quadrados`);
//     console.log(`O perimetro da sala circular é: ${perimetro} metros`);
// }
// let raio = 4;
// mostrarAreaPerimetroSalaCircular(raio);
// ================================================================================================================
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function mostrarTabuada(numero) {
//     for(let i = 0; i<=10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero}x${i} = ${resultado}`);
//     }
// }
// let numero = 9;
// mostrarTabuada(numero);