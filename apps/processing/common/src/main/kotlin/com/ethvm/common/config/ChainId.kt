package com.ethvm.common.config

enum class ChainId(val number: Int) {

  Mainnet(1),
  Morden(2),
  Ropsten(3),
  Rinkleby(4),
  UbiqMainNet(8),
  UbiqTestNest(9),
  Dev(17),
  RootStockMainNet(30),
  RootStockTestNet(31),
  Kovan(42),
  EthClassicMainNet(61),
  EthClassicTestNet(62),
  EWasmTestNet(66),
  GethPrivateChains(1337),
  Görli(6284),
  Stureby(314158);

  companion object {

    fun forName(name: String) = values().firstOrNull { it.name.toLowerCase() == name.toLowerCase() }

    fun forHex(hex: String) = forNumber(Integer.parseInt(hex.replace("0x", ""), 16))

    fun forNumber(number: Int) = values().firstOrNull { it.number == number }
  }
}
