var peso, altura, imc;

peso = prompt("Digite seu peso: \nEX: 57.3");
altura = prompt("Digite sua altura: \nEX: 1.66");

imc = peso / (altura * altura);

if(imc < 18.5){
    alert("Peso abaixo do normal");
}
else if(imc >= 18.5 & imc <= 24.9){
    alert("Peso ideal");
}
else if(imc >= 25 & imc <= 29.9){
    alert("Acima do peso");
}
else if(imc >= 30 & imc <= 34.9){
    alert("Obesidade Grau I");
}
else if(imc >= 35 & imc <= 40){
    alert("Obesidade Grau II");
}
else if(imc > 40){
    alert("Obesidade Grau III");
}
