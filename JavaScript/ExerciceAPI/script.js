const apiKey = '065d243bf67a2e1f0d4e36d7'
const currencylist = []

async function initCurrencies(){
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        for (currency of data.supported_codes) {
            if (currency[0] != "SLE") {let option = document.createElement("option")
            option.textContent = `${currency[0]}`
            option.value = `${currency[0]}`
            currencylist[currency[0]] = currency[1]
            let option2 = option.cloneNode(true)
            if (currency[0] == 'USD') {
                option.selected = true
            }
            if (currency[0] == 'EUR') {
                option2.selected = true
            }
            document.querySelector("#monnaie1").appendChild(option)
            document.querySelector("#monnaie2").appendChild(option2)}
        }
    } catch(error) {
        console.log("initialisation failed")
    }
}

async function convert(currency1, currency2){
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency1}`
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const rate = data.conversion_rates[currency2]
        return rate
    } catch(error) {
        console.log("conversion failed")
    }
}

document.querySelector('button').addEventListener('click', async function(){
    const currency1 = document.querySelector("#monnaie1").value
    const currency2 = document.querySelector("#monnaie2").value
    const amount = document.querySelector("#input").value
    const rate = await convert(currency1, currency2)
    document.querySelector("#output").innerHTML =
    `${amount} ${currencylist[currency1]} équivaut à ${(amount*rate).toFixed(4)} ${currencylist[currency2]}<br>(1 ${currency1} = ${rate} ${currency2})`
    
})
initCurrencies()