const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');


const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

web3.eth.getBalance("0x8cdaf0cd259887258bc13a92c0a6da92698644c0")
    .then(console.log);