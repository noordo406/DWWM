function toggleSelected(id){
    let balise = document.querySelector(`#${id}`)
    balise.classList.toggle("selected")
}

// document.addEventListener("click",function(){
//     console.log("blabldsadadsada")
// })

// document.addEventListener("click", function(event){
//     console.log(event.target)
// })

let allInputs = document.querySelectorAll("input[type='text']")
for (let input of allInputs) {
    input.addEventListener("focus", function(){
        input.style.backgroundColor = "green"
    })
    // input.addEventListener("blur", function(){
    //     input.style.backgroundColor = "gray"
    // })
    input.addEventListener("change", function(){
        input.style.backgroundColor = "red"
    })

}

let inputNiv = document.querySelector("select")
let warning = document.createElement("p")

inputNiv.addEventListener("change", function(){
    warning.innerHTML = `Êtes-vous certain d'avoir un ${inputNiv.value}?`
    warning.style = "color: red"
    document.querySelector("select").insertAdjacentElement("afterend",warning)
})


let allButtons = document.querySelectorAll("button")
for (let button of allButtons) {
    button.addEventListener("click", function(){
        let elem = document.querySelector(`#partie${button.id.slice(-1)}`)
        elem.classList.toggle("hidden")
    })
}