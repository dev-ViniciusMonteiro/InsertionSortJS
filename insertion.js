var vetorDesordenado  = [500,400,300,600,700,80,9000];
        
function insertion(vet,ini,fim) {//recebe o array , inicio e o fim
    for(var i = ini+1;i<fim;i++){//Varre o vetor da segunda posição em diante;
        var posicao = i//variavel da posicao inicial(2 posicao)
        while(posicao>0&&vet[posicao]<vet[posicao-1]){//Compara o valor que está sendo analisado com o valor anterior; 
            troca(vet,posicao,posicao-1)//troca as posicoes ;caso seja menor, troca os dois valores e compara novamente com o anterior.
            posicao--//volta para a posicao inicial se trocou a posicao(estava na -1)
        }
    }//caso seja maior, segue a análise para o próximo elemento não analisado do vetor.
    return vet//retorna um vetor!!!

}
function troca(vet,ini,fim){
    const x = vet[ini]
    const y = vet[fim]
    vet[ini] = y
    vet[fim] = x
}

function insertionInverso(vet,ini,fim) {
    for(var i = ini+1;i<fim;i++){
        var posicao = i
        while(posicao>0&&vet[posicao]>vet[posicao-1]){
            troca(vet,posicao,posicao-1)
            posicao--
            }
        }
    return vet

}
function trocai(vet,ini,fim){
    const x = vet[ini]
    const y = vet[fim]
    vet[ini] = y
    vet[fim] = x
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//geral randomico alheatorio
function geraAlheatorios(array,min,max,q){
    for(i=0;i<q;i++){
    array.push(getRandomIntInclusive(min, max))
    }
    return array
}


/*function teste1(){

const vetorOrdenado = insertion(vetorDesordenado, 0, vetorDesordenado.length);//cria um novo array ordenado apartir do desordenado
console.log(vetorOrdenado);
}
function teste2(){
const vetorOrdenado2 = insertionInverso(vetorDesordenado, 0, vetorDesordenado.length);//array maior para menor apartir do desordenado
console.log(vetorOrdenado2);
}
function teste3(){
const arrayinsertion = insertion(geraAlheatorios(1,1000,1000),0,1000)//uniao de tudo ordenado menor para maior
console.log(arrayinsertion)
}*/




var capturado = []
function capturar(){
    capturado.push(document.getElementById('valor').value)
    document.getElementById('valorDigitado').innerHTML = "["+capturado+"]";
}

function ordenar(){
    const vetorOrdenadocapturado = insertion(capturado, 0, capturado.length);//cria um novo array ordenado apartir do desordenado
    document.getElementById('valorDigitadoordenado').innerHTML = "Menor para maior:  ["+vetorOrdenadocapturado+"]"
    const vetorOrdenadocapturado2 = insertionInverso(capturado, 0, capturado.length);//array maior para menor apartir do desordenado
    document.getElementById('valorDigitadoordenadocontrario').innerHTML = "Maior para menor:  ["+vetorOrdenadocapturado2+"]"
}

function zerar(){
    while(capturado.length){ capturado.pop()}
}

var quantosc = 0;
var caparray = []
function capturar2(){
    while(caparray.length){ caparray.pop()}
    caparray.shift(caparray.length)
    quantosc=document.getElementById('valor2').value
    geraAlheatorios(caparray,1,1000000,quantosc)
    document.getElementById('valorDigitado2').innerHTML = "array criado:  "+caparray
}
function ordenar2(){
    const inicio = new Date().getTime()
    

    var caparrayordenado = insertion(caparray,0,caparray.length)
    document.getElementById('valorDigitadoordenado2').innerHTML = "Menor para maior:  ["+caparrayordenado+"]"
    var caparraycontrario = insertionInverso(caparray,0,caparray.length)
    document.getElementById('valorcontrario2').innerHTML = "Maior para menor:  ["+caparraycontrario+"]"

    const total = new Date().getTime() - inicio
    document.getElementById('tempo').innerHTML = "Tempo de:"+total+"(ms) - Para ordernar nos dois sentidos!!!"
    
}


