var A, B, C, D, maior, menor;

A = prompt("Digite o primeiro valor: ");
B = prompt("Digite o segundo valor: ");
C = prompt("Digite o terceiro valor: ");
D = prompt("Digite o quarto valor: ");

maior = A;
if(B > maior){
    maior = B;
}
if(C > maior){
    maior = C;
}
if (D > maior){
    maior = D;
}

menor = A;
if(B < menor){
    menor = B;
}
if(C < menor){
    menor = C;
}
if(D < menor){
    menor = D;
}




alert("Maior valor: " + maior + "\nMenor valor: " + menor + "\nMédia dos 4 valores: " + (((parseInt(A) + parseInt(B) + parseInt(C) + parseInt(D) / 4))));