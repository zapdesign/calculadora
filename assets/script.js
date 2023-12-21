function insert(numero, operador){
    let contaVisual = document.getElementById('calculo-visual');
    let ultimoCaractere = contaVisual.innerText.slice(-1);
    let numeros = [0,1,2,3,4,5,6,7,8,9]


    if(operador != "" && ultimoCaractere != ''){

        for(let i = 0; i <= 9; i++){            
        if(ultimoCaractere == numeros[i]){

            contaVisual.innerText += operador 
            break
        }
    }
    }else{

        contaVisual.innerText += numero

    }
}   

function limpar(){

    document.getElementById('calculo-visual').innerText = ''
    document.getElementById('calculo').innerText = ''

    contaVisual.style.height ='24px'
    resultado.style.height = '48px'
    
}

function backspace(){

    let visualTeste = document.getElementById('calculo-visual');
    let texto = visualTeste.innerText;
    visualTeste.innerText = texto.slice(0, -1);
  
}

function results(){
    let contaVisual = document.getElementById('calculo-visual');
    let resultado = document.getElementById('calculo');

    let ultimoCaractere = contaVisual.innerText.slice(-1);

    let operadores = ['/', '*', '+', '.']

    let isOperador = false;

    for(let i = 0; i < operadores.length; i++){

        if(ultimoCaractere === operadores[i] && ultimoCaractere != ''){
            isOperador = true;
            break
        }
    }

    if(!isOperador){

        resultadoFinal = eval(contaVisual.innerText);

        contaVisual.style.height ='auto'
        resultado.style.height ='auto'

        if(resultadoFinal === Infinity){
            resultado.innerText = 0
        }else{

            resultado.innerText = resultadoFinal
        }
        
    }else{

    }


    

}