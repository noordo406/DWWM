var buttonAll = document.querySelectorAll('button');
const operateurs = ["+", "-", "/", "*", "^"];
const input = document.querySelector('#resultat');
const pi = 3.141592653589793
var floatList = [];
var floatIndex = 0;
var isFloat = 0;
input.value = "";
for (let button of buttonAll) {
    button.setAttribute("onclick", "addInput(\"" + button.textContent + "\")");
}

function addInput(char) {
    if (char == "c") {
        input.value = "";
        floatList = [];
        floatIndex = 0;
        isFloat = 0;
    } else if (char == "<") {
        if (input.value != "") {
            var lastChar = input.value.slice(-1);
            input.value = input.value.slice(0, -1);
            if (lastChar == "." | lastChar == 'π') {
                isFloat = 0;
            } else if (operateurs.includes(lastChar)) {
                if (!(lastChar == "-" & input.value != "" & !operateurs.includes(input.value.slice(-1)))) {
                    floatIndex--;
                    isFloat = floatList[floatIndex];
                }
            }
        }
    } else if (char == "=") {
        if (!operateurs.includes(input.value.slice(-1)) & input.value != "") {
            const resultat = document.createElement("span");
            resultat.textContent = eval(input.value.replace("^", "**").replace("π", pi));
            resultat.style.fontWeight = "bold";
            resultat.style.textDecoration = "underline";
            resultat.style.color = "red";
            document.querySelector("#recap").textContent = input.value+ " = ";
            document.querySelector("#recap").appendChild(resultat);
            input.value = "";
            floatList = [];
            floatIndex = 0;
            isFloat = 0;
        }
    } else if (operateurs.includes(char)) {
        if ((!operateurs.includes(input.value.slice(-1)) & input.value != "") | char == "-" & input.value.slice(-1) != "-") {
            input.value += char;
            floatList[floatIndex] = isFloat;
            isFloat = 0;
            floatIndex++;
        }
    } else if (char == ".") {
        if (!isFloat) {
            if (operateurs.includes(input.value.slice(-1)) | input.value == "") {
                input.value += "0";
            }
            isFloat = 1;
            input.value += char;
        }
    } else if (char == "π") {
        if (operateurs.includes(input.value.slice(-1)) | input.value == "") {
            isFloat = 1;
            input.value += char;
        }
    } else {
        input.value += char;
    }
}