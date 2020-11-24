

let teste = [];
var leitorDeCSV = new FileReader();
window.onload = function init() {

    leitorDeCSV.onload = leCSV;
    const botao = document.querySelector('.executar');
    botao.addEventListener('click', resultadoFinal);


}
const fundoMips = document.querySelector('[data-modal="fundo"]')

function pegaCSV(inputFile) {
    var file = inputFile.files[0];
    leitorDeCSV.readAsText(file);
}

function leCSV(evt) {

    var fileArr = evt.target.result.split('\n');
    teste = Array.from(fileArr)

    var strDiv = '<table>';
    for (var i = 0; i < fileArr.length; i++) {
        strDiv += '<tr>';

        var fileLine = fileArr[i].split('.');
        for (var j = 0; j < fileLine.length; j++) {
            strDiv += '<td>' + fileLine[j].trim() + '</td>';
        }
        strDiv += '</tr>';
    }
    strDiv += '</table>';
    var CSVsaida = document.getElementById('CSVsaida');
    CSVsaida.innerHTML = strDiv;

    return teste
}
let pegaseparado = [];


//Retira o espaço e virgula e separa o vetor
const valorTratado = function () {
    let newValor = [];
    for (let i = 0; i < teste.length; i++) {
        newValor.push(teste[i].replace(/\s{2,}/g, ' ').replaceAll(',', '').replaceAll('(', ' ').replaceAll(')', '').split(" "));
    }
    return newValor;
}





