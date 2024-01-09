var buttonAll = document.querySelectorAll('button');
const operateurs = ["+", "-", "/", "*"];
const input = document.querySelector('#resultat');
var isFloat = 0;
input.value = "";
for (let button of buttonAll) {
    button.setAttribute("onclick", "addInput(\"" + button.textContent + "\")");
}

function addInput(char) {
    if (char == "c") {
        input.value = "";
    } else if (char == "=") {
        if (!operateurs.includes(input.value.slice(-1)) & input.value != "") {
            const resultat = document.createElement("span");
            resultat.textContent = eval(input.value);
            resultat.style.fontWeight = "bold";
            resultat.style.textDecoration = "underline";
            resultat.style.color = "red";
            document.querySelector("#recap").textContent = input.value+ " = ";
            document.querySelector("#recap").appendChild(resultat);
            input.value = "";
            isFloat = 0;
        }
    } else if (operateurs.includes(char)) {
        if ((!operateurs.includes(input.value.slice(-1)) & input.value != "") | char == "-" & input.value.slice(-1) != "-") {
            input.value += char;
            isFloat = 0;
        }
    } else if (char == ".") {
        if (!isFloat) {
            if (operateurs.includes(input.value.slice(-1)) | input.value == "") {
                input.value += "0";
            }
            isFloat = 1;
            input.value += char;
        }
    } else {
        input.value += char;
    }
}