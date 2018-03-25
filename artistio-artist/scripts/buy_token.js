const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const fs = require('fs');
const solc = require('solc');
const quint = 1000000000000000000;

const input = fs.readFileSync('Token.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':Mcoin'].bytecode;
const abi = JSON.parse(output.contracts[':Mcoin'].interface);
const contract = new web3.eth.Contract(abi);


const buyer_addr = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
const seller_addr = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
const contract_addr = "0xf25186B5081Ff5cE73482AD761DB0eB0d25abfBF";


contract.options.address = contract_addr;
contract.methods.buy().send({
    from: buyer_addr,
    value: 3 * quint,
    gas: 3000000,
    gasPrice: '20000000000'
})