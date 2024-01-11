function ditBonjour1(){
    console.log("Hello World!!");
}
ditBonjour1();

let ditBonjour2 = () => {
    console.log("Hello World!!");
}
ditBonjour2();

let ditBonjour3 = () => console.log("Hello World!!");
ditBonjour3();

let ditBonjour4 = () => {
    return "Hello World!!"
}
console.log(ditBonjour4());

let ditBonjour5 = () => "Hello World!!";
console.log(ditBonjour5());

let ditBonjour6 = (x) => {
    console.log(x);
}
ditBonjour6("Hello World!! ");