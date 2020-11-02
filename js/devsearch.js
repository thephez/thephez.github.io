

"use strict";

var search_data = [



,



{
label: "AbandonTransaction",
uri: "/en/developer-reference#abandontransaction",
category: "RPCs"
},
{
label: "AbortRescan",
uri: "/en/developer-reference#abortrescan",
category: "RPCs"
},
{
label: "AddMultiSigAddress",
uri: "/en/developer-reference#addmultisigaddress",
category: "RPCs"
},
{
label: "AddNode",
uri: "/en/developer-reference#addnode",
category: "RPCs"
},
{
label: "BackupWallet",
uri: "/en/developer-reference#backupwallet",
category: "RPCs"
},
{
label: "BLS",
uri: "/en/developer-reference#bls",
category: "RPCs"
},
{
label: "ClearBanned",
uri: "/en/developer-reference#clearbanned",
category: "RPCs"
},
{
label: "CreateMultisig",
uri: "/en/developer-reference#createmultisig",
category: "RPCs"
},
{
label: "CombineRawTransaction",
uri: "/en/developer-reference#combinerawtransaction",
category: "RPCs"
},
{
label: "CreateRawTransaction",
uri: "/en/developer-reference#createrawtransaction",
category: "RPCs"
},
{
label: "Debug",
uri: "/en/developer-reference#debug",
category: "RPCs"
},
{
label: "DecodeRawTransaction",
uri: "/en/developer-reference#decoderawtransaction",
category: "RPCs"
},
{
label: "DecodeScript",
uri: "/en/developer-reference#decodescript",
category: "RPCs"
},
{
label: "DisconnectNode",
uri: "/en/developer-reference#disconnectnode",
category: "RPCs"
},
{
label: "DumpHDInfo",
uri: "/en/developer-reference#dumphdinfo",
category: "RPCs"
},
{
label: "DumpPrivKey",
uri: "/en/developer-reference#dumpprivkey",
category: "RPCs"
},
{
label: "DumpWallet",
uri: "/en/developer-reference#dumpwallet",
category: "RPCs"
},
{
label: "EncryptWallet",
uri: "/en/developer-reference#encryptwallet",
category: "RPCs"
},
{
label: "EstimateFee",
uri: "/en/developer-reference#estimatefee",
category: "RPCs"
},
{
label: "EstimatePriority",
uri: "/en/developer-reference#estimatepriority",
category: "RPCs"
},
{
label: "EstimateSmartFee",
uri: "/en/developer-reference#estimatesmartfee",
category: "RPCs"
},
{
label: "EstimateSmartPriority",
uri: "/en/developer-reference#estimatesmartpriority",
category: "RPCs"
},
{
label: "FundRawTransaction",
uri: "/en/developer-reference#fundrawtransaction",
category: "RPCs"
},
{
label: "Generate",
uri: "/en/developer-reference#generate",
category: "RPCs"
},
{
label: "GenerateToAddress",
uri: "/en/developer-reference#generatetoaddress",
category: "RPCs"
},
{
label: "GetAccount",
uri: "/en/developer-reference#getaccount",
category: "RPCs"
},
{
label: "GetAccountAddress",
uri: "/en/developer-reference#getaccountaddress",
category: "RPCs"
},
{
label: "GetAddedNodeInfo",
uri: "/en/developer-reference#getaddednodeinfo",
category: "RPCs"
},
{
label: "GetAddressesByAccount",
uri: "/en/developer-reference#getaddressesbyaccount",
category: "RPCs"
},
{
label: "GetAddressBalance",
uri: "/en/developer-reference#getaddressbalance",
category: "RPCs"
},
{
label: "GetAddressDeltas",
uri: "/en/developer-reference#getaddressdeltas",
category: "RPCs"
},
{
label: "GetAddressMempool",
uri: "/en/developer-reference#getaddressmempool",
category: "RPCs"
},
{
label: "GetAddressTxids",
uri: "/en/developer-reference#getaddresstxids",
category: "RPCs"
},
{
label: "GetAddressUtxos",
uri: "/en/developer-reference#getaddressutxos",
category: "RPCs"
},
{
label: "GetBalance",
uri: "/en/developer-reference#getbalance",
category: "RPCs"
},
{
label: "GetBestBlockHash",
uri: "/en/developer-reference#getbestblockhash",
category: "RPCs"
},
{
label: "GetBestChainLock",
uri: "/en/developer-reference#getbestchainlock",
category: "RPCs"
},
{
label: "GetBlock",
uri: "/en/developer-reference#getblock",
category: "RPCs"
},
{
label: "GetBlockChainInfo",
uri: "/en/developer-reference#getblockchaininfo",
category: "RPCs"
},
{
label: "GetBlockCount",
uri: "/en/developer-reference#getblockcount",
category: "RPCs"
},
{
label: "GetBlockHash",
uri: "/en/developer-reference#getblockhash",
category: "RPCs"
},
{
label: "GetBlockHashes",
uri: "/en/developer-reference#getblockhashes",
category: "RPCs"
},
{
label: "GetBlockHeader",
uri: "/en/developer-reference#getblockheader",
category: "RPCs"
},
{
label: "GetBlockHeaders",
uri: "/en/developer-reference#getblockheaders",
category: "RPCs"
},
{
label: "GetBlockStats",
uri: "/en/developer-reference#getblockstats",
category: "RPCs"
},
{
label: "GetBlockTemplate",
uri: "/en/developer-reference#getblocktemplate",
category: "RPCs"
},
{
label: "GetChainTips",
uri: "/en/developer-reference#getchaintips",
category: "RPCs"
},
{
label: "GetChainTxStats",
uri: "/en/developer-reference#getchaintxstats",
category: "RPCs"
},
{
label: "GetConnectionCount",
uri: "/en/developer-reference#getconnectioncount",
category: "RPCs"
},
{
label: "GetDifficulty",
uri: "/en/developer-reference#getdifficulty",
category: "RPCs"
},
{
label: "GetGenerate",
uri: "/en/developer-reference#getgenerate",
category: "RPCs"
},
{
label: "GetGovernanceInfo",
uri: "/en/developer-reference#getgovernanceinfo",
category: "RPCs"
},
{
label: "GetHashesPerSec",
uri: "/en/developer-reference#gethashespersec",
category: "RPCs"
},
{
label: "GetInfo",
uri: "/en/developer-reference#getinfo",
category: "RPCs"
},
{
label: "GetMemoryInfo",
uri: "/en/developer-reference#getmemoryinfo",
category: "RPCs"
},
{
label: "GetMempoolAncestors",
uri: "/en/developer-reference#getmempoolancestors",
category: "RPCs"
},
{
label: "GetMempoolDescendants",
uri: "/en/developer-reference#getmempooldescendants",
category: "RPCs"
},
{
label: "GetMempoolEntry",
uri: "/en/developer-reference#getmempoolentry",
category: "RPCs"
},
{
label: "GetMempoolInfo",
uri: "/en/developer-reference#getmempoolinfo",
category: "RPCs"
},
{
label: "GetMerkleBlocks",
uri: "/en/developer-reference#getmerkleblocks",
category: "RPCs"
},
{
label: "GetMiningInfo",
uri: "/en/developer-reference#getmininginfo",
category: "RPCs"
},
{
label: "GetNetTotals",
uri: "/en/developer-reference#getnettotals",
category: "RPCs"
},
{
label: "GetNetworkHashPS",
uri: "/en/developer-reference#getnetworkhashps",
category: "RPCs"
},
{
label: "GetNetworkInfo",
uri: "/en/developer-reference#getnetworkinfo",
category: "RPCs"
},
{
label: "GetNewAddress",
uri: "/en/developer-reference#getnewaddress",
category: "RPCs"
},
{
label: "GetPeerInfo",
uri: "/en/developer-reference#getpeerinfo",
category: "RPCs"
},
{
label: "GetPoolInfo",
uri: "/en/developer-reference#getpoolinfo",
category: "RPCs"
},
{
label: "GetPrivateSendInfo",
uri: "/en/developer-reference#getprivatesendinfo",
category: "RPCs"
},
{
label: "GetRawChangeAddress",
uri: "/en/developer-reference#getrawchangeaddress",
category: "RPCs"
},
{
label: "GetRawMempool",
uri: "/en/developer-reference#getrawmempool",
category: "RPCs"
},
{
label: "GetRawTransaction",
uri: "/en/developer-reference#getrawtransaction",
category: "RPCs"
},
{
label: "GetReceivedByAccount",
uri: "/en/developer-reference#getreceivedbyaccount",
category: "RPCs"
},
{
label: "GetReceivedByAddress",
uri: "/en/developer-reference#getreceivedbyaddress",
category: "RPCs"
},
{
label: "GetSpecialTxes",
uri: "/en/developer-reference#getspecialtxes",
category: "RPCs"
},
{
label: "GetSpentInfo",
uri: "/en/developer-reference#getspentinfo",
category: "RPCs"
},
{
label: "GetSuperblockBudget",
uri: "/en/developer-reference#getsuperblockbudget",
category: "RPCs"
},
{
label: "GetTransaction",
uri: "/en/developer-reference#gettransaction",
category: "RPCs"
},
{
label: "GetTxout",
uri: "/en/developer-reference#gettxout",
category: "RPCs"
},
{
label: "GetTxOutProof",
uri: "/en/developer-reference#gettxoutproof",
category: "RPCs"
},
{
label: "GetTxoutSetInfo",
uri: "/en/developer-reference#gettxoutsetinfo",
category: "RPCs"
},
{
label: "GetUnconfirmedBalance",
uri: "/en/developer-reference#getunconfirmedbalance",
category: "RPCs"
},
{
label: "GetWalletInfo",
uri: "/en/developer-reference#getwalletinfo",
category: "RPCs"
},
{
label: "GetWork",
uri: "/en/developer-reference#getwork",
category: "RPCs"
},
{
label: "GObject",
uri: "/en/developer-reference#gobject",
category: "RPCs"
},
{
label: "Help",
uri: "/en/developer-reference#help",
category: "RPCs"
},
{
label: "ImportAddress",
uri: "/en/developer-reference#importaddress",
category: "RPCs"
},
{
label: "ImportElectrumWallet",
uri: "/en/developer-reference#importelectrumwallet",
category: "RPCs"
},
{
label: "ImportMulti",
uri: "/en/developer-reference#importmulti",
category: "RPCs"
},
{
label: "ImportPrivkey",
uri: "/en/developer-reference#importprivkey",
category: "RPCs"
},
{
label: "ImportPrunedFunds",
uri: "/en/developer-reference#importprunedfunds",
category: "RPCs"
},
{
label: "ImportPubkey",
uri: "/en/developer-reference#importpubkey",
category: "RPCs"
},
{
label: "ImportWallet",
uri: "/en/developer-reference#importwallet",
category: "RPCs"
},
{
label: "KeePass",
uri: "/en/developer-reference#keepass",
category: "RPCs"
},
{
label: "KeypoolRefill",
uri: "/en/developer-reference#keypoolrefill",
category: "RPCs"
},
{
label: "ListAccounts",
uri: "/en/developer-reference#listaccounts",
category: "RPCs"
},
{
label: "ListAddressBalances",
uri: "/en/developer-reference#listaddressbalances",
category: "RPCs"
},
{
label: "ListAddressGroupings",
uri: "/en/developer-reference#listaddressgroupings",
category: "RPCs"
},
{
label: "ListBanned",
uri: "/en/developer-reference#listbanned",
category: "RPCs"
},
{
label: "ListLockUnspent",
uri: "/en/developer-reference#listlockunspent",
category: "RPCs"
},
{
label: "ListReceivedByAccount",
uri: "/en/developer-reference#listreceivedbyaccount",
category: "RPCs"
},
{
label: "ListReceivedByAddress",
uri: "/en/developer-reference#listreceivedbyaddress",
category: "RPCs"
},
{
label: "ListSinceBlock",
uri: "/en/developer-reference#listsinceblock",
category: "RPCs"
},
{
label: "ListTransactions",
uri: "/en/developer-reference#listtransactions",
category: "RPCs"
},
{
label: "ListUnspent",
uri: "/en/developer-reference#listunspent",
category: "RPCs"
},
{
label: "ListWallets",
uri: "/en/developer-reference#listwallets",
category: "RPCs"
},
{
label: "LockUnspent",
uri: "/en/developer-reference#lockunspent",
category: "RPCs"
},
{
label: "Logging",
uri: "/en/developer-reference#logging",
category: "RPCs"
},
{
label: "Masternode",
uri: "/en/developer-reference#masternode",
category: "RPCs"
},
{
label: "MasternodeBroadcast",
uri: "/en/developer-reference#masternodebroadcast",
category: "RPCs"
},
{
label: "MasternodeList",
uri: "/en/developer-reference#masternodelist",
category: "RPCs"
},
{
label: "MnSync",
uri: "/en/developer-reference#mnsync",
category: "RPCs"
},
{
label: "Move",
uri: "/en/developer-reference#move",
category: "RPCs"
},
{
label: "Ping",
uri: "/en/developer-reference#ping-rpc",
category: "RPCs"
},
{
label: "ProTx",
uri: "/en/developer-reference#protx",
category: "RPCs"
},
{
label: "PreciousBlock",
uri: "/en/developer-reference#preciousblock",
category: "RPCs"
},
{
label: "PrioritiseTransaction",
uri: "/en/developer-reference#prioritisetransaction",
category: "RPCs"
},
{
label: "PrivateSend",
uri: "/en/developer-reference#privatesend",
category: "RPCs"
},
{
label: "PruneBlockChain",
uri: "/en/developer-reference#pruneblockchain",
category: "RPCs"
},
{
label: "Quorum",
uri: "/en/developer-reference#quorum",
category: "RPCs"
},
{
label: "RemovePrunedFunds",
uri: "/en/developer-reference#removeprunedfunds",
category: "RPCs"
},
{
label: "SendFrom",
uri: "/en/developer-reference#sendfrom",
category: "RPCs"
},
{
label: "SendMany",
uri: "/en/developer-reference#sendmany",
category: "RPCs"
},
{
label: "SendRawTransaction",
uri: "/en/developer-reference#sendrawtransaction",
category: "RPCs"
},
{
label: "SendToAddress",
uri: "/en/developer-reference#sendtoaddress",
category: "RPCs"
},
{
label: "SetAccount",
uri: "/en/developer-reference#setaccount",
category: "RPCs"
},
{
label: "SetBan",
uri: "/en/developer-reference#setban",
category: "RPCs"
},
{
label: "SetGenerate",
uri: "/en/developer-reference#setgenerate",
category: "RPCs"
},
{
label: "SetNetworkActive",
uri: "/en/developer-reference#setnetworkactive",
category: "RPCs"
},
{
label: "SetPrivateSendAmount",
uri: "/en/developer-reference#setprivatesendamount",
category: "RPCs"
},
{
label: "SetPrivateSendRounds",
uri: "/en/developer-reference#setprivatesendrounds",
category: "RPCs"
},
{
label: "SetTxFee",
uri: "/en/developer-reference#settxfee",
category: "RPCs"
},
{
label: "SignMessage",
uri: "/en/developer-reference#signmessage",
category: "RPCs"
},
{
label: "SignMessageWithPrivKey",
uri: "/en/developer-reference#signmessagewithprivkey",
category: "RPCs"
},
{
label: "SignRawTransaction",
uri: "/en/developer-reference#signrawtransaction",
category: "RPCs"
},
{
label: "SentinelPing",
uri: "/en/developer-reference#sentinelping",
category: "RPCs"
},
{
label: "Spork",
uri: "/en/developer-reference#spork-rpc",
category: "RPCs"
},
{
label: "Stop",
uri: "/en/developer-reference#stop",
category: "RPCs"
},
{
label: "SubmitBlock",
uri: "/en/developer-reference#submitblock",
category: "RPCs"
},
{
label: "Uptime",
uri: "/en/developer-reference#uptime",
category: "RPCs"
},
{
label: "ValidateAddress",
uri: "/en/developer-reference#validateaddress",
category: "RPCs"
},
{
label: "VerifyChain",
uri: "/en/developer-reference#verifychain",
category: "RPCs"
},
{
label: "VerifyMessage",
uri: "/en/developer-reference#verifymessage",
category: "RPCs"
},
{
label: "VerifyTxOutProof",
uri: "/en/developer-reference#verifytxoutproof",
category: "RPCs"
},
{
label: "VoteRaw",
uri: "/en/developer-reference#voteraw",
category: "RPCs"
},
{
label: "WalletLock",
uri: "/en/developer-reference#walletlock",
category: "RPCs"
},
{
label: "WalletPassphrase",
uri: "/en/developer-reference#walletpassphrase",
category: "RPCs"
},
{
label: "WalletPassphraseChange",
uri: "/en/developer-reference#walletpassphrasechange",
category: "RPCs"
},



{
label: "GetBlock",
uri: "/en/developer-reference#get-block",
category: "REST"
},
{
label: "GetBlock-noTxDetails",
uri: "/en/developer-reference#get-blocknotxdetails",
category: "REST"
},
{
label: "GetChainInfo",
uri: "/en/developer-reference#get-chaininfo",
category: "REST"
},
{
label: "GetUtxos",
uri: "/en/developer-reference#get-getutxos",
category: "REST"
},
{
label: "GetHeaders",
uri: "/en/developer-reference#get-headers",
category: "REST"
},
{
label: "GetMemPool-contents",
uri: "/en/developer-reference#get-mempoolcontents",
category: "REST"
},
{
label: "GetMemPool-info",
uri: "/en/developer-reference#get-mempoolinfo",
category: "REST"
},
{
label: "GetTx",
uri: "/en/developer-reference#get-tx",
category: "REST"
},



{
label: "OP_0 (OP_FALSE)",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_PUSHDATA1",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_PUSHDATA2",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_PUSHDATA4",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_1NEGATE",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_1 (OP_TRUE)",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_2",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_3",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_4",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_5",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_6",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_7",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_8",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_9",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_10",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_11",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_12",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_13",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_14",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_15",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_16",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Opcodes"
},
{
label: "OP_NOP",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_IF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_NOTIF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_ELSE",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_ENDIF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_VERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_RETURN",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Opcodes"
},
{
label: "OP_TOALTSTACK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_FROMALTSTACK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_IFDUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_DEPTH",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_DROP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_NIP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_OVER",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_PICK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_ROLL",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_ROT",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_SWAP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_TUCK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_2DROP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_2DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_3DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_2OVER",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_2ROT",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_2SWAP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Opcodes"
},
{
label: "OP_CAT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Opcodes"
},
{
label: "OP_SUBSTR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Opcodes"
},
{
label: "OP_LEFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Opcodes"
},
{
label: "OP_RIGHT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Opcodes"
},
{
label: "OP_SIZE",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Opcodes"
},
{
label: "OP_INVERT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_AND (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_OR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_XOR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_EQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_EQUALVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Opcodes"
},
{
label: "OP_1ADD",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_1SUB",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_2MUL (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_2DIV (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_NEGATE",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_ABS",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_NOT",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_0NOTEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_ADD",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_SUB",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_MUL (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_DIV (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_MOD (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_LSHIFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_RSHIFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_BOOLAND",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_BOOLOR",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_NUMEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_NUMEQUALVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_NUMNOTEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_LESSTHAN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_GREATERTHAN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_LESSTHANOREQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_GREATERTHANOREQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_MIN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_MAX",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_WITHIN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Opcodes"
},
{
label: "OP_RIPEMD160",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_SHA1",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_SHA256",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_HASH160",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_HASH256",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CODESEPARATOR",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CHECKSIG",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CHECKSIGVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CHECKMULTISIG",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CHECKMULTISIGVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Opcodes"
},
{
label: "OP_CHECKLOCKTIMEVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Locktime",
category: "Opcodes"
},
{
label: "OP_CHECKSEQUENCEVERIFY ",
uri: "https://en.bitcoin.it/wiki/Script#Locktime",
category: "Opcodes"
},
{
label: "OP_PUBKEYHASH (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Opcodes"
},
{
label: "OP_PUBKEY (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Opcodes"
},
{
label: "OP_INVALIDOPCODE (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Opcodes"
},
{
label: "OP_RESERVED (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_VER (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_VERIF (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_VERNOTIF (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_RESERVED1 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_RESERVED2 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP1 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP4 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP5 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP6 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP7 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP8 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP9 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},
{
label: "OP_NOP10 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Opcodes"
},



{
label: "BIP1: BIP purpose and guidelines",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki",
category: "BIPs"
},
{
label: "BIP9: soft fork mechanism",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki",
category: "BIPs"
},
{
label: "BIP11: m-of-n multisig transactions",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki",
category: "BIPs"
},
{
label: "BIP13: P2SH address format",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki",
category: "BIPs"
},
{
label: "BIP14: protocol version and user agent",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0014.mediawiki",
category: "BIPs"
},
{
label: "BIP16: pay to script hash (P2SH)",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki",
category: "BIPs"
},
{
label: "BIP21: URI scheme",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",
category: "BIPs"
},
{
label: "BIP22: GetBlockTemplate fundamentals",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki",
category: "BIPs"
},
{
label: "BIP23: GetBlockTemplate pooled mining",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki",
category: "BIPs"
},
{
label: "BIP30: dealing with duplicate transactions",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki",
category: "BIPs"
},
{
label: "BIP31: P2P pong message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki",
category: "BIPs"
},
{
label: "BIP32: HD wallets",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",
category: "BIPs"
},
{
label: "BIP34: block height in coinbase",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki",
category: "BIPs"
},
{
label: "BIP35: P2P mempool message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki",
category: "BIPs"
},
{
label: "BIP37: bloom filtering",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki",
category: "BIPs"
},
{
label: "BIP38: passphrase-protected private key",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",
category: "BIPs"
},
{
label: "BIP39: mnemonic code for HD wallets",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",
category: "BIPs"
},
{
label: "BIP42: finite monetary supply",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki",
category: "BIPs"
},
{
label: "BIP44: HD wallet account hierarchy",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",
category: "BIPs"
},
{
label: "BIP50: March 2013 fork post-mortem",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki",
category: "BIPs"
},
{
label: "BIP60: fixed-length version message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0060.mediawiki",
category: "BIPs"
},
{
label: "BIP61: P2P reject message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki",
category: "BIPs"
},
{
label: "BIP62: dealing with malleability",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki",
category: "BIPs"
},
{
label: "BIP64: P2P geutxos message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0064.mediawiki",
category: "BIPs"
},
{
label: "BIP65: OP_CHECKLOCKTIMEVERIFY",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki",
category: "BIPs"
},
{
label: "BIP66: strict DER signatures",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki",
category: "BIPs"
},
{
label: "BIP68: relative lock-time",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki",
category: "BIPs"
},
{
label: "BIP70: payment protocol",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki",
category: "BIPs"
},
{
label: "BIP71: payment protocol MIME types",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0071.mediawiki",
category: "BIPs"
},
{
label: "BIP72: payment protocol URIs",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",
category: "BIPs"
},
{
label: "BIP73: accept header with payment protocol",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0073.mediawiki",
category: "BIPs"
},
{
label: "BIP90: buried deployments",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0090.mediawiki",
category: "BIPs"
},
{
label: "BIP111: NODE_BLOOM service bit",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0111.mediawiki",
category: "BIPs"
},
{
label: "BIP112: OP_CHECKSEQUENCEVERIFY",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki",
category: "BIPs"
},
{
label: "BIP113: median time for lock-time",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki",
category: "BIPs"
},
{
label: "BIP125: replace-by-fee signaling",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki",
category: "BIPs"
},
{
label: "BIP130: sendheaders message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0130.mediawiki",
category: "BIPs"
},
{
label: "BIP133: feefilter message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0133.mediawiki",
category: "BIPs"
},
{
label: "BIP141: segregated witness",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",
category: "BIPs"
},
{
label: "BIP147: NULLYDUMMY enforcement",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki",
category: "BIPs"
},
{
label: "BIP151: P2P communication encryption",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0151.mediawiki",
category: "BIPs"
},
{
label: "BIP152: compact block relay",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki",
category: "BIPs"
},



{
label: "DIP1: 2MB Blocks",
uri: "https://github.com/dashpay/dips/blob/master/dip-0001.md",
category: "DIPs"
},
{
label: "DIP2: Special Transactions",
uri: "https://github.com/dashpay/dips/blob/master/dip-0002.md",
category: "DIPs"
},
{
label: "DIP3: Deterministic Masternode Lists",
uri: "https://github.com/dashpay/dips/blob/master/dip-0003.md",
category: "DIPs"
},
{
label: "DIP4: Simplified Verification of Deterministic Masternode Lists",
uri: "https://github.com/dashpay/dips/blob/master/dip-0004.md",
category: "DIPs"
},
{
label: "DIP5: Blockchain Users",
uri: "https://github.com/dashpay/dips/blob/master/dip-0005.md",
category: "DIPs"
},
{
label: "DIP6: Long-Living Masternode Quorums",
uri: "https://github.com/dashpay/dips/blob/master/dip-0006.md",
category: "DIPs"
},
{
label: "DIP7: LLMQ Signing Requests / Sessions",
uri: "https://github.com/dashpay/dips/blob/master/dip-0007.md",
category: "DIPs"
},
{
label: "DIP8: ChainLocks",
uri: "https://github.com/dashpay/dips/blob/master/dip-0008.md",
category: "DIPs"
},



{
label: "addr",
uri: "/en/developer-reference#addr",
category: "P2P Messages"
},
{
label: "block",
uri: "/en/developer-reference#block",
category: "P2P Messages"
},
{
label: "blocktxn",
uri: "/en/developer-reference#blocktxn",
category: "P2P Messages"
},
{
label: "cmpctblock",
uri: "/en/developer-reference#cmpctblock",
category: "P2P Messages"
},
{
label: "filteradd",
uri: "/en/developer-reference#filteradd",
category: "P2P Messages"
},
{
label: "filterclear",
uri: "/en/developer-reference#filterclear",
category: "P2P Messages"
},
{
label: "filterload",
uri: "/en/developer-reference#filterload",
category: "P2P Messages"
},
{
label: "getaddr",
uri: "/en/developer-reference#getaddr",
category: "P2P Messages"
},
{
label: "getblocks",
uri: "/en/developer-reference#getblocks",
category: "P2P Messages"
},
{
label: "getblocktxn",
uri: "/en/developer-reference#getblocktxn",
category: "P2P Messages"
},
{
label: "getdata",
uri: "/en/developer-reference#getdata",
category: "P2P Messages"
},
{
label: "getheaders",
uri: "/en/developer-reference#getheaders",
category: "P2P Messages"
},
{
label: "getmnlistd",
uri: "/en/developer-reference#getmnlistd",
category: "P2P Messages"
},
{
label: "headers",
uri: "/en/developer-reference#headers",
category: "P2P Messages"
},
{
label: "inv",
uri: "/en/developer-reference#inv",
category: "P2P Messages"
},
{
label: "mempool",
uri: "/en/developer-reference#mempool",
category: "P2P Messages"
},
{
label: "merkleblock",
uri: "/en/developer-reference#merkleblock",
category: "P2P Messages"
},
{
label: "mnlistdiff",
uri: "/en/developer-reference#mnlistdiff",
category: "P2P Messages"
},
{
label: "notfound",
uri: "/en/developer-reference#notfound",
category: "P2P Messages"
},
{
label: "ping",
uri: "/en/developer-reference#ping",
category: "P2P Messages"
},
{
label: "pong",
uri: "/en/developer-reference#pong",
category: "P2P Messages"
},
{
label: "reject",
uri: "/en/developer-reference#reject",
category: "P2P Messages"
},
{
label: "sendcmpct",
uri: "/en/developer-reference#sendcmpct",
category: "P2P Messages"
},
{
label: "senddsq",
uri: "/en/developer-reference#senddsq",
category: "P2P Messages"
},
{
label: "tx",
uri: "/en/developer-reference#tx",
category: "P2P Messages"
},
{
label: "verack",
uri: "/en/developer-reference#verack",
category: "P2P Messages"
},
{
label: "version",
uri: "/en/developer-reference#version",
category: "P2P Messages"
},
{
label: "getsporks",
uri: "/en/developer-reference#getsporks",
category: "P2P Messages"
},
{
label: "spork",
uri: "/en/developer-reference#spork",
category: "P2P Messages"
},
{
label: "clsig",
uri: "/en/developer-reference#clsig",
category: "P2P Messages"
},
{
label: "islock",
uri: "/en/developer-reference#islock",
category: "P2P Messages"
},
{
label: "dsa",
uri: "/en/developer-reference#dsa",
category: "P2P Messages"
},
{
label: "dsc",
uri: "/en/developer-reference#dsc",
category: "P2P Messages"
},
{
label: "dsf",
uri: "/en/developer-reference#dsf",
category: "P2P Messages"
},
{
label: "dsi",
uri: "/en/developer-reference#dsi",
category: "P2P Messages"
},
{
label: "dsq",
uri: "/en/developer-reference#dsq",
category: "P2P Messages"
},
{
label: "dss",
uri: "/en/developer-reference#dss",
category: "P2P Messages"
},
{
label: "dssu",
uri: "/en/developer-reference#dssu",
category: "P2P Messages"
},
{
label: "dstx",
uri: "/en/developer-reference#dstx",
category: "P2P Messages"
},
{
label: "ssc",
uri: "/en/developer-reference#ssc",
category: "P2P Messages"
},
{
label: "mnauth",
uri: "/en/developer-reference#mnauth",
category: "P2P Messages"
},
{
label: "qbsigs",
uri: "/en/developer-reference#qbsigs",
category: "P2P Messages"
},
{
label: "qcomplaint",
uri: "/en/developer-reference#qcomplaint",
category: "P2P Messages"
},
{
label: "qcontrib",
uri: "/en/developer-reference#qcontrib",
category: "P2P Messages"
},
{
label: "qfcommit",
uri: "/en/developer-reference#qfcommit",
category: "P2P Messages"
},
{
label: "qgetsigs",
uri: "/en/developer-reference#qgetsigs",
category: "P2P Messages"
},
{
label: "qjustify",
uri: "/en/developer-reference#qjustify",
category: "P2P Messages"
},
{
label: "qpcommit",
uri: "/en/developer-reference#qpcommit",
category: "P2P Messages"
},
{
label: "qsendrecsigs",
uri: "/en/developer-reference#qsendrecsigs",
category: "P2P Messages"
},
{
label: "qsigrec",
uri: "/en/developer-reference#qsigrec",
category: "P2P Messages"
},
{
label: "qsigsesann",
uri: "/en/developer-reference#qsigsesann",
category: "P2P Messages"
},
{
label: "qsigsinv",
uri: "/en/developer-reference#qsigsinv",
category: "P2P Messages"
},
{
label: "qwatch",
uri: "/en/developer-reference#qwatch",
category: "P2P Messages"
},
{
label: "govobj",
uri: "/en/developer-reference#govobj",
category: "P2P Messages"
},
{
label: "govobjvote",
uri: "/en/developer-reference#govobjvote",
category: "P2P Messages"
},
{
label: "govsync",
uri: "/en/developer-reference#govsync",
category: "P2P Messages"
},
{
label: "alert",
uri: "/en/developer-reference#alert",
category: "P2P Messages"
},
{
label: "ix",
uri: "/en/developer-reference#ix",
category: "P2P Messages"
},
{
label: "txlvote",
uri: "/en/developer-reference#txlvote",
category: "P2P Messages"
}
];



// code adapted from http://jqueryui.com/autocomplete/#categories
// MIT license: https://jquery.org/license/

$.widget("custom.catcomplete", $.ui.autocomplete, {
  _create: function() {
    this._super();
    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
  },
  _renderMenu: function(ul, items) {
    var that = this,
      currentCategory = "";
    $.each(items, function(index, item) {
      var li;
      if (item.category !== currentCategory) {
        ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
        currentCategory = item.category;
      }
      li = that._renderItemData(ul, item);
      if (item.category) {
        li.attr("aria-label", item.category + " : " + item.label);
      }
    });
  }
});
$(function() {
  $("#glossary_term").catcomplete({
    source: search_data,
    delay: 0,
    minLength: 2,
    autoFocus: true,
    select: function(event, ui) {
      location.href = ui.item.uri;
    }
  });
});
