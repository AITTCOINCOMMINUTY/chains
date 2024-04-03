import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A1AC99E9-7285-4C81-8FE6-BF298E32E597',
  network: 'mainnet',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L188
  hashGenesisBlock:
    '000000658f359fc719147ffb3596d189bd646954118b7118d846aa871c509af5',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L181
  port: 17711,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 20249,
  protocol: {
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L177
    magic: 0x84847365,
  },
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L191
  seedsDns: [
    'seed1.aittcoin.org',
    'seed2.aittcoin.org',
    'seed3.aittcoin.org',
    'seed4.aittcoin.org',
    'seed5.aittcoin.org',
    'seed6.aittcoin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L199
      private: 0x0488ade4,
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L198
      public: 0x0488b21e,
    },
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L202
    bip44: 0,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L197
    private: 0x80,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L195
    public: 0x17,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L196
    scripthash: 0x42,
  },
};
