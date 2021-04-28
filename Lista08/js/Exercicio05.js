var nome, num, rest;

nome = prompt("Informe seu nome: ");
num = prompt("Digite um número");

rest = num % 2;

if(rest == 0){
    alert(nome + " o número " + num + " é par");
}

if(rest == 1){
    alert(nome + " o número " + num + " é impar");
}
