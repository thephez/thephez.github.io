var util_8h =
[
    [ "CTranslationInterface", "class_c_translation_interface.html", "class_c_translation_interface" ],
    [ "CLogCategoryActive", "struct_c_log_category_active.html", "struct_c_log_category_active" ],
    [ "ArgsManager", "class_args_manager.html", "class_args_manager" ],
    [ "DBG", "util_8h.html#a32adf79142f0a426b5e782fb7cd4cad3", null ],
    [ "LogPrint", "util_8h.html#a44920f41b96476395cffed459d0c8835", null ],
    [ "LogPrintf", "util_8h.html#afc02c0a4258fedfb316be612bb659ba8", null ],
    [ "LogFlags", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541", [
      [ "NONE", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a9b5923596f6405728f3dd83fcca4aae6", null ],
      [ "NET", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541af6e0b9c6b7721c3da5e0aca00bf73c4c", null ],
      [ "TOR", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541abab9554c8fd33162382bcf2b605210b0", null ],
      [ "MEMPOOL", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541add2e27f6f8b22df531c3b8919d9e46d8", null ],
      [ "HTTP", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a9003c655d785c72279425ad622bf2779", null ],
      [ "BENCHMARK", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a7b73208c3091dceda4c2c966c57b62a3", null ],
      [ "ZMQ", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ace430636e3bc6e88bc85b76281d20bba", null ],
      [ "DB", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a51d664347be128053130d723138d82ed", null ],
      [ "RPC", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a703154bc3f7bd3e2b167308043913b57", null ],
      [ "ESTIMATEFEE", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a016dbf01ec954f59f031454943700846", null ],
      [ "ADDRMAN", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a576770f363f28ba7106ded5850da9fbc", null ],
      [ "SELECTCOINS", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ae5121bb885449063bde181be93bbc4d0", null ],
      [ "REINDEX", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a46a9c5dc6e6a690842ae395a71aaabc6", null ],
      [ "CMPCTBLOCK", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ac599af780febac5daeb72f0c34e18118", null ],
      [ "RANDOM", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ad1cf47d645eedd4110c4d79764e5fded", null ],
      [ "PRUNE", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ab767053245a48741c9ea5cedf1034082", null ],
      [ "PROXY", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541ac8f217d2c51c54deab830d961ae2796a", null ],
      [ "MEMPOOLREJ", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541aa471bb09916fba65e151b0f4ce623c26", null ],
      [ "LIBEVENT", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541abaed4f3ec3875ec3b40a2e0610c9202f", null ],
      [ "COINDB", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a3b190ef58af6fbaf5325e97539c7fed4", null ],
      [ "QT", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541afc0e3b5015e7bb4c70ca045582d56c36", null ],
      [ "LEVELDB", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a9637cd35e793d3f83562d6690b707a83", null ],
      [ "CHAINLOCKS", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541abbca88af6b991ff6acd3f5517ceee89c", null ],
      [ "GOBJECT", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a544f7e24399f32d28ae83b4247806706", null ],
      [ "INSTANTSEND", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a974a37ced7fb78c6aa352e74396a3872", null ],
      [ "KEEPASS", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a1f6abcbcce3341510d147399a31d162f", null ],
      [ "LLMQ", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541abe38c1bcba3fba82de481913e878fb8d", null ],
      [ "LLMQ_DKG", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a53f36e1473ecf258e43eab7aafb92779", null ],
      [ "LLMQ_SIGS", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541adf2f5de05257c7dc2451f1d10446d379", null ],
      [ "MNPAYMENTS", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a2cf39f8723ad97b4581b9fed57307a9b", null ],
      [ "MNSYNC", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a41bb79338a04fbe852f97dc426932919", null ],
      [ "PRIVATESEND", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a9de80b3d43cd0484f95e9881d521b688", null ],
      [ "SPORK", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541aafad229a33bdb76cdebdabe5a1dec354", null ],
      [ "NETCONN", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a01167769452c95ea5529e5f83dbfea0d", null ],
      [ "NET_NETCONN", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a08053ad8cb32039ead7f837fdc92e6f5", null ],
      [ "ALL", "util_8h.html#a7f38d795c5b3ac39b8f87a13ddfec541a6b4dd3d93d1db1a76bd6025d73fa6c1a", null ]
    ] ],
    [ "_", "util_8h.html#aad133bb6103b53cebf03fd01e2f11ba1", null ],
    [ "AbsPathForConfigVal", "util_8h.html#a95a1d5584353ab05e85da8b0e8844c95", null ],
    [ "AllocateFileRange", "util_8h.html#a91c763bffc49cf7ed8d45cc44870e55c", null ],
    [ "ClearDatadirCache", "util_8h.html#abfb50dfe077aced7591f2aba601f605d", null ],
    [ "CopyrightHolders", "util_8h.html#a02769d6b53f703a8a3073cb8548da80a", null ],
    [ "CreatePidFile", "util_8h.html#a1c0f9b041628dcb399a023bc9913f41d", null ],
    [ "error", "util_8h.html#a96c5fc7111f69f7dcaba992d95d13e03", null ],
    [ "FileCommit", "util_8h.html#af0e69a29ba128b74030ad8a213f2037a", null ],
    [ "FormatStringFromLogArgs", "util_8h.html#a7213f73cb3e3608b491db46f2fd91f72", null ],
    [ "GetBackupsDir", "util_8h.html#a668507988124e7e22ca61735da5b2b58", null ],
    [ "GetConfigFile", "util_8h.html#aa634f312705d4811dfa2a5392bddf6cf", null ],
    [ "GetDataDir", "util_8h.html#abb63dfb710832aefb746933af05198d4", null ],
    [ "GetDebugLogPath", "util_8h.html#a193445fff84d170cf8a2e325c8d1eae0", null ],
    [ "GetDefaultDataDir", "util_8h.html#a15cb85964fe08c264605537f44570d3c", null ],
    [ "GetLogCategory", "util_8h.html#aa29866ec0b2ee60ac902a4507a09eea2", null ],
    [ "GetNumCores", "util_8h.html#ae39f49506868759c202b588f7ae2c2d7", null ],
    [ "GetPidFile", "util_8h.html#aa0172eabeecce5061826cb19990fbde2", null ],
    [ "GetStartupTime", "util_8h.html#a29eee356cb63abcc6e4a48a8485810ef", null ],
    [ "GetThreadName", "util_8h.html#a1db3aa900bfa259ae1fe04068f2accfc", null ],
    [ "HelpMessageGroup", "util_8h.html#aae6ceac1cd94a0e700783c733e60e970", null ],
    [ "HelpMessageOpt", "util_8h.html#aec85bcd561766ad0362a8fc5cd4a8542", null ],
    [ "IntVersionToString", "util_8h.html#a4838564a7b80447dd05319f7ca582dfd", null ],
    [ "IsSwitchChar", "util_8h.html#ac0165e18ce3be89a2e0731e27d54b478", null ],
    [ "ListActiveLogCategories", "util_8h.html#a0f5558f5de78753cbe2585d90ab1f40f", null ],
    [ "ListActiveLogCategoriesString", "util_8h.html#ace8b5a7665e4de6329a490b37f1c0ef7", null ],
    [ "ListLogCategories", "util_8h.html#aa895919a708b682e4e7dd03ea2b6b41d", null ],
    [ "LockDirectory", "util_8h.html#a9f16e26cc90b17ed75fcbbe7ce75e7c3", null ],
    [ "LogAcceptCategory", "util_8h.html#ace3eef3e04606342f2d6de114a1cae26", null ],
    [ "LogPrintStr", "util_8h.html#afd4c3002b2797c0560adddb6af3ca1da", null ],
    [ "MakeUnique", "util_8h.html#a745e9413ab61925e6534aefdbb97efb8", null ],
    [ "MarkUsed", "util_8h.html#ad9ebaf0d944d3dad23362b06c1fb2ab2", null ],
    [ "MarkUsed", "util_8h.html#a08e6c4cce03bb0f0b7e301da7cbd763e", null ],
    [ "OpenDebugLog", "util_8h.html#a579eb4d833a69b03732e14b299ea8cb6", null ],
    [ "PrintExceptionContinue", "util_8h.html#afcb801683f7acaab09f94e56eb60b603", null ],
    [ "RaiseFileDescriptorLimit", "util_8h.html#a756a5c49a4bb607d16d9842f8f3ede4f", null ],
    [ "ReleaseDirectoryLocks", "util_8h.html#a851fa89def443bac9d04ddb908cb91bb", null ],
    [ "RenameOver", "util_8h.html#a579657da2b55b131ecd453bf1b0d2314", null ],
    [ "RenameThread", "util_8h.html#a85fc1244e0bd3c91ee7a1c05ed10ebbb", null ],
    [ "RenameThreadPool", "util_8h.html#a2e5b1f9944bc7fc781dc8ae86473f505", null ],
    [ "runCommand", "util_8h.html#aa803aa631ab8b4bd79fa9d7b2172bf9a", null ],
    [ "SafeIntVersionToString", "util_8h.html#a4a5202566ebf844b615af02572034036", null ],
    [ "SafeStringFormat", "util_8h.html#a4a274a03d86f2f1936247cb8dd5b904a", null ],
    [ "SetupEnvironment", "util_8h.html#a9ed616020f4ef9b1a261b222bbec78e2", null ],
    [ "SetupNetworking", "util_8h.html#a66791919e137c59061e988d2d87ee9a1", null ],
    [ "ShrinkDebugFile", "util_8h.html#a37fca7e305fe0caa306b23fdb37f88e2", null ],
    [ "StringVersionToInt", "util_8h.html#a1a22e1f2c4a1a56bb8583b2ffb3b2f8a", null ],
    [ "TraceThread", "util_8h.html#afa43dd4422606378edb9ab5022bb1d33", null ],
    [ "TruncateFile", "util_8h.html#acb8d6b822bc1bfa609bf43bbac1a0d44", null ],
    [ "TryCreateDirectories", "util_8h.html#a9042a919d837da9d97311a0c460c597c", null ],
    [ "BITCOIN_CONF_FILENAME", "util_8h.html#abf57498ee2b7213f49662a019744a74d", null ],
    [ "BITCOIN_PID_FILENAME", "util_8h.html#a9c6941232aba4a4c523285e8de1e8d92", null ],
    [ "DEFAULT_DEBUGLOGFILE", "util_8h.html#aa83b5532d9039198c491d090c1335583", null ],
    [ "DEFAULT_LOGIPS", "util_8h.html#a4693151c497a3832c510a6f3c151d562", null ],
    [ "DEFAULT_LOGTHREADNAMES", "util_8h.html#a477bccda5f3d374a5ce9d842489e0ab5", null ],
    [ "DEFAULT_LOGTIMEMICROS", "util_8h.html#aa575075ca2c40efb438811d0a9290488", null ],
    [ "DEFAULT_LOGTIMESTAMPS", "util_8h.html#a0cf3b6dd4b84bc9326acab5daada022f", null ],
    [ "fDisableGovernance", "util_8h.html#a7a30af2757024a6aa8e1ab0f5783b3f8", null ],
    [ "fLogIPs", "util_8h.html#a8e02420c2f7c53579ccb90acf301ae75", null ],
    [ "fLogThreadNames", "util_8h.html#af51e2e8a8eb10092ac70656040b9bea0", null ],
    [ "fLogTimeMicros", "util_8h.html#a23a1038ad3da62055742e3b81f751aad", null ],
    [ "fLogTimestamps", "util_8h.html#aa5e7caf6936a9a94eb088f04bcc62b97", null ],
    [ "fMasternodeMode", "util_8h.html#aab0b2c1be849102968dfee289f3b3e2a", null ],
    [ "fPrintToConsole", "util_8h.html#a9d6b03a0dcc515a84e620794e64b9547", null ],
    [ "fPrintToDebugLog", "util_8h.html#ae1c7830d95f75ba35fbc6bfa50509913", null ],
    [ "fReopenDebugLog", "util_8h.html#a08308bb9b2b24cbb0bb71508c04949a7", null ],
    [ "gArgs", "util_8h.html#a934b7735a5308149ab1bf3ca9fc4d694", null ],
    [ "logCategories", "util_8h.html#a7174d46191c5ece2145a16a42b84e0b6", null ],
    [ "nWalletBackups", "util_8h.html#a5e34214b56ce780359081f030cd9dcba", null ],
    [ "translationInterface", "util_8h.html#a0990b57c51a51237cb25603170194355", null ]
];