var A, B, C, first, second, third;

A = prompt("Primeiro valor: ");
B = prompt("Segundo valor: ");
C = prompt("Terceiro valor: ");

if(A > B & A > C){
    first = A;
    if(B > C){
        second = B;
        third = C;
    }else{
        second = C;
        third = B;
    }
}
else if(B > A & B > C){
    first = B;
    if(A > C){
        second = A;
        third = C;
    }else{
        second = C;
        third = A;
    }
}
else{
    first = C;
    if(A > B){
        second = A;
        third = B;
    }
    else{
        second = B;
        third = A;
    }
}


alert("Valores em ordem crescente: \n" + first + "\n" + second + "\n" + third);
