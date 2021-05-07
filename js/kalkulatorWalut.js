{
    const calculateResult = (operations, currency, sum) => {
        const PLNUSD = 3.8293;
        const PLNEUR = 4.6061;
        const PLNGBP = 5.302;
        const USDPLN = 3.7535;
        const EURPLN = 4.5149;
        const GBPPLN = 5.197;

        switch (operations + "_" + currency) {
            case "buy_USD":
                return sum / PLNUSD;


            case "buy_EUR":
                return sum / PLNEUR;


            case "buy_GBP":
                return sum / PLNGBP;


            case "sell_USD":
                return sum * USDPLN;


            case "sell_EUR":
                return sum * EURPLN;


            case "sell_GBP":
                return sum * GBPPLN;

        }
    };

    const updateResultText = (operations, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        switch (operations) {
            case "buy":
                return resultElement.innerText = `${ result.toFixed(2) } ${ currency }`;
           case "sell" :
           return resultElement.innerText= `${ result.toFixed(2) } PLN`;
      }
    
    };
  
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const operationsElement = document.querySelector(".js-operations");
        const currencyElement = document.querySelector(".js-currency");
        const sumElement = document.querySelector(".js-sum");


        const operations = operationsElement.value;
        const currency = currencyElement.value;
        const sum = sumElement.value;


        const result = calculateResult(operations, currency, sum);

        updateResultText(operations,result, currency);
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
