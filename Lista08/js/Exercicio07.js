var opcao, base, altura, area, ok = 1;
var formas = ['quadrado', 'retângulo', 'triângulo retângulo', 'círculo'];
opcao = prompt("Digite a opção desejada:\n[1] - Quadrado\n[2] - Retângulo\n[3] - Triângulo Retângulo\n[4] - Círculo ")

switch(parseInt(opcao)){
    case 1:
        base = prompt("Digite a base do quadrado: ");
        area = base * base;
        break;
    case 2:
        base = prompt("Digite a base do retângulo: ");
        altura = prompt("Digite o lado do retângulo: ");
        area = base * altura;
        break;
    case 3:
        base = prompt("Digite a base do triângulo: ");
        altura = prompt("Digite a altura do triângulo");
        area = (base * altura) / 2;
        break;
    case 4:
        base = prompt("Digite o raio do círculo");
        area = 3.14 * (base * base);
        break;
    default:
        alert("Opção inexistente!");
        ok = 0
}
if(ok == 1){
    alert("A área do " + formas[(parseInt(opcao) - 1 )] + " é: " + area);
}