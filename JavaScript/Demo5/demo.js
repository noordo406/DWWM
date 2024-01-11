// console.log("etape1");
// console.log("etape2");
// console.log("etape3");

// console.log("etape1");
// setTimeout(function(){
//     console.log("etape2");
// }, 2000);
// setTimeout(function(){
//     console.log("etape3");
// }, 1000);
// console.log("etape4");

// console.log("etape1");
// setTimeout(()=>console.log("etape2"), 2000);
// console.log("etape3");

// const promesse = new Promise(function(){
//     console.log("étape1");
// })
// promesse.then(console.log("étape2"));

const promesse = new Promise(function(ok){
    console.log("étape1");
    ok("coucou");
    console.log("étape3")
})

promesse.then(function(valeur) {
    console.log("étape2")
    console.log(valeur)
})