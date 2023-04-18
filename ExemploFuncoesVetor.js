function mediaVetores(vetVetor){
    vlrMedia = 0;
    for (var i = 0; i < vetVetor.length; i++){
        vlrMedia += vetVetor[i];
    }
    vlrMedia = vlrMedia/vetVetor.length;
    return vlrMedia
}

var VetorTeste = [6,7,8,9];

vlrMedia = mediaVetores(VetorTeste);

console.log(vlrMedia);
//Resultado 7.5


const soma = function(num1,num2){ return num1 + num2};
console.log(soma(1,1));