function isValidhour(str){
    // const regex = /^(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])$/
    // return regex.test(str)
    const isValidHour = str => /^(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])$/.test(str)
    return isValidHour(str)
}

console.log(isValidhour("11:35:58"))
console.log(isValidhour("11:35:63"))
console.log(isValidhour("faggaffafaf"))