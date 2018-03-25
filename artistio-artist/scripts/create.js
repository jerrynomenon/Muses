const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');

const input = fs.readFileSync('Token.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':Mcoin'].bytecode;
const abi = JSON.parse(output.contracts[':Mcoin'].interface);


const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

const contract = new web3.eth.Contract(abi);

contract
    .deploy({
        data: bytecode,
        arguments: [1000000, "LXVCoin", 1, "LXV", 1000000000000000000]
    })
    .send({
        from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        gas: 3000000,
        gasPrice: '20000000000'
    }).then(function (receipt) {
        console.log(receipt);
        contract.options.address = receipt['_address'];
        contract.methods.balanceOf("0x627306090abaB3A6e1400e9345bC60c78a8BEf57").call().then(console.log)
    })
    .catch(function (error) {
        console.log(error);
    });