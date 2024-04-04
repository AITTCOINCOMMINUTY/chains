function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* source: https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp */
var common = {
  name: 'AITTCOIN',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/policy/feerate.cpp#L11
  unit: 'AITT',
  symbol: 'aitt',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/RavenProject/Ravencoin/blob/c8197cd15d8886dc5c6121e3ba3f39c92445fc1b/src/validation.cpp#L129
  messagePrefix: '\x16Raven Signed Message:\n',
  algorithm: 'kawpow',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/qt/transactionrecord.h#L88
  confirmations: 60
};

var mainnet = /*#__PURE__*/_extends({}, common, {
  id: '051BBF1A-7D13-42F9-A0D8-0C1C253A51D0',
  network: 'mainnet',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L188
  hashGenesisBlock: '000000658f359fc719147ffb3596d189bd646954118b7118d846aa871c509af5',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L181
  port: 17711,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 20249,
  protocol: {
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L177
    magic: 0x84847365
  },
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L191
  seedsDns: ['seed1.aittcoin.org', 'seed2.aittcoin.org', 'seed3.aittcoin.org', 'seed4.aittcoin.org', 'seed5.aittcoin.org', 'seed6.aittcoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L199
      "private": 0x0488ade4,
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L198
      "public": 0x0488b21e
    },
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L202
    bip44: 0,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L197
    "private": 0x80,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L195
    "public": 0x17,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L196
    scripthash: 0x42
  }
});

var testnet = /*#__PURE__*/_extends({}, common, {
  id: '051BBF1A-7D13-42F9-A0D8-0C1C253A51D0',
  network: 'testnet',
  hashGenesisBlock: '000000658f359fc719147ffb3596d189bd646954118b7118d846aa871c509af5',
  port: 18770,
  portRpc: 18766,
  protocol: {
    magic: 0x544e5652
  },
  seedsDns: ['seed-testnet-raven.bitactivate.com', 'seed-testnet-raven.ravencoin.com', 'seed-testnet-raven.ravencoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L423
    "private": 0xef,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L421
    "public": 0x6f,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L422
    scripthash: 0xc4
  }
});

var aitt = {
  mainnet: mainnet,
  testnet: testnet
};

var common$1 = {
  name: 'Bitcoin',
  decimalPlaces: 1e8,
  unit: 'BTC',
  symbol: 'btc',
  /** https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/networks.js#L5 */
  messagePrefix: "\x18Bitcoin Signed Message:\n",
  messagePrefixAlts: [/** https://github.com/bitcoin/bitcoin/blob/01e1627e25bc5477c40f51da03c3c31b609a85c9/src/util/message.cpp#L25 */
  'Bitcoin Signed Message:\n', '\x18Bitcoin Signed Message:\n', '\x19Bitcoin Signed Message:\n'],
  // https://github.com/bitcoin/bitcoin/blob/01e1627e25bc5477c40f51da03c3c31b609a85c9/src/qt/transactionrecord.h#L76
  confirmations: 6
};

var mainnet$1 = /*#__PURE__*/_extends({}, common$1, {
  id: 'E406C7BC-5DFD-461F-B67C-D8027DD72B96',
  network: 'mainnet',
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9
  },
  bech32: 'bc',
  // vSeeds
  seedsDns: ['seed.bitcoin.sipa.be', 'dnsseed.bluematt.me', 'seed.bitcoinstats.com', 'seed.bitcoin.jonasschnelli.ch', 'seed.btc.petertodd.org', 'seed.bitcoin.sprovoost.nl', 'dnsseed.emzy.de'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 0,
    "private": 0x80,
    "public": 0x00,
    scripthash: 0x05
  }
});

