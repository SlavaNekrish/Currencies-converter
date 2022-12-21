import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic";

const app_id = 1089; // Replace with your app_id or leave the current test app_id.
const connection = new WebSocket(
  `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
);
const api = new DerivAPIBasic({ connection });

// payout_currencies_request

const payout_currencies_request = {
  "payout_currencies": 1,
};

const payoutCurrenciesResponse = async (res) => {
  const data = JSON.parse(res.data);

  if (data.error !== undefined) {
    console.log("Error : ", data.error?.message);
    connection.removeEventListener(
      "message",
      payoutCurrenciesResponse,
      false
    );
    await api.disconnect();
  }

  if (data.msg_type === "payout_currencies") {
    console.log(data.payout_currencies);
  }

  connection.removeEventListener("message", payoutCurrenciesResponse, false);
};

const getPayoutCurrencies = async () => {
  connection.addEventListener("message", payoutCurrenciesResponse);
  await  api.payoutCurrencies(payout_currencies_request);
  //  setInterval(getPayoutCurrencies(), 100000) 
};

const PayoutCurrencies_button = document.querySelector("#payoutCurrencies");
PayoutCurrencies_button.addEventListener("click", getPayoutCurrencies);


// const exchange_rates_request 

// const exchange_rates_request = {
//   "exchange_rates": 1,
//   "base_currency": "USD"
// }

// const exchangeRatesResponse = async (res) => {
//   const data = JSON.parse(res.data);

//   if (data.error !== undefined) {
//     console.log("Error : ", data.error?.message);
//     connection.removeEventListener(
//       "message",
//       exchangeRatesResponse,
//       false
//     );
//     await api.disconnect();
//   }

//   if (data.msg_type === "exchange_rates") {
//     console.log(data.exchange_rates);
//   }

//   connection.removeEventListener("message",exchangeRatesResponse, false);
// };

// const getExchangeRates = async () => {
//   connection.addEventListener("message", exchangeRatesResponse);
//   await api.exchangeRates(exchange_rates_request);
// };

// const exchangeRates_button = document.querySelector("#exchangeRates");
// exchangeRates_button.addEventListener("click", getExchangeRates);








