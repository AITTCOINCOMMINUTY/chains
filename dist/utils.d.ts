import { BitcoinJS, MainNet, TestNet, RegTest, SimNet, Network } from './types/base';
export declare function toBitcoinJS(network: MainNet | TestNet | RegTest | SimNet): BitcoinJS;
export declare function toBitcore(network: MainNet | TestNet | RegTest | SimNet, name?: 'mainnet' | 'testnet' | 'regtest' | 'simnet'): {
    name: string;
    alias: string;
    pubkeyhash: number;
    privatekey: number;
    scripthash: number;
    xpubkey: number;
    xprivkey: number;
    networkMagic: number;
    port: number;
    dnsSeeds: string[];
    messageName?: string | undefined;
    unit: string;
    symbol: string;
    decimalPlaces: number;
    messagePrefix?: string | undefined;
    messagePrefixAlts?: string[] | undefined;
    seedsDns: string[];
    consensus?: "PoW" | "PoS" | "PoB" | "DPoS" | "PBFT" | "PoET" | "PoC" | "PoA" | undefined;
    bech32?: string | undefined;
    algorithm?: "allium" | "bcrypt" | "bitcore" | "blake" | "blake2s" | "boolberry" | "c11" | "cryptonight" | "cryptonight_fast" | "equihash" | "firopow" | "fresh" | "fugue" | "ghostrider" | "groestl" | "hefty1" | "kawpow" | "keccak" | "lbry" | "lyra2re" | "lyra2z" | "minotaur" | "minotaurx" | "neoscrypt" | "nist5" | "polytimos" | "quark" | "qubit" | "scrypt" | "scrypt-jane" | "scrypt-n" | "scryptjane" | "scryptn" | "sha1" | "sha256d" | "shavite3" | "skein" | "timetravel" | "verthash" | "x11" | "x13" | "x15" | "x16r" | "x16rt" | "x16rv2" | "x21s" | "xevan" | "zhash" | undefined;
    confirmations?: number | undefined;
    id: string;
    network: "mainnet";
    hashGenesisBlock: string;
    portRpc: number;
    protocol?: Record<string, number> | undefined;
    versions: import(".").Versions;
} | {
    name: string;
    alias: string;
    pubkeyhash: number;
    privatekey: number;
    scripthash: number;
    xpubkey: number;
    xprivkey: number;
    networkMagic: number;
    port: number;
    dnsSeeds: string[];
    messageName?: string | undefined;
    unit: string;
    symbol: string;
    decimalPlaces: number;
    messagePrefix?: string | undefined;
    messagePrefixAlts?: string[] | undefined;
    seedsDns?: string[] | undefined;
    consensus?: "PoW" | "PoS" | "PoB" | "DPoS" | "PBFT" | "PoET" | "PoC" | "PoA" | undefined;
    bech32?: string | undefined;
    algorithm?: "allium" | "bcrypt" | "bitcore" | "blake" | "blake2s" | "boolberry" | "c11" | "cryptonight" | "cryptonight_fast" | "equihash" | "firopow" | "fresh" | "fugue" | "ghostrider" | "groestl" | "hefty1" | "kawpow" | "keccak" | "lbry" | "lyra2re" | "lyra2z" | "minotaur" | "minotaurx" | "neoscrypt" | "nist5" | "polytimos" | "quark" | "qubit" | "scrypt" | "scrypt-jane" | "scrypt-n" | "scryptjane" | "scryptn" | "sha1" | "sha256d" | "shavite3" | "skein" | "timetravel" | "verthash" | "x11" | "x13" | "x15" | "x16r" | "x16rt" | "x16rv2" | "x21s" | "xevan" | "zhash" | undefined;
    confirmations?: number | undefined;
    id: string;
    network: "testnet";
    hashGenesisBlock: string;
    portRpc: number;
    protocol?: Record<string, number> | undefined;
    versions: import(".").Versions;
} | {
    name: string;
    alias: string;
    pubkeyhash: number;
    privatekey: number;
    scripthash: number;
    xpubkey: number;
    xprivkey: number;
    networkMagic: number;
    port: number;
    dnsSeeds: string[];
    symbol: string;
    messageName?: string | undefined;
    unit: string;
    decimalPlaces: number;
    messagePrefix?: string | undefined;
    messagePrefixAlts?: string[] | undefined;
    seedsDns?: string[] | undefined;
    consensus?: "PoW" | "PoS" | "PoB" | "DPoS" | "PBFT" | "PoET" | "PoC" | "PoA" | undefined;
    bech32?: string | undefined;
    algorithm?: "allium" | "bcrypt" | "bitcore" | "blake" | "blake2s" | "boolberry" | "c11" | "cryptonight" | "cryptonight_fast" | "equihash" | "firopow" | "fresh" | "fugue" | "ghostrider" | "groestl" | "hefty1" | "kawpow" | "keccak" | "lbry" | "lyra2re" | "lyra2z" | "minotaur" | "minotaurx" | "neoscrypt" | "nist5" | "polytimos" | "quark" | "qubit" | "scrypt" | "scrypt-jane" | "scrypt-n" | "scryptjane" | "scryptn" | "sha1" | "sha256d" | "shavite3" | "skein" | "timetravel" | "verthash" | "x11" | "x13" | "x15" | "x16r" | "x16rt" | "x16rv2" | "x21s" | "xevan" | "zhash" | undefined;
    confirmations?: number | undefined;
    id: string;
    hashGenesisBlock: string;
    portRpc: number;
    protocol?: Record<string, number> | undefined;
    versions: import(".").Versions;
    network: "regtest";
} | {
    name: string;
    alias: string;
    pubkeyhash: number;
    privatekey: number;
    scripthash: number;
    xpubkey: number;
    xprivkey: number;
    networkMagic: number;
    port: number;
    dnsSeeds: string[];
    symbol: string;
    messageName?: string | undefined;
    unit: string;
    decimalPlaces: number;
    messagePrefix?: string | undefined;
    messagePrefixAlts?: string[] | undefined;
    seedsDns?: string[] | undefined;
    consensus?: "PoW" | "PoS" | "PoB" | "DPoS" | "PBFT" | "PoET" | "PoC" | "PoA" | undefined;
    bech32?: string | undefined;
    algorithm?: "allium" | "bcrypt" | "bitcore" | "blake" | "blake2s" | "boolberry" | "c11" | "cryptonight" | "cryptonight_fast" | "equihash" | "firopow" | "fresh" | "fugue" | "ghostrider" | "groestl" | "hefty1" | "kawpow" | "keccak" | "lbry" | "lyra2re" | "lyra2z" | "minotaur" | "minotaurx" | "neoscrypt" | "nist5" | "polytimos" | "quark" | "qubit" | "scrypt" | "scrypt-jane" | "scrypt-n" | "scryptjane" | "scryptn" | "sha1" | "sha256d" | "shavite3" | "skein" | "timetravel" | "verthash" | "x11" | "x13" | "x15" | "x16r" | "x16rt" | "x16rv2" | "x21s" | "xevan" | "zhash" | undefined;
    confirmations?: number | undefined;
    id: string;
    hashGenesisBlock: string;
    portRpc: number;
    protocol?: Record<string, number> | undefined;
    versions: import(".").Versions;
    network: "simnet";
};
export declare function findNetworkById(id: string): Network | undefined;
export declare function getChainIds(network: string): string[];
export declare function getChainNames(): string[];
export declare function getChainsByNetwork(network: string): Network[];