function verifLength(str){
    const regex = /.{8,}/
    return regex.test(str)
}
function verifLower(str){
    const regex = /[a-z]/
    return regex.test(str)
}
function verifUpper(str){
    const regex = /[A-Z]/
    return regex.test(str)
}
function verifNumber(str){
    const regex = /[0-9]/
    return regex.test(str)
}
function verifSpecial(str){
    const regex = /[^A-Za-z0-9]/
    return regex.test(str)
}

function isValide(id, res){
    if (res) {
        document.getElementById(id).style.color = "green"
    } else {
        document.getElementById(id).style.color = "red"
    }
}

let mdp = document.querySelector("#mdp");
mdp.addEventListener('input', function(){
    let str = mdp.value;
    isValide("mdpLength", verifLength(str))
    isValide("mdpUpper", verifUpper(str))
    isValide("mdpLower", verifLower(str))
    isValide("mdpNumber", verifNumber(str))
    isValide("mdpSpecial", verifSpecial(str))
})