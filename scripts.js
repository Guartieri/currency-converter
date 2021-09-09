const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const dolar = 5.3
const euro = 6.3
const bitcoin = 249034.61

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realText = document.getElementById('real-value-text')
    const dolarText = document.getElementById('currency-value-text')



    realText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)


    if (select.value === 'US$ Dólar americano') {
        dolarText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        dolarText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }
    if (select.value === 'Bitcoin') {
        dolarText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT",
        }).format(inputReais / bitcoin)
    }
  

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-image")


    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.svg"
    }
    convertValues ()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)