function atribuirValorIntrucoes(valor) {
    // INSTRUÇÕES LOAD E STORE
    if (valor == 'lb') {
        return (32 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lh') {
        return (33 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lwl') {
        return (34 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lw') {
        return (35 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lbu') {
        return (36 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lhu') {
        return (37 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lwr') {
        return (38 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sb') {
        return (40 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sh') {
        return (41 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'swl') {
        return (42 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sw') {
        return (43 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'swr') {
        return (46 >>> 0).toString(2).padStart(6, "0");
    }

    // INSTRUÇÕES LÓGICAS E ARITMÉTICAS

    if (valor == 'add') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'addu') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sub') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'subu') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'and') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'or') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'xor') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'nor') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'slt') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sltu') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'addi') {
        return (8 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'addiu') {
        return (9 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'slti') {
        return (10 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sltiu') {
        return (11 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'andi') {
        return (12 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'ori') {
        return (13 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'xori') {
        return (14 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'lui') {
        return (15 >>> 0).toString(2).padStart(6, "0");
    }
    //INSTRUÇÕES DE DESLOCAMENTO DE BITS
    if (valor == 'mfhi') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'mthi') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'mflo') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'mtlo') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'mult') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'multu') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'div') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'divu') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }

    //INSTRUÇÕES DE DESVIO
    if (valor == 'jr') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'jalr') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bltz') {
        return (1 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bgez') {
        return (1 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bltzal') {
        return (1 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bgezal') {
        return (1 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'j') {
        return (2 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'jal') {
        return (3 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'beq') {
        return (4 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bne') {
        return (5 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'blez') {
        return (6 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'bgtz') {
        return (7 >>> 0).toString(2).padStart(6, "0");
    }

    //Delocamento de Bits
    if (valor == 'srl') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sll') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sra') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'sllv') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'srlv') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }
    if (valor == 'srav') {
        return (0 >>> 0).toString(2).padStart(6, "0");
    }








    // REGISTRADORES

    if (valor == '$t0') {
        return ('1000').padStart(5, "0");
    }
    if (valor == '$t1') {
        return ('1001').padStart(5, "0");
    }
    if (valor == '$t2') {
        return ('1010').padStart(5, "0");
    }
    if (valor == '$t3') {
        return ('1011').padStart(5, "0");
    }
    if (valor == '$t4') {
        return ('1100').padStart(5, "0");
    }
    if (valor == '$t5') {
        return ('1101').padStart(5, "0");
    }
    if (valor == '$t6') {
        return ('1110').padStart(5, "0");
    }
    if (valor == '$t7') {
        return ('1111').padStart(5, "0");;
    }


    if (valor == '$s0') {
        return ('10000').padStart(5, "0");
    }
    if (valor == '$s1') {
        return ('10001').padStart(5, "0");
    }
    if (valor == '$s2') {
        return ('10010').padStart(5, "0");
    }
    if (valor == '$s3') {
        return ('10011').padStart(5, "0");
    }
    if (valor == '$s4') {
        return ('10100').padStart(5, "0");
    }
    if (valor == '$s5') {
        return ('10101').padStart(5, "0");
    }
    if (valor == '$s6') {
        return ('10110').padStart(5, "0");
    }
    if (valor == '$s7') {
        return ('10111').padStart(5, "0");
    }
    if (valor == '$zero') {
        return ('0').padStart(5, "0");
    }




    //Numeros diretors 
    if (!isNaN(valor)) {
        if (valor >= 0) {
            return ((valor) >>> 0).toString(2).padStart(16, '0');
        } else {
            return ((valor) >>> 0).toString(2).slice(-16);
        }
    }
}

function controleFunction(intrucoes) {
    let instrucoesR = ["add", "addu", "sub", "subu", "and", "or", "xor", "nor",
        "slt", "sltu", "sll", "srl", "sra", "sllv", "srlv", "srav", "mfhi", "mthi", "mflo",
        "mtlo", "mult", "multu", "div", "divu", "jr", "jalr"];
    let func = '';
    let functionInstrucoesR = [32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 0, 2, 3, 4, 6, 7,
        16, 17, 18, 19, 24, 25, 26, 27, 8, 9];
    for (let i = 0; i < instrucoesR.length; i++) {
        if (instrucoesR[i] == intrucoes) {
            func = ((functionInstrucoesR[i]) >>> 0).toString(2).padStart(6, '0');
        }
    }
    return func;
}

function organizarInstrucaoI(teste) {

    let opCode = atribuirValorIntrucoes(teste[0].replace(/(\r\n|\n|\r)/gm, ""));
    let rs = atribuirValorIntrucoes(teste[3].replace(/(\r\n|\n|\r)/gm, ""));
    let rt = atribuirValorIntrucoes(teste[1].replace(/(\r\n|\n|\r)/gm, ""));
    let rd = atribuirValorIntrucoes(teste[2].replace(/(\r\n|\n|\r)/gm, ""));

    if (teste[0] == 'addi' || teste[0] == 'addiu' || teste[0] == 'stti' || teste[0] == 'sltiu' || teste[0] == 'addi' || teste[0] == 'andi' ||
        teste[0] == 'ori' || teste[0] == 'xori' || teste[0] == 'lui') {

        return (`${opCode}${rd}${rt}${rs}`)

    }


    return (`${opCode}${rs}${rt}${rd}`)
}

function organizarInstrucaoJ(teste) {
    let opCode = atribuirValorIntrucoes(teste[0].replace(/(\r\n|\n|\r)/gm, ""));
    let constante = ((teste[1]) >>> 0).toString(2).padStart(26, '0');

    return (`${opCode}${constante}`)
}

function organizarInstrucaoR(teste) {

    let shamt = "00000";
    let func = controleFunction(teste[0]);
    let opCode = atribuirValorIntrucoes(teste[0].replace(/(\r\n|\n|\r)/gm, ""));


    let rd = atribuirValorIntrucoes(teste[1].replace(/(\r\n|\n|\r)/gm, ""));
    let rs = atribuirValorIntrucoes(teste[2].replace(/(\r\n|\n|\r)/gm, ""));
    let rt = atribuirValorIntrucoes(teste[3].replace(/(\r\n|\n|\r)/gm, ""));

    return (`${opCode}${rs}${rt}${rd}${shamt}${func}`)
}

function organizarInstrucaoRdesvio(teste) {
    let opCode = atribuirValorIntrucoes(teste[0].replace(/(\r\n|\n|\r)/gm, ""));
    let func = controleFunction(teste[0]);
    let rd = atribuirValorIntrucoes(teste[1].replace(/(\r\n|\n|\r)/gm, ""));
    let rt = atribuirValorIntrucoes(teste[2].replace(/(\r\n|\n|\r)/gm, ""));
    let shamt = ((teste[3]) >>> 0).toString(2).padStart(5, '0');
    let rs = "00000";

    return (`${opCode}${rs}${rt}${rd}${shamt}${func}`)
}

let linhafinal = []

function resultadoFinal() {
    let instrucoesR = ["add", "addu", "sub", "subu", "and", "or", "xor", "nor",
        "slt", "sltu", "sllv", "srlv", "srav", "mfhi", "mthi", "mflo",
        "mtlo", "mult", "multu", "div", "divu", "jr", "jalr"];

    let instrucoesI = ["bltz", "bgez", "bltzal", "bgezal", "beq", "bne", "blez",
        "bgtz", "addi", "addiu", "slti", "sltiu", "andi", "ori", "xori", "lui",
        "lb", "lh", "lwl", "lw", "lbu", "lhu", "lwr", "sb", "sh", "swl", "sw", "swr"];

    let instrucoesRDesvio = ["sll", "srl", "sra"];
    let instrucoesJ = ["j", "jal"];

    var list = valorTratado()

    list.forEach((e) => {
        instrucoesR.forEach((r) => {
            if (r == e[0]) {
                linhafinal.push(organizarInstrucaoR(e));

            }
        })
        instrucoesI.forEach((i) => {
            if (i == e[0]) {
                linhafinal.push(organizarInstrucaoI(e));

            }
        })
        instrucoesRDesvio.forEach((rd) => {
            if (rd == e[0]) {
                linhafinal.push(organizarInstrucaoRdesvio(e));
            }
        })
        instrucoesJ.forEach((j) => {
            if (j == e[0]) {
                linhafinal.push(organizarInstrucaoJ(e));
            }
        })

    })
    mostrarResultado();
    fecharModal();

}



function mostrarResultado() {
    fundoMips.classList.remove('ativo');
    salva.classList.remove('ativo');
    var resultado = '<table>';
    resultado += ` <tr>
<th>Entrada</th>
<th>Saida</th>
</tr> `
    teste.forEach((linha) => {
        resultado += `<tr> <td>${linha} </td> <td> ${linhafinal.shift()} </td> </tr>`
    })
    resultado += '</table>';
    var result = document.getElementById('resultado');
    result.innerHTML = resultado;
}



















