require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food shoulder rate night method coral light army gesture'; 
let testAccounts = [
"0xc675bd1769712aa322e7b2188dbdd570c066d3e6aa80241a4118802a88cdf40d",
"0xdf758e9440fbf21abb4c6fab217710e2d9cbf054bdee21a87fdbbf1f417a4af3",
"0xd8a58d83a1e9ec996047fcfcc5f43e4dd10bdb3a2278764d827180070337e898",
"0x8b9ce1dcf0524a78f2c355e46f172a19e5a6cd7b9f98eca6c1a715f3e75473cc",
"0xf81df3a3a7b388f833566831fe281f637d1e3d2ab60ba63fc06e3dfb5fb18ea3",
"0x4434efa81239bf8001fd812ce4660a54943fd58a59ea79f23cc2a8cc2509d9f5",
"0xde59a435ae82ef9a3ddc62d5caf294c90958e41e9e1d6eb57fbe94cda96709cc",
"0x42ad4cc1857855205acd9175522c04937f56c356bf0f994f6e8a4d2daabce091",
"0x7ba8910acc8dab7369e84a2ba75d33959588ddd093974d18aac3c90a0ef62e0a",
"0x6df8d1a01a651a6ce6344c9b465d6d270c0d3f7f3249d122943eda06ccbaccbf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

