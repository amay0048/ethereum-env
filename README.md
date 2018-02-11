# Environments

Ethereum Docker Local Cluster
https://capgemini.github.io/blockchain/ethereum-docker-compose/
With the current version of Docker OSX, the timezone files need to be included. Tried a couple of configurations here
but it seems the simplest solution for now is to link the files directly e.g.

```
    volumes:
      - ./files/password:/root/files/password:ro
      - ./files/genesis.json:/root/files/genesis.json:ro
      - ./files/keystore:/root/.ethereum/devchain/keystore:rw
      - /usr/share/zoneinfo/Australia/Sydney:/etc/localtime:ro
```

Simplest way Ive found to setup a local devchain is to use [ethereum-docker](https://github.com/Capgemini-AIE/ethereum-docker).

Another testnet article
https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/private-chain.html
Dapp Tools for Local Dev
https://dapp.tools/seth/

## Web3 API Docs
https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html

## Remix Workbench
http://remix.ethereum.org/

# Contract Building Blocsks

Trie
https://github.com/chriseth/patricia-trie/blob/master/patricia.sol
https://github.com/ethereum/wiki/wiki/Patricia-Tree

Linked Hashtable
https://github.com/sagivo/solidity-utils/blob/master/contracts/lib/Dictionary.sol
https://sagivo.com/the-missing-dictionary-in-solidity-67b15e0c6d94

# Workshop notes

https://github.com/bokkypoobah/BokkyPooBahsEthereumWorkshop/wiki/Workshop-%2331-%5BIntroduction%5D-Blockchains-&-Crypto-Safety,-And-Smart-Contracts-%231#2-basic-variables
