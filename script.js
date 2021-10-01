var display = document.getElementById('display');

let operador = ['-', '+', '*', '/'];
//Função de adicionar o número
const addNumber = (numberCurrent) => {
    let numberPrevious = document.getElementById('display').value;
    document.getElementById('display').value = numberPrevious + numberCurrent;
}

const add = (value) => {
    let numberPrevious = document.getElementById('display').value;

    if (operador.indexOf(value) > -1) {
        let ultimo = numberPrevious.substring(numberPrevious.length - 1);
        if (ultimo == value) {
            return;
        }
        if (operador.indexOf(ultimo) > -1) {
            numberPrevious = numberPrevious.substring(0, numberPrevious.length - 1);
        }
    }
    document.getElementById('display').value = numberPrevious + value;
}


const calcular = () => {

    let result = document.getElementById('display').value;
    result = result.split(/(\d+)/);
    //Apliquei o filter para remover os elementos vazios
    let resultArray = result.filter((x) => x);

    //Percorre o vetor em todo os seus elementos
    for (let i = 0; i < resultArray.length; i++) {
        //Se dentro do array incluir operador * ou o operador /
        if (resultArray[i] == "*" || resultArray[i] == "/") {
            //Se na posição atual do array conter o operador *
            if (resultArray[i] == "*") {
                //pega o que na posição anterior dele e multiplica pela posição posterior ao operador
                resultArray[i - 1] = parseFloat(resultArray[i - 1]) * parseFloat(resultArray[i + 1]);
                //Se dentro do array incluir operador * ou o operador /
            }
            if (resultArray[i] == "/") {
                //pega o que na posição anterior dele e multiplica pela posição posterior ao operador
                resultArray[i - 1] = parseFloat(resultArray[i - 1]) / parseFloat(resultArray[i + 1]);
            }

            resultArray.splice(i, 2);
            //Zerando a expressão
            i--;
            

        }
    }

    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == "+" || resultArray[i] == "-") {
            if (resultArray[i] == "+") {
                resultArray[i - 1] = parseFloat(resultArray[i - 1]) + parseFloat(resultArray[i + 1]);
            }
            else {
                    resultArray[i - 1] = parseFloat(resultArray[i - 1]) - parseFloat(resultArray[i + 1]);
            }
            //altera minha lista depois retorna o contéudo dela
            resultArray.splice(i, 2);
            i--;

        }
    }


    document.getElementById('display').value = resultArray[0];
}

const existeDecimal = () =>{
    document.getElementById('display').value.indexOf(',') != -1;
}

const existeValue = () =>{
    document.getElementById('display').value.length > 0;
}

//Funcão que adiciona o decimal
const addDecimal = (decimal) => {
    let point = document.getElementById('display').value;
    
    document.getElementById('display').value = point + decimal;

}

//Função de limpar apenas o ultimo elemento
const backspace = () => {

    let result = document.getElementById('display').value;
    document.getElementById('display').value = result.substring(0, result.length - 1);
}
document.getElementById('limpar').addEventListener('click', backspace)

//Função que limpa o display inteiro
const clearAll = () => document.getElementById('display').value = "";
document.getElementById('limparDisplay').addEventListener('click', clearAll);

// Mapaemento das teclas
const keyMaps = {
    '0': 'tecla0',
    '1': 'tecla1',
    '2': 'tecla2',
    '3': 'tecla3',
    '4': 'tecla4',
    '5': 'tecla5',
    '6': 'tecla6',
    '7': 'tecla7',
    '8': 'tecla8',
    '9': 'tecla9',
    '/': 'operadorDividir',
    '*': 'operdorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicao',
    '=': 'igual',
    ',': 'decimal',
    'Enter': 'igual',
    'Escape': 'limparDisplay',
    'Backspace': 'limpar',

}

const clickKeybord = (event) => {
    const key = event.key;
    //O Object extrai do dicionário apenas as chaves que contem nele
    const keyAllwoed = () => Object.keys(keyMaps).indexOf(key) != -1;
    if (keyAllwoed()) document.getElementById(keyMaps[key]).click();
}

document.addEventListener('keydown', clickKeybord);

















/*
for (i = 0; i < result.length; i++) {
    if (result[3] == "*") {
        resultado = parseInt(result[0]) + (parseInt(result[2]) * parseInt(result[4]))
        document.getElementById('display').value = resultado;
    } else if (result[1] == "-") {
        resultado = parseInt(result[0]) - (parseInt(result[2]))
        document.getElementById('display').value = resultado;
        console.log(resultado)
    } else if (result[1] == "*") {
        resultado = parseInt(result[0]) * parseInt(result[2]);
        document.getElementById('display').value = resultado;
        console.log(resultado)
    } else if (result[1] == "/") {
        resultado = parseInt(result[0]) / parseInt(result[2]);
        document.getElementById('display').value = resultado;
        console.log(resultado)
    } else if(result[1] == "+"){
        resultado = parseInt(result[0]) + parseInt(result[2]);
        document.getElementById('display').value = resultado;
    }
} */