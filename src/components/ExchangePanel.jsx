import { useState } from "react";

const tokens = ["XLM", "USDC", "AQUA", "yXLM"];

// Mock exchange rates relative to XLM
const rates = {
  XLM: { XLM: 1, USDC: 0.11, AQUA: 45.2, yXLM: 0.98 },
  USDC: { XLM: 9.09, USDC: 1, AQUA: 411, yXLM: 8.91 },
  AQUA: { XLM: 0.022, USDC: 0.0024, AQUA: 1, yXLM: 0.0217 },
  yXLM: { XLM: 1.02, USDC: 0.112, AQUA: 46.1, yXLM: 1 },
};

export default function ExchangePanel() {
  const [fromToken, setFromToken] = useState("XLM");
  const [toToken, setToToken] = useState("USDC");
  const [amount, setAmount] = useState("");
  const [swapping, setSwapping] = useState(false);
  const [swapped, setSwapped] = useState(false);

  const rate = rates[fromToken]?.[toToken] ?? 0;
  const outputAmount = amount ? (parseFloat(amount) * rate).toFixed(4) : "";

  const handleSwap = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setSwapping(true);
    // Simulate contract call delay
    await new Promise((r) => setTimeout(r, 1500));
    setSwapping(false);
    setSwapped(true);
    setTimeout(() => setSwapped(false), 3000);
  };

  const flipTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setAmount(outputAmount);
  };

  return (
    <section id="exchange" className="px-6 py-12 max-w-6xl mx-auto">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">Exchange</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Swap tokens via Soroban smart contracts
          </p>
        </div>

        {/* Panel */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          {/* From */}
          <div className="bg-zinc-800 rounded-xl p-4 mb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">You Pay</span>
              <span className="text-zinc-500 text-xs">Balance: —</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-white text-2xl font-semibold w-full focus:outline-none placeholder-zinc-600"
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none cursor-pointer"
              >
                {tokens.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Flip button */}
          <div className="flex justify-center my-1">
            <button
              onClick={flipTokens}
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition-all"
              aria-label="Flip tokens"
            >
              ⇅
            </button>
          </div>

          {/* To */}
          <div className="bg-zinc-800 rounded-xl p-4 mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">You Receive</span>
              <span className="text-zinc-500 text-xs">Balance: —</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                placeholder="0.00"
                value={outputAmount}
                className="bg-transparent text-green-400 text-2xl font-semibold w-full focus:outline-none placeholder-zinc-600 cursor-default"
              />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none cursor-pointer"
              >
                {tokens.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Rate info */}
          {amount && (
            <div className="flex justify-between text-xs text-zinc-500 mb-4 px-1">
              <span>Exchange Rate</span>
              <span>
                1 {fromToken} = {rate} {toToken}
              </span>
            </div>
          )}

          {/* Swap button */}
          <button
            onClick={handleSwap}
            disabled={swapping || !amount || fromToken === toToken}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
              swapped
                ? "bg-green-700 text-white"
                : "bg-green-600 hover:bg-green-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            }`}
          >
            {swapping
              ? "Swapping via Soroban..."
              : swapped
              ? "✓ Swap Successful!"
              : fromToken === toToken
              ? "Select different tokens"
              : "Swap Tokens"}
          </button>

          {/* Info */}
          <p className="text-center text-zinc-600 text-xs mt-4">
            Powered by Soroban AMM · Stellar Network
          </p>
        </div>
      </div>
    </section>
  );
}
