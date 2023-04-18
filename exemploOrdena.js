function OrdenaVetor(vetVetor,blCrescente){
    var aux = 0;
    var troca = 0;
    if (blCrescente) {
        for(var i=0; i<vetVetor.length; i = i + 1){
            aux=i;
            for(var j=i+1; j< vetVetor.length; j = j + 1){
                if(vetVetor[j] < vetVetor[aux])
                    aux=j;
            }
            troca = vetVetor[aux];
            vetVetor[aux]=vetVetor[i];
            vetVetor[i]=troca;        
        }
    } else{
        for(var i=0; i<vetVetor.length; i = i + 1){
            aux=i;
            for(var j=i+1; j< vetVetor.length; j = j + 1){
                if(vetVetor[j] > vetVetor[aux])
                    aux=j;
            }
            troca = vetVetor[aux];
            vetVetor[aux]=vetVetor[i];
            vetVetor[i]=troca;        
        }
    }
    return vetVetor;
}

var vetor = [5,3,4,2,1];
vetor = OrdenaVetor(vetor,1);
console.log(vetor);
vetor = OrdenaVetor(vetor,0);
console.log(vetor);