var testnet$1 = /*#__PURE__*/_extends({}, common$1, {
  id: '59812B76-A692-41A3-B42C-727E6E8D3F82',
  network: 'testnet',
  hashGenesisBlock: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
  port: 18333,
  portRpc: 18332,
  protocol: {
    magic: 0x0709110b
  },
  bech32: 'tb',
  seedsDns: ['testnet-seed.alexykot.me', 'testnet-seed.bitcoin.schildbach.de', 'testnet-seed.bitcoin.petertodd.org', 'testnet-seed.bluematt.me'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var regtest = /*#__PURE__*/_extends({}, common$1, {
  id: '728E7EFF-9E3F-4DA0-83D6-31E214D7C306',
  network: 'regtest',
  hashGenesisBlock: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xdab5bffa
  },
  bech32: 'bcrt',
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

// source: https://github.com/btcsuite/btcd/blob/6867ff32788a1beb9d148e414d7f84f50958f0d2/chaincfg/params.go#L508
var simnet = /*#__PURE__*/_extends({}, common$1, {
  id: '36F2C046-D941-411B-B94B-5B6033844241',
  network: 'simnet',
  hashGenesisBlock: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  port: 18555,
  portRpc: 18556,
  protocol: {
    magic: 0x12141c16
  },
  bech32: 'sb',
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x0420b900,
      "public": 0x0420bd3a
    },
    bip44: 115,
    "private": 0x64,
    "public": 0x3f,
    scripthash: 0x7b
  }
});

var btc = {
  mainnet: mainnet$1,
  testnet: testnet$1,
  regtest: regtest,
  simnet: simnet
};

var common$2 = {
  name: 'Bitcoin Cash',
  decimalPlaces: 1e8,
  unit: 'BCH',
  symbol: 'bch',
  messagePrefix: 'eCash Signed Message:\n',
  // https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/qt/transactionrecord.h#L100
  algorithm: 'zhash',
  confirmations: 6
};

var mainnet$2 = /*#__PURE__*/_extends({}, common$2, {
  id: 'F3A5E149-4E93-4CF8-8DE2-622A98EB9298',
  network: 'mainnet',
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xe8f3e1e3
  },
  // vSeeds
  seedsDns: ['seed.bitcoinabc.org', 'seed-abc.bitcoinforks.org', 'btccash-seeder.bitcoinunlimited.info', 'seed.bitprim.org', 'seed.deadalnix.me', 'seeder.criptolayer.net'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 145,
    "private": 0x80,
    "public": 0x00,
    scripthash: 0x05
  }
});

var testnet$2 = /*#__PURE__*/_extends({}, common$2, {
  id: '0E8F5AF7-C747-4CA8-B5AA-A5F4D91E5619',
  network: 'testnet',
  hashGenesisBlock: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
  port: 18333,
  portRpc: 18332,
  protocol: {
    magic: 0xf4f3e5f4
  },
  seedsDns: ['testnet-seed.bitcoinabc.org', 'testnet-seed-abc.bitcoinforks.org', 'testnet-seed.bitprim.org', 'testnet-seed.deadalnix.me', 'testnet-seeder.criptolayer.net'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var regtest$1 = /*#__PURE__*/_extends({}, common$2, {
  id: 'DDDFE1B1-5E66-471D-A566-CC68F3B9A6FA',
  network: 'regtest',
  hashGenesisBlock: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xfabfb5da
  },
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var bch = {
  mainnet: mainnet$2,
  testnet: testnet$2,
  regtest: regtest$1
};

/* source: https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp */
var common$3 = {
  name: 'BlackCoin',
  decimalPlaces: 1e8,
  unit: 'BLK',
  symbol: 'blk',
  messagePrefix: 'BlackCoin Signed Message:\n',
  // https://github.com/blacknet-ninja/blackcoin-old/blob/1f0dc61f894aaf5fbb0d79d609f3502f7c7f2771/src/qt/transactionrecord.h#L78
  confirmations: 10
};

var mainnet$3 = /*#__PURE__*/_extends({}, common$3, {
  id: '85526DEF-8C30-410B-AE09-2EBA587D7ACA',
  network: 'mainnet',
  hashGenesisBlock: '000001faef25dec4fbcf906e6242621df2c183bf232f263d0ba5b101911e4563',
  port: 15714,
  portRpc: 15715,
  protocol: {
    magic: 0x05223570
  },
  seedsDns: ['rat4.blackcoin.co', 'seed.blackcoin.co', 'archon.darkfox.id.au', 'foxy.seeds.darkfox.id.au', '6.syllabear.us.to', 'bcseed.syllabear.us.to'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 10,
    "private": 0x99,
    "public": 0x19,
    scripthash: 0x55
  }
});

var blk = {
  mainnet: mainnet$3
};

var common$4 = {
  name: 'c0ban',
  unit: 'RYO',
  symbol: 'coban',
  decimalPlaces: 1e8,
  /** https://github.com/c0ban/c0ban/blob/master/src/util/message.cpp#L23 */
  messagePrefix: 'c0ban Signed Message:\n',
  // https://github.com/c0ban/c0ban/blob/master/src/qt/transactionrecord.h#L89
  confirmations: 16
};

var mainnet$4 = /*#__PURE__*/_extends({}, common$4, {
  id: '45C5BEAB-73EB-4BA7-BF13-482CE66FFE38',
  network: 'mainnet',
  hashGenesisBlock: '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  // nDefaultPort
  port: 3881,
  portRpc: 3882,
  protocol: {
    magic: 0x6e623063
  },
  // vSeeds
  seedsDns: ['jp01.dnsseed.c0ban.com', 'kr01.dnsseed.c0ban.com'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 88888,
    "private": 0x88,
    "public": 0x12,
    scripthash: 0x1c
  }
});

var testnet$3 = /*#__PURE__*/_extends({}, common$4, {
  id: '1EB72780-6E27-4F84-BDEE-82E41798A969',
  network: 'testnet',
  hashGenesisBlock: '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  port: 13881,
  portRpc: 13882,
  protocol: {
    magic: 0x8e828083
  },
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x04388388,
      "public": 0x04588788
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    "private": 0xee,
    "public": 0x76,
    scripthash: 0xc6
  }
});

var regtest$2 = /*#__PURE__*/_extends({}, common$4, {
  id: 'EE9BB417-986B-4B72-A197-947D5AA5C260',
  network: 'regtest',
  hashGenesisBlock: '3249e44acac8fc67e6b94e882525cea6f5a9853e1ff7b4a1d5f470b23ff8ae11',
  port: 23881,
  portRpc: 23882,
  protocol: {
    magic: 0xdab5bffa
  },
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x043587cf,
      "public": 0x04358394
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var cbn = {
  mainnet: mainnet$4,
  testnet: testnet$3,
  regtest: regtest$2
};

var common$5 = {
  name: 'CityCoin',
  unit: 'CITY',
  symbol: 'city',
  decimalPlaces: 1e8,
  consensus: 'PoS',
  confirmations: 6
};

var mainnet$5 = /*#__PURE__*/_extends({}, common$5, {
  id: 'EE15B76D-FA2E-4346-B3ED-678716DA5B6A',
  network: 'mainnet',
  unit: 'CITY',
  hashGenesisBlock: '00000b0517068e602ed5279c20168cfa1e69884ee4e784909652da34c361bff2',
  port: 4333,
  portRpc: 4334,
  protocol: {
    magic: 0x43545901
  },
  seedsDns: ['seed.city-chain.org', 'seed.city-coin.org', 'seed.citychain.foundation', 'seed.liberstad.com'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 1926,
    "private": 0xed,
    "public": 0x1c,
    scripthash: 0x58
  }
});

var testnet$4 = /*#__PURE__*/_extends({}, common$5, {
  id: '42F98C13-879E-46DB-8DFE-17F6611D1700',
  network: 'testnet',
  unit: 'TCITY',
  hashGenesisBlock: '00077765f625cc2cb6266544ff7d5a462f25be14ea1116dc2bd2fec17e40a5e3',
  port: 24333,
  portRpc: 24334,
  protocol: {
    magic: 0x43545401
  },
  seedsDns: ['testseed.city-chain.org', 'testseed.city-coin.org', 'testseed.citychain.foundation'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 1926,
    "private": 0xc2,
    "public": 0x42,
    scripthash: 0xc4
  }
});

var city = {
  mainnet: mainnet$5,
  testnet: testnet$4
};

var common$6 = {
  name: 'Dash',
  decimalPlaces: 1e8,
  unit: 'DASH',
  symbol: 'dash',
  // https://github.com/dashpay/dash/blob/master/src/qt/transactionrecord.h#L103
  confirmations: 6
};

var mainnet$6 = /*#__PURE__*/_extends({}, common$6, {
  id: '6C9306C2-B4A9-4FF2-B2FB-9ABA8EAABEC3',
  network: 'mainnet',
  hashGenesisBlock: '00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6',
  // nDefaultPort
  port: 9999,
  portRpc: 9998,
  protocol: {
    magic: 0xbd6b0cbf
  },
  // vSeeds
  seedsDns: ['dash.org', 'dnsseed.dash.org', 'dashdot.io', 'dnsseed.dashdot.io', 'masternode.io', 'dnsseed.masternode.io', 'dashpay.io', 'dnsseed.dashpay.io'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 5,
    "private": 0xcc,
    "public": 0x4c,
    scripthash: 0x10
  }
});

var testnet$5 = /*#__PURE__*/_extends({}, common$6, {
  id: 'EEE5B077-CCBF-4BB7-B885-8037BFA58C3D',
  network: 'testnet',
  hashGenesisBlock: '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
  port: 19999,
  portRpc: 19998,
  seedsDns: ['dashdot.io', 'testnet-seed.dashdot.io', 'masternode.io', 'test.dnsseed.masternode.io'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x8c,
    scripthash: 0x13
  }
});

var dash = {
  mainnet: mainnet$6,
  testnet: testnet$5
};

var common$7 = {
  name: 'Decred',
  unit: 'DCR',
  symbol: 'dcr',
  decimalPlaces: 1e8
};

// https://github.com/decred/dcrd/blob/ef71103c95cbf77e5a0418e3d413b5906e710b25/chaincfg/params.go
// https://github.com/decred/bitcore/blob/a92381b2b0023b28a1b7eb03e6cb0bfb7800200d/lib/networks.js
var mainnet$7 = /*#__PURE__*/_extends({}, common$7, {
  id: '62FF2E12-60EA-4C2F-B0BD-C0526403F53D',
  network: 'mainnet',
  hashGenesisBlock: '298e5cc3d985bfe7f81dc135f360abe089edd4396b86d2de66b0cef42b21d980',
  port: 9108,
  portRpc: 9109,
  protocol: {
    magic: 0xf900b4d9
  },
  seedsDns: ['mainnet-seed.decred.mindcry.org', 'mainnet-seed.decred.netpurgatory.com', 'mainnet.decredseed.org', 'mainnet-seed.decred.org'],
  versions: {
    bip32: {
      "private": 0x02fda4e8,
      "public": 0x02fda926
    },
    bip44: 42,
    "private": 0x22de,
    "public": 0x073f,
    scripthash: 0x071a
  }
});

var testnet$6 = /*#__PURE__*/_extends({}, common$7, {
  id: '34DEA8C5-553E-45A7-96ED-399B47E6F37F',
  network: 'testnet',
  hashGenesisBlock: '5b7466edf6739adc9b32aaedc54e24bdc59a05f0ced855088835fe3cbe58375f',
  port: 19108,
  portRpc: 19109,
  protocol: {
    magic: 0x48e7a065
  },
  seedsDns: ['testnet-seed.decred.mindcry.org', 'testnet-seed.decred.netpurgatory.org', 'testnet.decredseed.org', 'testnet-seed.decred.org'],
  versions: {
    bip32: {
      "private": 0x04358397,
      "public": 0x043587d1
    },
    bip44: 42,
    "private": 0x230e,
    "public": 0x0f21,
    scripthash: 0x0efc
  }
});

var dcr = {
  mainnet: mainnet$7,
  testnet: testnet$6
};

var common$8 = {
  name: 'Denarius',
  unit: 'DNR',
  symbol: 'd',
  decimalPlaces: 1e8,
  // https://github.com/metaspartan/denarius/blob/master/src/qt/transactionrecord.h#L75
  confirmations: 10
};

var mainnet$8 = /*#__PURE__*/_extends({}, common$8, {
  id: '61A4CD94-9D81-4FDF-88B9-E1FA3693B597',
  network: 'mainnet',
  hashGenesisBlock: '00000d5dbbda01621cfc16bbc1f9bf3264d641a5dbf0de89fd0182c2c4828fcd',
  port: 33339,
  portRpc: 32339,
  protocol: {
    magic: 0xb4eff2fa
  },
  seedsDns: ['denariusexplorer.org', 'denarius.host', 'denarius.tech', 'denarius.network'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 116,
    "private": 0x9e,
    "public": 0x1e,
    scripthash: 0x5a
  }
});

var testnet$7 = /*#__PURE__*/_extends({}, common$8, {
  id: 'E6AFFDB1-89FD-4D13-B044-109750E6AC0A',
  network: 'testnet',
  hashGenesisBlock: '000086bfe8264d241f7f8e5393f747784b8ca2aa98bdd066278d590462a4fdb4',
  port: 33368,
  portRpc: 32368,
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0x8c,
    "public": 0x12,
    scripthash: 0x74
  }
});

var dnr = {
  mainnet: mainnet$8,
  testnet: testnet$7
};

var common$9 = {
  name: 'DigiByte',
  decimalPlaces: 1e8,
  unit: 'DGB',
  symbol: 'dgb',
  // https://github.com/DigiByte-Core/digibyte/blob/develop/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$9 = /*#__PURE__*/_extends({}, common$9, {
  id: '99A8045D-48AB-4818-88F3-D5DC90D51609',
  network: 'mainnet',
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 12024,
  portRpc: 14022,
  protocol: {
    // pchMessageStart
    magic: 0xfac3b6da
  },
  bech32: 'dgb',
  // vSeeds
  seedsDns: ['seed.digibyte.io', 'digiexplorer.info', 'digihash.co'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 20,
    "private": 0x80,
    "public": 0x1e,
    scripthash: 0x3f,
    scripthash2: 0x05
  }
});

var dgb = {
  mainnet: mainnet$9
};

var common$a = {
  name: 'Digital Note',
  unit: 'XDN',
  symbol: 'xdn',
  decimalPlaces: 1e8,
  messagePrefix: '\x16Digital Note Signed Message:\n',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/qt/transactionrecord.h#L86
  confirmations: 10
};

var mainnet$a = /*#__PURE__*/_extends({}, common$a, {
  id: '9D224C99-16BC-48E2-93EC-24FE78EFA1E0',
  network: 'mainnet',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L85
  hashGenesisBlock: '0x00000d8e7d39218c4c02132e95a3896d46939b9b95624cf9dd2b0b794e6c216a',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L52
  port: 18092,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L53C3
  portRpc: 18094,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L46
  protocol: {
    magic: 0xe39caf21
  },
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L95
  seedsDns: ['103.164.54.203', '192.241.147.56', '20.193.89.74', '161.97.92.102', '161.97.106.85', '62.171.150.246', '138.197.161.183', '157.230.107.144', '188.166.123.46', '159.203.14.113', '199.175.54.187', 'seed1n.digitalnote.biz', 'seed2n.digitalnote.biz', 'seed3n.digitalnote.biz', 'seed4n.digitalnote.biz'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L93
      "private": 0x0488ade4,
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L92
      "public": 0x0488b21e
    },
    bip44: 287,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L90C36
    "private": 0x8e,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L88
    "public": 0x5a,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/cmainparams.cpp#L89
    scripthash: 0x8c
  }
});

var testnet$8 = /*#__PURE__*/_extends({}, common$a, {
  id: 'E3052A5E-648B-4A79-A48B-AFA4C3CCD175',
  network: 'testnet',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp
  hashGenesisBlock: '0x000510a669c8d36db04317fa98f7bf183d18c96cef5a4a94a6784a2c47f92e6c',
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L28
  port: 28092,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L29C2
  portRpc: 28094,
  // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L21
  protocol: {
    magic: 0xf41cbc42
  },
  seedsDns: [],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L57
      "private": 0x04358394,
      // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L56
      "public": 0x043587cf
    },
    bip44: 1,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L54
    "private": 0x66,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L52
    "public": 0x5b,
    // https://github.com/DigitalNoteXDN/DigitalNote-2/blob/master/src/ctestnetparams.cpp#L53
    scripthash: 0x64
  }
});

var xdn = {
  mainnet: mainnet$a,
  testnet: testnet$8
};

var common$b = {
  name: 'Dogecoin',
  unit: 'DOGE',
  symbol: 'doge',
  decimalPlaces: 1e8,
  // https://github.com/dogecoin/dogecoin/blob/master/src/validation.cpp#L102
  messagePrefix: 'Dogecoin Signed Message:\n',
  // https://github.com/dogecoin/dogecoin/blob/master/src/qt/transactionrecord.h#L83
  confirmations: 6
};

var mainnet$b = /*#__PURE__*/_extends({}, common$b, {
  id: 'A601CBA6-D882-4377-A959-8B606EE8EF1C',
  network: 'mainnet',
  hashGenesisBlock: '1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691',
  port: 22556,
  portRpc: 22555,
  protocol: {
    magic: 0xc0c0c0c0
  },
  seedsDns: ['seed.multidoge.org', 'seed2.multidoge.org'],
  versions: {
    bip32: {
      "private": 0x02fac398,
      "public": 0x02facafd
    },
    bip44: 3,
    "private": 0x9e,
    "public": 0x1e,
    scripthash: 0x16
  }
});

var testnet$9 = /*#__PURE__*/_extends({}, common$b, {
  id: '760C254C-AFAF-4C7E-BE95-B7EAFA302F7D',
  network: 'testnet',
  hashGenesisBlock: 'bb0a78264637406b6360aad926284d544d7049f45189db5664f3c4d07350559e',
  port: 44556,
  portRpc: 44555,
  protocol: {
    magic: 0xfcc1b7dc
  },
  seedsDns: ['testseed.jrn.me.uk'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xf1,
    "public": 0x71,
    scripthash: 0xc4
  }
});

var doge = {
  mainnet: mainnet$b,
  testnet: testnet$9
};

var common$c = {
  name: 'Evrmore',
  unit: 'EVR',
  symbol: 'evr',
  decimalPlaces: 1e8,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/validation.cpp#L131
  messagePrefix: 'Evrmore Signed Message:\n',
  // https://github.com/EvrmoreOrg/Evrmore/blob/0bbfe1813cda36190458dd69b1a0418357d30598/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$c = /*#__PURE__*/_extends({}, common$c, {
  id: '3E6BE753-F659-4D53-BF0E-AD550513836D',
  network: 'mainnet',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L262
  hashGenesisBlock: '0000007b11d0481b2420a7c656ef76775d54ab5b29ee7ea250bc768535693b05',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L242
  port: 8820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L37
  portRpc: 8819,
  protocol: {
    magic: 0x4d525645
  },
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L268
  seedsDns: ['seed-mainnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L278
    bip44: 175,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L272
    "private": 0x80,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L270
    "public": 0x21,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L271
    scripthash: 0x5c
  }
});

