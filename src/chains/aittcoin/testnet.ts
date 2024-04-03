import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: '051BBF1A-7D13-42F9-A0D8-0C1C253A51D0',
  network: 'testnet',
  hashGenesisBlock:
    '000000658f359fc719147ffb3596d189bd646954118b7118d846aa871c509af5',
  port: 18770,
  portRpc: 18766,
  protocol: {
    magic: 0x544e5652,
  },
  seedsDns: [
    'seed-testnet-raven.bitactivate.com',
    'seed-testnet-raven.ravencoin.com',
    'seed-testnet-raven.ravencoin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L423
    private: 0xef,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L421
    public: 0x6f,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L422
    scripthash: 0xc4,
  },
};
