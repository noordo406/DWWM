function clicSurImage(){
    let baliseImg = document.querySelector("img")
    baliseImg.classList.toggle("border")
}

function changementValeur(){

}

function selection(){}

function finFocus(){

}

// let titreH1 = document.querySelector("h1")
// titreH1.addEventListener("click",function(){
//     console.log("blabla")
// })

// document.addEventListener("click",function(){
//     console.log("blabldsadadsada")
// })

// document.addEventListener("click", function(event){
//     console.log(event.target)
// })

let inputNom = document.querySelector("input[name='nom']")

inputNom.addEventListener("focus", function(){
    inputNom.style.backgroundColor = "green"
})
inputNom.addEventListener("blur", function(){
    inputNom.style.backgroundColor = "gray"
})
inputNom.addEventListener("change", function(){
    console.log("jfozenrozbgzoe")
})