var testnet$a = /*#__PURE__*/_extends({}, common$c, {
  id: '6A37B111-864F-4104-B396-C6CD7B15A5FA',
  network: 'testnet',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L418
  hashGenesisBlock: '00000044bc03f8460e64bc07b080f4929b1cb96fda46b8bd806e57bfb9db82f4',
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L399
  port: 18820,
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparamsbase.cpp#L49
  portRpc: 18819,
  protocol: {
    magic: 0x54525645
  },
  // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L427
  seedsDns: ['seed-testnet-evr.evrmorecoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L431
    "private": 0xef,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L429
    "public": 0x6f,
    // https://github.com/EvrmoreOrg/Evrmore/blob/develop/src/chainparams.cpp#L430
    scripthash: 0xc4
  }
});

var evr = {
  mainnet: mainnet$c,
  testnet: testnet$a
};

var common$d = {
  name: 'Feathercoin',
  unit: 'FTC',
  symbol: 'ftc',
  decimalPlaces: 1e8,
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/util/validation.cpp#L20
  messagePrefix: 'Feathercoin Signed Message:\n',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$d = /*#__PURE__*/_extends({}, common$d, {
  id: '8B98D6C8-6CAD-4C3E-8545-1D41E309C813',
  network: 'mainnet',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L113
  hashGenesisBlock: '0x12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L99
  port: 9336,
  // https://github.com/FeatherCoin/Feathercoin/blob/f94c95a81204e7d7d0bda48a027cfa8f2fd9b02d/src/chainparamsbase.cpp#L39
  portRpc: 9337,
  protocol: {
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L88
    magic: 0x211a1541
  },
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L121
  seedsDns: ['dnsseed.feathercoin.com', 'dnsseed1.feathercoin.com', 'dnsseed.alltheco.in', 'dnsseed.bushstar.co.uk'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L130
      "private": 0x0488daee,
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L129
      "public": 0x0488bc26
    },
    bip44: 8,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L128
    "private": 0x8e,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L126
    "public": 0xe0,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L127
    scripthash: 0x50
  }
});

