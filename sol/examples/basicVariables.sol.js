var basicvariablesContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"newValue","type":"string"}],"name":"setStringVariable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"booleanVariable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"overflowIntegerVariables","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"underflowIntegerVariables","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stringVariable","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStringVariable1","outputs":[{"name":"returnValue","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unsignedInteger8Variable","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unsignedIntegerVariable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStringVariable","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"toggleBooleanVariable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"unsignedInteger256Variable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var basicvariables = basicvariablesContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040526040805190810160405280600e81526020017f6f726967696e616c2076616c75650000000000000000000000000000000000008152506000908051906020019061004f92919061013f565b506001600460016101000a81548160ff021916908315150217905550341561007657600080fd5b6040805190810160405280600d81526020017f48656c6c6f2c20576f726c642100000000000000000000000000000000000000815250600090805190602001906100c192919061013f565b506040805190810160405280601081526020017f796f752063616e277420736565206d65000000000000000000000000000000008152506001908051906020019061010d92919061013f565b50600160028190555060016003819055506001600460006101000a81548160ff021916908360ff1602179055506101e4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018057805160ff19168380011785556101ae565b828001600101855582156101ae579182015b828111156101ad578251825591602001919060010190610192565b5b5090506101bb91906101bf565b5090565b6101e191905b808211156101dd5760008160009055506001016101c5565b5090565b90565b610865806101f36000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303216e55146100bf57806308d663d31461011c578063091bbddc146101495780630e08ba2c1461015e578063117b24671461017357806331391e5414610201578063740be6ad1461028f578063a80e5c65146102be578063ad5729e2146102e7578063b508c00b14610375578063d826f88f1461038a578063f2e994c11461039f575b600080fd5b34156100ca57600080fd5b61011a600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103c8565b005b341561012757600080fd5b61012f6103e2565b604051808215151515815260200191505060405180910390f35b341561015457600080fd5b61015c6103f5565b005b341561016957600080fd5b61017161043b565b005b341561017e57600080fd5b610186610481565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c65780820151818401526020810190506101ab565b50505050905090810190601f1680156101f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020c57600080fd5b61021461051f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610254578082015181840152602081019050610239565b50505050905090810190601f1680156102815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561029a57600080fd5b6102a26105c7565b604051808260ff1660ff16815260200191505060405180910390f35b34156102c957600080fd5b6102d16105da565b6040518082815260200191505060405180910390f35b34156102f257600080fd5b6102fa6105e0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033a57808201518184015260208101905061031f565b50505050905090810190601f1680156103675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038057600080fd5b610388610688565b005b341561039557600080fd5b61039d6106b4565b005b34156103aa57600080fd5b6103b261077a565b6040518082815260200191505060405180910390f35b80600090805190602001906103de929190610780565b5050565b600460019054906101000a900460ff1681565b60028054016002819055506002600354016003819055506002600460009054906101000a900460ff1601600460006101000a81548160ff021916908360ff160217905550565b60028054036002819055506002600354036003819055506002600460009054906101000a900460ff1603600460006101000a81548160ff021916908360ff160217905550565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105175780601f106104ec57610100808354040283529160200191610517565b820191906000526020600020905b8154815290600101906020018083116104fa57829003601f168201915b505050505081565b610527610800565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105bd5780601f10610592576101008083540402835291602001916105bd565b820191906000526020600020905b8154815290600101906020018083116105a057829003601f168201915b5050505050905090565b600460009054906101000a900460ff1681565b60025481565b6105e8610800565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561067e5780601f106106535761010080835404028352916020019161067e565b820191906000526020600020905b81548152906001019060200180831161066157829003601f168201915b5050505050905090565b600460019054906101000a900460ff1615600460016101000a81548160ff021916908315150217905550565b6040805190810160405280600d81526020017f48656c6c6f2c20576f726c642100000000000000000000000000000000000000815250600090805190602001906106ff929190610780565b506040805190810160405280601081526020017f796f752063616e277420736565206d65000000000000000000000000000000008152506001908051906020019061074b929190610780565b50600160028190555060016003819055506001600460006101000a81548160ff021916908360ff160217905550565b60035481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107c157805160ff19168380011785556107ef565b828001600101855582156107ef579182015b828111156107ee5782518255916020019190600101906107d3565b5b5090506107fc9190610814565b5090565b602060405190810160405280600081525090565b61083691905b8082111561083257600081600090555060010161081a565b5090565b905600a165627a7a723058203497350eb90e7ff018c55effb4a067f5ca36ecfd27d22ba388d59fef3ef2c04d0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })