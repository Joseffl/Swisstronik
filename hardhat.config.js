require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xe4c88b69b9169556d0c2af1a6f76cb86e628d708d9cb99ea09fc32b26b8852a5"], //Your private key starting with "0x"
    },
  },
};