var testnet$b = /*#__PURE__*/_extends({}, common$d, {
  id: '3AB92BB0-BDC3-4FC1-AB47-7943CA13D064',
  network: 'testnet',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L221
  hashGenesisBlock: '0x79e4683a94fb0374ac9d52638b594dcf0318975acb8b275e280f93c082c0964c',
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L208
  port: 19336,
  // https://github.com/FeatherCoin/Feathercoin/blob/f94c95a81204e7d7d0bda48a027cfa8f2fd9b02d/src/chainparamsbase.cpp#L41
  portRpc: 19337,
  protocol: {
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L198
    magic: 0x716a6591
  },
  // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L227
  seedsDns: ['testnet-explorer2.feathercoin.com', 'testnet-dnsseed.feathercoin.com'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L234
      "private": 0x04358394,
      // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L233
      "public": 0x043587c
    },
    bip44: 1,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L232
    "private": 0xef,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L230
    "public": 0x6f,
    // https://github.com/FeatherCoin/Feathercoin/blob/master/src/chainparams.cpp#L231
    scripthash: 0xc4
  }
});

var ftc = {
  mainnet: mainnet$d,
  testnet: testnet$b
};

var common$e = {
  name: 'Groestlcoin',
  decimalPlaces: 1e8,
  unit: 'GRS',
  symbol: 'grs',
  // https://github.com/Groestlcoin/groestlcoin/blob/9588fb9abd581778cfe92ffbeb14fc23c33daa50/src/util/message.cpp#L24
  messagePrefix: 'GroestlCoin Signed Message:\n',
  messagePrefixAlts: ['\x1CGroestlCoin Signed Message:\n', "\x1CGroestlCoin Signed Message:\n"],
  // https://github.com/Groestlcoin/groestlcoin/blob/9588fb9abd581778cfe92ffbeb14fc23c33daa50/src/qt/transactionrecord.h#L75
  confirmations: 6
};

var mainnet$e = /*#__PURE__*/_extends({}, common$e, {
  id: '00D080B5-3063-49FE-B886-61D3248760BA',
  network: 'mainnet',
  hashGenesisBlock: '00000ac5927c594d49cc0bdb81759d0da8297eb614683d3acb62f0703b639023',
  // nDefaultPort
  port: 1331,
  portRpc: 1441,
  protocol: {
    // pchMessageStart
    magic: 0xd4b4bef9
  },
  bech32: 'grs',
  // vSeeds
  seedsDns: ['dnsseed1.groestlcoin.org', 'dnsseed2.groestlcoin.org', 'dnsseed3.groestlcoin.org', 'dnsseed4.groestlcoin.org'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 17,
    "private": 0x80,
    "public": 0x24,
    scripthash: 0x05
  }
});

