require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan riot still minimum imitate problem suspect ski'; 
let testAccounts = [
"0x54eab8196f6187a64f81bb02779cc7c75c436033b436c89e346d5c6948eaf3e9",
"0xb9148a7329a5669e8ec326bc97a7bde489a3f1d2a75ed3b2d4254d1b0aa79dd6",
"0x2165272a4900ef923f98933994f551b5926a87123d475a6cef0ae8a793413c8b",
"0xb360971ddda46e207da8b8d2fde4dcf51319386e4cbed3ffa17dbba3e14ba1b3",
"0x42af7762350d1be3b9915fe631056b1f8248a188608a870cdeff9d2d43cf223f",
"0x25eca87a3d23e4ab886255f2faaf7fccbadab45d988ba27e3a4eb918d4e291cc",
"0x4672085fc93dccbf80d13912c5d2596488e1d617dbe1b0558c403dc0a00d46a4",
"0x6b7511a8840595dfc273bd3c4a4228de23dd58192e135f07eada4ed11b9687c3",
"0xe31433259cce6fe361f5c5962a0aeef5cb6b2c55c96e17e19191a8ed1e07a895",
"0x2abe4bd6d84f5bbe076fcf7d48bfbba14d423d140620ad9d53273ef156541045"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

