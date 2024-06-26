export declare type Bip32 = {
    private: number;
    public: number;
};
export declare type Versions = {
    bip32: Bip32;
    bip44?: number;
    private: number;
    private2?: number;
    public: number;
    scripthash: number;
    scripthash2?: number;
};
export declare type Common = {
    name: string;
    messageName?: string;
    unit: string;
    symbol: string;
    decimalPlaces: number;
    messagePrefix?: string;
    messagePrefixAlts?: string[];
    seedsDns?: string[];
    consensus?: Consensus;
    bech32?: string;
    algorithm?: Algorithm;
    confirmations?: number;
};
export declare type MainNet = Common & {
    id: string;
    network: 'mainnet';
    hashGenesisBlock: string;
    port: number;
    portRpc: number;
    protocol?: Record<string, number>;
    seedsDns: string[];
    versions: Versions;
};
export declare type TestNet = Common & {
    id: string;
    network: 'testnet';
    hashGenesisBlock: string;
    port: number;
    portRpc: number;
    protocol?: Record<string, number>;
    versions: Versions;
};
export declare type RegTest = Omit<TestNet, 'network'> & {
    network: 'regtest';
};
export declare type SimNet = Omit<TestNet, 'network'> & {
    network: 'simnet';
};
export declare type Network = MainNet | TestNet | RegTest | SimNet;
export declare type Networks = Record<string, Network>;
export declare type BitcoinJS = (MainNet | TestNet | RegTest | SimNet) & {
    bip32: Bip32;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
    dustThreshold: null;
};
export declare type BitCore = (MainNet | TestNet | RegTest | SimNet) & {
    name: string;
    alias: string;
    networkMagic: number;
    pubkeyhash: number;
    privatekey: number;
    xpubkey: number;
    xprivkey: number;
    dnsSeeds: string[];
};
export declare type Consensus = 'PoW' | 'PoS' | 'PoB' | 'DPoS' | 'PBFT' | 'PoET' | 'PoC' | 'PoA';
export declare type Algorithm = 'allium' | 'bcrypt' | 'bitcore' | 'blake' | 'blake2s' | 'boolberry' | 'c11' | 'cryptonight' | 'cryptonight_fast' | 'equihash' | 'firopow' | 'fresh' | 'fugue' | 'ghostrider' | 'groestl' | 'hefty1' | 'kawpow' | 'keccak' | 'lbry' | 'lyra2re' | 'lyra2z' | 'minotaur' | 'minotaurx' | 'neoscrypt' | 'nist5' | 'polytimos' | 'quark' | 'qubit' | 'scrypt' | 'scrypt-jane' | 'scrypt-n' | 'scryptjane' | 'scryptn' | 'sha1' | 'sha256d' | 'shavite3' | 'skein' | 'timetravel' | 'verthash' | 'x11' | 'x13' | 'x15' | 'x16r' | 'x16rt' | 'x16rv2' | 'x21s' | 'xevan' | 'zhash';
