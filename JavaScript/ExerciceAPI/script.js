const apiKey = '065d243bf67a2e1f0d4e36d7'
const currencyList = []


async function initCurrencies(){
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/AED`
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        for (currency in data.conversion_rates) {
            let option = document.createElement("option")
            option.textContent = `${currency}`
            option.value = `${currency}`
            let option2 = option.cloneNode(true)
            if (currency == 'USD') {
                option.selected = true
            }
            if (currency == 'EUR') {
                option2.selected = true
            }
            document.querySelector("#monnaie1").appendChild(option)
            document.querySelector("#monnaie2").appendChild(option2)
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
    console.log(rate)
    document.querySelector("#output").innerHTML = `${amount} ${currency1} équivaut à ${amount*rate} ${currency2}<br>(1 ${currency1} = ${rate} ${currency2})`
    
})
initCurrencies()