let message = document.querySelector("#message");
let resultat = document.querySelector("#resultat")
const morse = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  }
message.addEventListener('input', function(){
    let res = message.value;
    for (let index in morse) {
        res = res.toLowerCase().replaceAll(morse[index], index+" ")
    }
    document.querySelector("#resultat").value = res;
})


function operation(){
    const num1 = document.getElementById("num1").value
    console.log(num1)
    const num2 = document.getElementById("num2").value
    console.log(num2)
    const operateur = document.querySelector(`option[value=${document.querySelector("select").value}]`).innerHTML
    console.log(operateur)
    if (num1 != "" & num2 !="") {
        let resop = eval(num1+operateur+num2);
        document.getElementById("resultatoperation").innerHTML = " = " +resop;
    }
}