var testnet$c = /*#__PURE__*/_extends({}, common$e, {
  id: '732A7C65-27B7-4661-A3CB-EC2851EC0C8E',
  network: 'testnet',
  hashGenesisBlock: '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 17777,
  portRpc: 17766,
  protocol: {
    magic: 0x0709110b
  },
  bech32: 'tgrs',
  seedsDns: ['testnet-seed1.groestlcoin.org', 'testnet-seed2.groestlcoin.org'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var regtest$3 = /*#__PURE__*/_extends({}, common$e, {
  id: '5A12F31D-818D-4354-84B9-E673771A2FD4',
  network: 'regtest',
  hashGenesisBlock: '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 18888,
  portRpc: 18443,
  protocol: {
    magic: 0xdab5bffa
  },
  bech32: 'grsrt',
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var grs = {
  mainnet: mainnet$e,
  testnet: testnet$c,
  regtest: regtest$3
};

var common$f = {
  name: 'Litecoin',
  unit: 'LTC',
  symbol: 'ltc',
  decimalPlaces: 1e8,
  /** https://github.com/litecoin-project/litecoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Litecoin Signed Message:\n',
  // https://github.com/litecoin-project/litecoin/blob/8925697f15f716da94c510c63b2fe7dac852cb0b/src/wallet/txrecord.h#L81
  confirmations: 6
};

var mainnet$f = /*#__PURE__*/_extends({}, common$f, {
  id: 'F91D36AB-BBE4-4C35-A3BD-2C3418071883',
  network: 'mainnet',
  hashGenesisBlock: '12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
  port: 9333,
  portRpc: 9332,
  protocol: {
    magic: 0xdbb6c0fb
  },
  bech32: 'ltc',
  seedsDns: ['dnsseed.litecointools.com', 'dnsseed.litecoinpool.org', 'dnsseed.ltc.xurious.com', 'dnsseed.koin-project.com', 'dnsseed.weminemnc.com'],
  versions: {
    bip32: {
      "private": 0x019d9cfe,
      "public": 0x019da462
    },
    bip44: 2,
    "private": 0xb0,
    "public": 0x30,
    scripthash: 0x32,
    scripthash2: 0x05
  }
});

var testnet$d = /*#__PURE__*/_extends({}, common$f, {
  id: 'AEE56E37-B187-403F-8CF1-5D18BF7ED553',
  network: 'testnet',
  hashGenesisBlock: 'f5ae71e26c74beacc88382716aced69cddf3dffff24f384e1808905e0188f68f',
  port: 19335,
  portRpc: 19332,
  bech32: 'tltc',
  versions: {
    bip32: {
      "private": 0x0436ef7d,
      "public": 0x0436f6e1
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0x3a,
    scripthash2: 0xc4
  }
});

var ltc = {
  mainnet: mainnet$f,
  testnet: testnet$d
};

var common$g = {
  name: 'MeowCoin',
  unit: 'MEWC',
  symbol: 'mewc',
  decimalPlaces: 1e8,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/validation.cpp
  messagePrefix: 'Meowcoin Signed Message:\n',
  // TODO: update to meowpow
  algorithm: 'kawpow',
  // https://github.com/Meowcoin-Foundation/Meowcoin/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$g = /*#__PURE__*/_extends({}, common$g, {
  id: '340D72AA-B588-4AE4-9B08-99E65A61EB5F',
  network: 'mainnet',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L178
  hashGenesisBlock: '0x000000edd819220359469c54f2614b5602ebc775ea67a64602f354bdaa320f70',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L172
  port: 8788,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 9766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L168
    magic: 0x4357454d
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L183
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L194
    bip44: 1669,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L189
    "private": 0x70,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L187
    "public": 0x32,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L188
    scripthash: 0x7a
  }
});

var testnet$e = /*#__PURE__*/_extends({}, common$g, {
  id: '457C71FE-A732-4208-A469-22FD6107EE8C',
  network: 'testnet',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L348
  hashGenesisBlock: '0x000000eaab417d6dfe9bd75119972e1d07ecfe8ff655bef7c2acb3d9a0eeed81',
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L340
  port: 4568,
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 19766,
  protocol: {
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L336
    magic: 0x6377656d
  },
  // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L353
  seedsDns: ['66.42.117.31', '167.179.94.220'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L358
    "private": 0x72,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L356
    "public": 0x6d,
    // https://github.com/JustAResearcher/Meowcoin/blob/master/src/chainparams.cpp#L357
    scripthash: 0x7c
  }
});

var mewc = {
  mainnet: mainnet$g,
  testnet: testnet$e
};

var common$h = {
  name: 'MonaCoin',
  unit: 'MONA',
  symbol: 'mona',
  decimalPlaces: 1e8,
  /** https://github.com/monacoinproject/monacoin/blob/master-0.20.3/src/util/message.cpp#L22 */
  messagePrefix: 'Monacoin Signed Message:\n',
  // https://github.com/monacoinproject/monacoin/blob/master-0.20.3/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$h = /*#__PURE__*/_extends({}, common$h, {
  id: '05F722D9-6B36-4474-B4BF-253BE19CD08B',
  network: 'mainnet',
  hashGenesisBlock: 'ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6',
  port: 9401,
  portRpc: 9402,
  protocol: {
    magic: 0xdbb6c0fb
  },
  bech32: 'mona',
  seedsDns: ['dnsseed.monacoin.org'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 22,
    "private": 0xb0,
    private2: 0xb2,
    "public": 0x32,
    scripthash: 0x37,
    scripthash2: 0x05
  }
});

var testnet$f = /*#__PURE__*/_extends({}, common$h, {
  id: '35512833-0D1A-4F0F-B0ED-135BF6F1D30D',
  network: 'testnet',
  hashGenesisBlock: 'a2b106ceba3be0c6d097b2a6a6aacf9d638ba8258ae478158f449c321061e0b2',
  port: 19403,
  portRpc: 19402,
  protocol: {
    magic: 0xf1c8d2fd
  },
  bech32: 'tmona',
  seedsDns: ['testnet-dnsseed.monacoin.org'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0x75,
    scripthash2: 0xc4
  }
});

var mona = {
  mainnet: mainnet$h,
  testnet: testnet$f
};

var common$i = {
  name: 'Namecoin',
  unit: 'NMC',
  symbol: 'nmc',
  decimalPlaces: 1e8,
  /** https://github.com/namecoin/namecoin-core/blob/master/src/util/message.cpp#L25 */
  messagePrefix: 'Namecoin Signed Message:\n',
  // https://github.com/namecoin/namecoin-core/blob/master/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$i = /*#__PURE__*/_extends({}, common$i, {
  id: 'A48ADAD7-E9E8-4A60-88B3-0A3371822C4B',
  network: 'mainnet',
  hashGenesisBlock: '000000000062b72c5e2ceb45fbc8587e807c155b0da735e6483dfba2f0a9c770',
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L48
  port: 8334,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L48
  portRpc: 8336,
  seedsDns: ['seed.namecoin.libreisp.se', 'nmc.seed.quisquis.de', 'seed.nmc.markasoftware.com', 'dnsseed1.nmc.dotbit.zone', 'dnsseed2.nmc.dotbit.zone', 'dnsseed.nmc.testls.space'],
  versions: {
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L166
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 7,
    "private": 0xb4,
    "public": 0x34,
    scripthash: 0x05
  }
});

var testnet$g = /*#__PURE__*/_extends({}, common$i, {
  id: 'CC712380-530A-4612-879D-40096E5B7919',
  network: 'testnet',
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L319
  hashGenesisBlock: '00000007199508e34a9ff81e6ec0c477a4cccff2a4767a8eee39c11db367b008',
  //  https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  port: 18334,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparamsbase.cpp#L50
  portRpc: 18336,
  // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L325
  seedsDns: ['dnsseed.test.namecoin.webbtc.com', 'ncts.roanapur.info'],
  versions: {
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L166
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 7,
    // https://github.com/namecoin/namecoin-core/blob/e17ed0e82e5d7696018a83f8a1df75a54355a22d/src/chainparams.cpp#L327
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var nmc = {
  mainnet: mainnet$i,
  testnet: testnet$g
};

var common$j = {
  name: 'Navcoin',
  unit: 'NAV',
  symbol: 'nav',
  decimalPlaces: 1e8,
  // https://github.com/navcoin/navcoin/blob/master/src/util/message.cpp#L25
  messagePrefix: 'Navcoin Signed Message:\n'
};

var mainnet$j = /*#__PURE__*/_extends({}, common$j, {
  id: '9BBB6BBE-D8E4-4EB6-AA38-FBAAB65627BA',
  network: 'mainnet',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L294
  hashGenesisBlock: '0x00006a4e3e18c71c6d48ad6c261e2254fa764cf29607a4357c99b712dfbb8e6a',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L286C3
  port: 44440,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 44444,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L281
  protocol: {
    magic: 0x80503420
  },
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L309
  seedsDns: ['seed.nav.community', 'seed2.nav.community'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L307C50
      "private": 0x0488ade4,
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L306C19
      "public": 0x0488b21e
    },
    // https://github.com/michaelmcshinsky/slips/blob/master/slip-0044.md
    bip44: 130,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L305C26
    "private": 0x96,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L297C4-L297C4
    "public": 0x35,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L303C42
    scripthash: 0x55
  }
});

var testnet$h = /*#__PURE__*/_extends({}, common$j, {
  id: 'BB7AADDB-AE77-4E82-9FEB-34CD9A66BA1C',
  network: 'testnet',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L569
  hashGenesisBlock: '0x0000f8186df4648c46f445a25decd423fa6b62ed220849093f73f6f364116894',
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L564
  port: 15556,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparamsbase.cpp
  portRpc: 44445,
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L560
  protocol: {
    magic: 0x3224f207
  },
  // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L588
  seedsDns: ['testseed.nav.community', 'testseed.navcoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L604C13
      "private": 0x4088da4e,
      // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L603
      "public": 0x40882be1
    },
    bip44: 1,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L602C10
    "private": 0xef,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L594
    "public": 0x6f,
    // https://github.com/navcoin/navcoin-core/blob/master/src/chainparams.cpp#L600C30
    scripthash: 0xc4
  }
});

var nav = {
  mainnet: mainnet$j,
  testnet: testnet$h
};

var common$k = {
  name: 'Neurai',
  unit: 'XNA',
  symbol: 'xna',
  decimalPlaces: 1e8,
  // https://github.com/NeuraiProject/Neurai/blob/main/src/validation.cpp#L129
  messagePrefix: 'Neurai Signed Message:\n',
  // https://github.com/NeuraiProject/Neurai/blob/main/src/qt/transactionrecord.h#L89
  confirmations: 6
};

var mainnet$k = /*#__PURE__*/_extends({}, common$k, {
  id: '94C49B3B-2C88-4408-B566-3D277C596778',
  network: 'mainnet',
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L179
  hashGenesisBlock: '00000044d33c0c0ba019be5c0249730424a69cb4c222153322f68c6104484806',
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L172
  port: 19000,
  // https://github.com/NeuraiProject/Neurai/blob/main/src//chainparamsbase.cpp#L36
  portRpc: 19001,
  protocol: {
    magic: 0x5255454e
  },
  // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L182
  seedsDns: ['seed1.neurai.org', 'seed2.neurai.org', 'neurai-ipv4.neuraiexplorer.com'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L200
    bip44: 0,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L195
    "private": 0x80,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L193
    "public": 0x35,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L194
    scripthash: 0x75
  }
});

var testnet$i = /*#__PURE__*/_extends({}, common$k, {
  id: '1EB2ACBA-E8E0-4970-BB20-37DA4B70F6A6',
  network: 'testnet',
  hashGenesisBlock: '0000006af8b8297448605b0283473ec712f9768f81cc7eae6269b875dee3b0cf',
  port: 19100,
  portRpc: 19101,
  protocol: {
    magic: 0x4e455552
  },
  seedsDns: ['testnet1.neuracrypt.org', 'testnet2.neuracrypt.org', 'testnet3.neuracrypt.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 0,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L423
    "private": 0xef,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L359
    "public": 0xeb,
    // https://github.com/NeuraiProject/Neurai/blob/main/src/chainparams.cpp#L422
    scripthash: 0xc4
  }
});

var xna = {
  mainnet: mainnet$k,
  testnet: testnet$i
};

var common$l = {
  name: 'NuBits',
  decimalPlaces: 1e6,
  unit: 'NBT',
  symbol: 'nbt',
  // https://bitbucket.org/NuNetwork/nubits/src/919a76e59e3c88dc8c0b7c72f2032db159eba678/src/qt/transactionrecord.h#lines-78
  confirmations: 6
};

var mainnet$l = /*#__PURE__*/_extends({}, common$l, {
  id: 'BCC65F82-A57C-4F18-8407-39FB4030F94E',
  network: 'mainnet',
  hashGenesisBlock: '000003cc2da5a0a289ad0a590c20a8b975219ddc1204efd169e947dd4cbad73f',
  // nDefaultPort
  port: 7890,
  portRpc: 14002,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9
  },
  // vSeeds
  seedsDns: [],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 12,
    "private": 0x96,
    "public": 0x19,
    scripthash: 0x1a
  }
});

var nbt = {
  mainnet: mainnet$l
};

var common$m = {
  name: 'Peercoin',
  decimalPlaces: 1e6,
  unit: 'PPC',
  symbol: 'ppc',
  /** https://github.com/peercoin/peercoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Peercoin Signed Message:\n',
  messagePrefixAlts: ['\x18Peercoin Signed Message:\n'],
  // https://github.com/peercoin/peercoin/blob/master/src/qt/transactionrecord.h#L86
  confirmations: 6
};

var mainnet$m = /*#__PURE__*/_extends({}, common$m, {
  id: 'DA217E32-4468-443D-992F-08E7A8292346',
  network: 'mainnet',
  hashGenesisBlock: '0000000032fe677166d54963b62a4677d8957e87c508eaa4fd7eb1c880cd27e3',
  // nDefaultPort
  port: 9901,
  portRpc: 9902,
  protocol: {
    // pchMessageStart
    magic: 0xe5e9e8e6
  },
  // vSeeds
  seedsDns: [
  // net.cpp:1209
  'seed.peercoin.net', 'seed2.peercoin.net', 'seed.peercoin-library.org', 'ppcseed.ns.7server.net'],
  versions: {
    // not implemented in Peercoin <= v0.7.x nodes, only 3rd party wallets
    // https://github.com/jmacwhyte/recovery-phrase-recovery/blob/52073aba08e9d01032c0b5aff8c682911fe2e5fc/js/bitcoinjs-extensions.js#L58
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 6,
    "private": 0xb7,
    "public": 0x37,
    scripthash: 0x75
  }
});

var testnet$j = /*#__PURE__*/_extends({}, common$m, {
  id: '83D6D590-B6E0-40A6-AB07-3756618DEF92',
  network: 'testnet',
  hashGenesisBlock: '00000001f757bb737f6596503e17cd17b0658ce630cc727c0cca81aec47c9f06',
  port: 9903,
  portRpc: 9904,
  protocol: {
    magic: 0xefc0f2cb
  },
  seedsDns: ['tseed.peercoin.net', 'tseed2.peercoin.net', 'tseed.peercoin-library.org'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var ppc = {
  mainnet: mainnet$m,
  testnet: testnet$j
};

var common$n = {
  name: 'Pigeoncoin',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/fbb9aa8fd750085e9d1aded6feb8eb23002c2acf/src/policy/feerate.cpp#L10
  unit: 'PGN',
  symbol: 'pgn',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/amount.h#L14
  decimalPlaces: 1e8,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/validation.cpp#L119
  messagePrefix: 'DarkCoin Signed Message:\n',
  messageName: 'DarkCoin',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/qt/transactionrecord.h#L103
  confirmations: 6
};

var mainnet$n = /*#__PURE__*/_extends({}, common$n, {
  id: '43D9A3E2-1D4A-420F-BF0B-503E15BCB211',
  network: 'mainnet',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L345
  hashGenesisBlock: '0x000000f049bef9fec0179131874c54c76c0ff59f695db30a4f0da52072c99492',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L513C24-L513C29
  port: 18757,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 9998,
  protocol: {
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L336
    magic: 0x3c2b3327
  },
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L348
  seedsDns: ['165.232.173.117', '161.35.4.115', '159.89.177.213', '138.68.75.8', '47.151.7.226'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L358
      "private": 0x0877a12a,
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L357
      "public": 0x0877a12a
    },
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L360
    bip44: 5,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L356C22-L356C22
    "private": 0x80,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L354
    "public": 0x37,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L355
    scripthash: 0x7a
  }
});

var testnet$k = /*#__PURE__*/_extends({}, common$n, {
  id: 'C3359BC1-31DE-4176-87DF-9A5A3B09BC60',
  network: 'testnet',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L517C47-L517C113
  hashGenesisBlock: '0x000000a4d5d20f09a4cd9d47cae7e1bb056d46a1ba841ea19267341109f7b3a1',
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L513C24-L513C29
  port: 18757,
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 19998,
  protocol: {
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L508
    magic: 0x3c2b3327
  },
  // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L526
  seedsDns: ['45.63.29.105', '149.28.178.208'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L537
      "private": 0x03538891,
      // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L536
      "public": 0x035377ca
    },
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L540
    bip44: 1,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L534
    "private": 0xe9,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L530
    "public": 0x70,
    // https://github.com/Pigeoncoin/pigeoncoin/blob/master/src/chainparams.cpp#L532
    scripthash: 0xc1
  }
});

var pgn = {
  mainnet: mainnet$n,
  testnet: testnet$k
};

var common$o = {
  name: 'Qtum',
  unit: 'QTUM',
  symbol: 'qtum',
  decimalPlaces: 1e8,
  /** https://github.com/qtumproject/qtum/blob/631efb900d5372d957f66baa58cc800a460839ae/src/util/signstr.h#L14 */
  messagePrefix: 'Qtum Signed Message:\n',
  // https://github.com/qtumproject/qtum/blob/631efb900d5372d957f66baa58cc800a460839ae/src/qt/transactionrecord.h#L90
  confirmations: 10
};

var mainnet$o = /*#__PURE__*/_extends({}, common$o, {
  id: 'D39DB457-0B65-418D-86F1-2E811E5343E5',
  network: 'mainnet',
  hashGenesisBlock: '000075aef83cf2853580f8ae8ce6f8c3096cfa21d98334d6e3f95e5582ed986c',
  // nDefaultPort
  port: 3888,
  portRpc: 3889,
  protocol: {
    // pchMessageStart
    magic: 0xd3a6cff1
  },
  bech32: 'qc',
  // vSeeds
  seedsDns: ['qtum3.dynu.net', 'qtum5.dynu.net', 'qtum6.dynu.net', 'qtum7.dynu.net'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 2301,
    "private": 0x80,
    "public": 0x3a,
    scripthash: 0x32
  }
});

var qtum = {
  mainnet: mainnet$o
};

/* source: https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp */
var common$p = {
  name: 'Ravencoin',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/policy/feerate.cpp#L11
  unit: 'RVN',
  symbol: 'rvn',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/amount.h#L15
  decimalPlaces: 1e8,
  // https://github.com/RavenProject/Ravencoin/blob/c8197cd15d8886dc5c6121e3ba3f39c92445fc1b/src/validation.cpp#L129
  messagePrefix: '\x16Raven Signed Message:\n',
  algorithm: 'kawpow',
  // https://github.com/RavenProject/Ravencoin/blob/e48d932ec70267a62ec3541bdaf4fe022c149f0e/src/qt/transactionrecord.h#L88
  confirmations: 6
};

var mainnet$p = /*#__PURE__*/_extends({}, common$p, {
  id: 'A1AC99E9-7285-4C81-8FE6-BF298E32E597',
  network: 'mainnet',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L188
  hashGenesisBlock: '0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90',
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L181
  port: 8767,
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8766,
  protocol: {
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L177
    magic: 0x4e564152
  },
  // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L191
  seedsDns: ['seed-raven.bitactivate.com', 'seed-raven.ravencoin.com', 'seed-raven.ravencoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L199
      "private": 0x0488ade4,
      // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L198
      "public": 0x0488b21e
    },
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L202
    bip44: 175,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L197
    "private": 0x80,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L195
    "public": 0x3c,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L196
    scripthash: 0x7a
  }
});

var testnet$l = /*#__PURE__*/_extends({}, common$p, {
  id: 'C5546570-CE22-49CD-9F03-F55285B1D659',
  network: 'testnet',
  hashGenesisBlock: '000000ecfc5e6324a079542221d00e10362bdc894d56500c414060eea8a3ad5a',
  port: 18770,
  portRpc: 18766,
  protocol: {
    magic: 0x544e5652
  },
  seedsDns: ['seed-testnet-raven.bitactivate.com', 'seed-testnet-raven.ravencoin.com', 'seed-testnet-raven.ravencoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L423
    "private": 0xef,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L421
    "public": 0x6f,
    // https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp#L422
    scripthash: 0xc4
  }
});

var rvn = {
  mainnet: mainnet$p,
  testnet: testnet$l
};

var common$q = {
  name: 'ReddCoin',
  unit: 'RDD',
  symbol: 'rdd',
  decimalPlaces: 1e8,
  // https://github.com/reddcoin-project/reddcoin/blob/develop/src/qt/transactionrecord.h#L89
  confirmations: 6
};

var mainnet$q = /*#__PURE__*/_extends({}, common$q, {
  id: 'A0F1B6CA-5A6E-4D09-8334-EE5C9AC4C21D',
  network: 'mainnet',
  hashGenesisBlock: 'b868e0d95a3c3c0e0dadc67ee587aaf9dc8acbf99e3b4b3110fad4eb74c1decc',
  port: 45444,
  portRpc: 45443,
  seedsDns: ['seed.reddcoin.com', 'dnsseed01.redd.ink', 'dnsseed02.redd.ink', 'dnsseed03.redd.ink'],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L317
    bip32: {
      "private": 0x0488b21e,
      "public": 0x0488ade4
    },
    bip44: 4,
    "private": 0xbd,
    "public": 0x3d,
    scripthash: 0x05
  }
});

var testnet$m = /*#__PURE__*/_extends({}, common$q, {
  id: '86EC9D82-4A7C-4B99-8261-D185B898A5F1',
  network: 'testnet',
  hashGenesisBlock: 'a12ac9bd4cd26262c53a6277aafc61fe9dfe1e2b05eaa1ca148a5be8b394e35a',
  port: 55444,
  portRpc: 55443,
  seedsDns: ['testnet-seed.reddcoin.com', 'testnet-dnsseed.redd.ink'],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L384
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var rdd = {
  mainnet: mainnet$q,
  testnet: testnet$m
};

var common$r = {
  name: 'Rito',
  unit: 'RITO',
  symbol: 'rito',
  decimalPlaces: 1e8,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/validation.cpp#L113
  messagePrefix: 'Rito Signed Message:\n',
  algorithm: 'x21s',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/qt/transactionrecord.h#L92
  confirmations: 6
};

var mainnet$r = /*#__PURE__*/_extends({}, common$r, {
  id: '8587F97F-32F3-4F68-9426-447653FA183C',
  network: 'mainnet',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L161
  hashGenesisBlock: '00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L156
  port: 7342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L36
  portRpc: 8501,
  protocol: {
    magic: 0x2a7bc0a1
  },
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L164
  seedsDns: ['s1.ritocoin.org', 's2.ritocoin.org', 's3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 19169,
    "private": 0x8b,
    "public": 0x19,
    scripthash: 0x69
  }
});

var testnet$n = /*#__PURE__*/_extends({}, common$r, {
  id: '67BD4164-3115-4695-B728-F49FC1131110',
  network: 'testnet',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L318
  hashGenesisBlock: '0x00000075e344bdf1c0e433f453764b1830a7aa19b2a5213e707502a22b779c1b',
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L312
  port: 17342,
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparamsbase.cpp#L48
  portRpc: 18501,
  protocol: {
    magic: 0x514e5352
  },
  // https://github.com/RitoProject/Ritocoin/blob/master/src/chainparams.cpp#L324
  seedsDns: ['tn.s1.ritocoin.org', 'tn.s2.ritocoin.org', 'tn.s3.ritocoin.org'],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var rito = {
  mainnet: mainnet$r,
  testnet: testnet$n
};

var common$s = {
  name: 'Vertcoin',
  unit: 'VTC',
  symbol: 'vtc',
  decimalPlaces: 1e8,
  /** https://github.com/vertcoin-project/vertcoin-core/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Bitcoin Signed Message:\n',
  messageName: 'Bitcoin Signed Message:\n',
  // https://github.com/vertcoin-project/vertcoin-core/blob/master/src/qt/transactionrecord.h#L85
  confirmations: 6
};

var mainnet$s = /*#__PURE__*/_extends({}, common$s, {
  id: '14599957-98DD-4327-9B40-EABE9CD7D603',
  network: 'mainnet',
  hashGenesisBlock: '4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4',
  // nDefaultPort
  port: 5889,
  portRpc: 5888,
  protocol: {
    // pchMessageStart
    magic: 0xdab5bffa
  },
  bech32: 'vtc',
  // vSeeds
  seedsDns: ['useast1.vtconline.org', 'vtc.gertjaap.org', 'seed.vtc.bryangoodson.org', 'dnsseed.pknight.ca', 'seed.orderofthetaco.org', 'seed.alexturek.org', 'vertcoin.mbl.cash'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 28,
    "private": 0x80,
    "public": 0x47,
    scripthash: 0x05
  }
});

var testnet$o = /*#__PURE__*/_extends({}, common$s, {
  id: '3398E662-F917-4935-927E-EA518834C460',
  network: 'testnet',
  hashGenesisBlock: 'cee8f24feb7a64c8f07916976aa4855decac79b6741a8ec2e32e2747497ad2c9',
  port: 15889,
  portRpc: 15888,
  // portRpc: 18332,
  protocol: {
    magic: 0x74726576
  },
  bech32: 'tvtc',
  seedsDns: ['jlovejoy.mit.edu', 'gertjaap.ddns.net', 'fr1.vtconline.org', 'tvtc.vertcoin.org'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 28,
    "private": 0xef,
    "public": 0x4a,
    scripthash: 0xc4
  }
});

var regtest$4 = /*#__PURE__*/_extends({}, common$s, {
  id: '1F1F20A5-097A-43FC-8CCE-79BE5EB2ABE3',
  network: 'regtest',
  hashGenesisBlock: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  portRpc: 18332,
  protocol: {
    magic: 0xdab5bffa
  },
  seedsDns: [],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 28,
    "private": 0xef,
    "public": 0x6f,
    scripthash: 0xc4
  }
});

var vtc = {
  mainnet: mainnet$s,
  testnet: testnet$o,
  regtest: regtest$4
};

var common$t = {
  name: 'Viacoin',
  unit: 'VIA',
  symbol: 'via',
  decimalPlaces: 1e8,
  // https://github.com/viacoin/viacoin/blob/master/src/qt/transactionrecord.h#L84
  confirmations: 6
};

var mainnet$t = /*#__PURE__*/_extends({}, common$t, {
  id: 'EE2A1FE2-AC47-41EA-A0DF-7E7CBDCDF778',
  network: 'mainnet',
  hashGenesisBlock: '4e9b54001f9976049830128ec0331515eaabe35a70970d79971da1539a400ba1',
  port: 5223,
  portRpc: 5222,
  protocol: {
    magic: 0xcbc6680f
  },
  seedsDns: ['seed.viacoin.net', 'viaseeder.barbatos.fr', 'mainnet.viacoin.net'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 14,
    "private": 0xc7,
    "public": 0x47,
    scripthash: 0x21
  }
});

var testnet$p = /*#__PURE__*/_extends({}, common$t, {
  id: 'E9D78E61-AD75-4B33-B8F5-FCCB4FB7D843',
  network: 'testnet',
  hashGenesisBlock: '770aa712aa08fdcbdecc1c8df1b3e2d4e17a7cf6e63a28b785b32e74c96cb27d',
  port: 25223,
  portRpc: 25222,
  protocol: {
    magic: 0x92efc5a9
  },
  seedsDns: ['testnet.viacoin.net', 'seed-testnet.viacoin.net'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 1,
    "private": 0xff,
    "public": 0x7f,
    scripthash: 0xc4
  }
});

var via = {
  mainnet: mainnet$t,
  testnet: testnet$p
};

var common$u = {
  name: 'x42 Protocol',
  unit: 'X42',
  symbol: 'symbol',
  decimalPlaces: 1e8,
  consensus: 'PoS'
};

var mainnet$u = /*#__PURE__*/_extends({}, common$u, {
  id: 'D05BAF13-CF40-478E-8A9A-03765FD000F8',
  network: 'mainnet',
  unit: 'x42',
  hashGenesisBlock: '04ffe583707a96c1c2eb54af33a4b1dc6d9d8e09fea8c9a7b097ba88f0cb64c4',
  port: 52342,
  portRpc: 52343,
  protocol: {
    magic: 0x3526642
  },
  seedsDns: ['mainnet1.x42seed.host', 'mainnetnode1.x42seed.host', 'tech.x42.cloud', 'x42.seed.blockcore.net'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 424242,
    "private": 0xcb,
    "public": 0x4b,
    scripthash: 0x7d
  }
});

var testnet$q = /*#__PURE__*/_extends({}, common$u, {
  id: '5C61B20A-FD9D-435A-9304-D314E7F93A62',
  network: 'testnet',
  unit: 'Tx42',
  hashGenesisBlock: 'a92bf124a1e6f237015440d5f1e1999bdef8e321f2d3fdc367eb2f7733b17854',
  port: 62342,
  portRpc: 62343,
  protocol: {
    magic: 0x4526642
  },
  seedsDns: ['testnet1.x42seed.host'],
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 424242,
    "private": 0xc1,
    "public": 0x41,
    scripthash: 0xc4
  }
});

var x42 = {
  mainnet: mainnet$u,
  testnet: testnet$q
};

var common$v = {
  name: 'Zcash',
  unit: 'ZEC',
  symbol: 'zec',
  decimalPlaces: 1e8,
  /** https://github.com/zcash/zcash/blob/4792b1730a8d3c21c9a19fed809fdf8eb0ba35ca/src/main.cpp#L129 */
  messagePrefix: 'Zcash Signed Message:\n'
};

var mainnet$v = /*#__PURE__*/_extends({}, common$v, {
  id: 'ABADAA64-6BC6-490B-A6A3-67C038205319',
  network: 'mainnet',
  hashGenesisBlock: '00040fe8ec8471911baa1db1266ea15dd06b4a8a5c453883c000b031973dce08',
  // nDefaultPort
  port: 8233,
  portRpc: 8232,
  protocol: {
    // pchMessageStart
    magic: 0x6427e924
  },
  // vSeeds
  seedsDns: ['dnsseed.z.cash', 'dnsseed.str4d.xyz', 'dnsseed.znodes.org'],
  // base58Prefixes
  versions: {
    bip32: {
      "private": 0x0488ade4,
      "public": 0x0488b21e
    },
    bip44: 133,
    "private": 0x80,
    "public": 0x1cb8,
    scripthash: 0x1cbd
  }
});

var testnet$r = /*#__PURE__*/_extends({}, common$v, {
  id: '104F0CF8-016A-4BF5-9282-B071C6A2C34F',
  network: 'testnet',
  hashGenesisBlock: '0x05a60a92d99d85997cce3b87616c089f6124d7342af37106edc76126334a2c38',
  port: 18233,
  portRpc: 18232,
  protocol: {
    magic: 0xbff91afa
  },
  seedsDns: ['dnsseed.testnet.z.cash'],
  versions: {
    bip32: {
      "private": 0x04358394,
      "public": 0x043587cf
    },
    bip44: 133,
    "private": 0xef,
    "public": 0x1d25,
    scripthash: 0x1cba
  }
});

var zec = {
  mainnet: mainnet$v,
  testnet: testnet$r
};



var _chains = {
  __proto__: null,
  aitt: aitt,
  btc: btc,
  bch: bch,
  blk: blk,
  cbn: cbn,
  city: city,
  dash: dash,
  dcr: dcr,
  dnr: dnr,
  dgb: dgb,
  xdn: xdn,
  doge: doge,
  evr: evr,
  ftc: ftc,
  grs: grs,
  ltc: ltc,
  mewc: mewc,
  mona: mona,
  nmc: nmc,
  nav: nav,
  xna: xna,
  nbt: nbt,
  ppc: ppc,
  pgn: pgn,
  qtum: qtum,
  rvn: rvn,
  rdd: rdd,
  rito: rito,
  vtc: vtc,
  via: via,
  x42: x42,
  zec: zec
};

function toBitcoinJS(network) {
  var _network$messageName;
  return _extends({}, network, {
    messagePrefix: network.messagePrefix || '\x19' + ((_network$messageName = network == null ? void 0 : network.messageName) != null ? _network$messageName : network.name) + ' Signed Message:\n',
    bech32: network.bech32,
    bip32: {
      "public": network.versions.bip32["public"],
      "private": network.versions.bip32["private"]
    },
    pubKeyHash: network.versions["public"],
    scriptHash: network.versions.scripthash,
    wif: network.versions["private"],
    dustThreshold: null
  });
}
function toBitcore(network, name) {
  var _network$protocol$mag, _network$protocol;
  // reverse magic
  var buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE((_network$protocol$mag = network == null ? void 0 : (_network$protocol = network.protocol) == null ? void 0 : _network$protocol.magic) != null ? _network$protocol$mag : 0);
  var networkMagic = buf.readUInt32LE(0);
  var bitcoreName = name === 'testnet' || network.network === 'testnet' ? 'testnet' : 'livenet';
  var alias = name === 'testnet' || network.network === 'testnet' ? 'testnet' : 'mainnet';
  return _extends({}, network, {
    name: bitcoreName,
    alias: alias,
    pubkeyhash: network.versions["public"],
    privatekey: network.versions["private"],
    scripthash: network.versions.scripthash,
    xpubkey: network.versions.bip32["public"],
    xprivkey: network.versions.bip32["private"],
    networkMagic: networkMagic,
    port: network.port,
    dnsSeeds: network.seedsDns || []
  });
}
function findNetworkById(id) {
  for (var i = 0; i < Object.values(chains).length; i++) {
    var networks = Object.values(chains)[i];
    for (var f = 0; f < Object.values(networks).length; f++) {
      if (Object.values(networks)[f].id.toLowerCase() === id.toLowerCase()) {
        return Object.values(networks)[f];
      }
    }
  }
  return undefined;
}
function getChainIds(network) {
  return Object.keys(chains).reduce(function (acc, key) {
    var n = chains[key][network];
    if (n) {
      return [].concat(acc, [n.id]);
    }
    return acc;
  }, []);
}
function getChainNames() {
  return Object.keys(chains).reduce(function (acc, key) {
    var mainnet = chains[key].mainnet;
    return [].concat(acc, [mainnet.name]);
  }, []);
}
function getChainsByNetwork(network) {
  return Object.keys(chains).reduce(function (acc, key) {
    var n = chains[key][network];
    if (n) {
      return [].concat(acc, [n]);
    }
    return acc;
  }, []);
}

var chains = _chains;

export { aitt, bch, blk, btc, cbn, chains, city, dash, dcr, dgb, dnr, doge, evr, findNetworkById, ftc, getChainIds, getChainNames, getChainsByNetwork, grs, ltc, mewc, mona, nav, nbt, nmc, pgn, ppc, qtum, rdd, rito, rvn, toBitcoinJS, toBitcore, via, vtc, x42, xdn, xna, zec };
//# sourceMappingURL=chains.esm.js.map
