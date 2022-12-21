         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 


## Getting Started
​
Hi there! Welcome to AWS Cloud9!
​
To get started, create some files, play with the terminal,
or visit [https://docs.aws.amazon.com/console/cloud9/](https://docs.aws.amazon.com/console/cloud9/) for our documentation.
​
Please run these command in the terminal. From the top nav bar [Window > New Terminal]
​
Feel free to use any JavaScript framework. Below is the getting started guide for the most popular JavaScript frameworks.
​
​
## React
​
- Getting started with React:
​
```bash
    npx create-react-app my-app
    cd ./my-app
    npm start
```
​
## Vue
​
- Getting started with Vue:
​
```bash
    npm install -g @vue/cli
    vue create my-app
    cd ./my-app
    npm run serve
```
​
- Additional steps to get development server working. Add the following to `vue.config.js`
​
```javascript
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    client: {
      webSocketURL: "ws://0.0.0.0:8080/ws",
    },
    allowedHosts: "all",
  },
  transpileDependencies: true,
});
```
​
## Angular
​
- Getting started with Angular:
​
```bash
    npm install -g @angular/cli
    ng new my-app
    cd ./my-app
    ng serve --open --host $IP --port $PORT --disable-host-check
```
​
- Explore our Deriv API here: https://api.deriv.com/
​
  Click the Preview Link in the top banner to preview your changes in c9 browser.
​
## Instructions
​
- To see a rendered version of the files here, right-click the filename on the left panel and select `preview`. Refer to your **browser console** for any console-logged data.
- You may use search engines at any stage of this Hackathon.
- We are more interested in your analysis and how you approach the problem. We encourage you to share your thought process as well as any queries in the chat box.
- Please get yourself accustomed to developing in the c9 instance. The goal here is to get your development environment running within the c9 instance so you can focus on solving the Hackathon task later.

# Payout Currency Converter
​
Your task is to create a simple Payout Currency Converter using Deriv's WebSocket endpoint. The requirements of this task are as the following:
​
1. Create a page with an input field, a dropdown and a table.
2. Dropdown
   - List out all the available payout currencies. The selected item in the dropdown is the `base_currency`
3. Input Field
   - This sets the value of the `base_currency`.
   - Must be valid currency value.
4. Table
   - List out all of the currencies from `exchange_rates` call.
   - 2 Columns: `Currency` and `Value`.
      - `Currency` is the currency code (Example: `USD`, `AUD`, etc).
      - `Value` is the converted value of the `base_currency` entered in the `Input Field` to the specified `currency`.
      - This value must be update on every change on the `Input Field`.
5. Formatting
   - Round the USD, AUD and GBP exchange rate values to `2` decimal places. Leave the remaining exchange rate values as it is.
​
- You need to initiate a connection to deriv websocket, the `ws` endpoint is: `wss://ws.binaryws.com/websockets/v3?app_id=1089`.<br>
  Note: `1089` can be used as the `app_id`. Registering a new `app_id` is not needed.
​
- An example of how you can initiate a websocket connection to deriv websocket:
  Please keep in mind that the `onopen` and `onmessage` event listeners that listed below are just examples of how to send message and get response with deriv ws connection. You need to find the needed parameters from documentation links which provided in the next sections.
​
  ```javascript
  var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');
  
  ws.onopen = function(evt) {
      ws.send(JSON.stringify({ticks:'R_100'}));
  };
  
  ws.onmessage = function(msg) {
     var data = JSON.parse(msg.data);
     console.log('ticks update: %o', data);
  };
  ```
​
​
​
- List of payout currencies can be obtained using the `payout_currencies` WebSocket API call. Please check the API Playground for `payout_currencies` WebSocket API call - https://api.deriv.com/api-explorer/#payout_currencies
​
- Current exchange rates can be obtained using the `exchange_rates` WebSocket API call. Please check the developer documentation for `exchange_rates` WebSocket API call - https://api.deriv.com/api-explorer/#exchange_rates
​
# Note
​
-   You have 90 minutes to complete this assignment
​
-   Please spend the first 20 minutes to read through the problem at hand.
-   Once you finish reading through the requirements, please outline your approach in the chat for solving the problem.
-   Our emphasis is to assess your comprehension, reasoning, solutioning, and implementation.
-   Please work on getting a working web socket connection in the next 20 minutes. You can get assistance from the proctors on this during this 20 minutes block to get a WebSocket connection working.