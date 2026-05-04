import { useState } from "react";

export default function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const shortAddress = (addr) =>
    addr ? `${addr.slice(0, 4)}...${addr.slice(-4)}` : "";

  const handleConnect = async () => {
    setLoading(true);
    try {
      // Freighter wallet integration
      if (window.freighter) {
        await window.freighter.requestAccess();
        const pubKey = await window.freighter.getPublicKey();
        setAddress(pubKey);
        setConnected(true);
      } else {
        // Demo mode — simulate a connected wallet
        const demoKey = "GDEMO...XLMK";
        setAddress("GDEMO1234XLMK5678");
        setConnected(true);
      }
    } catch (err) {
      console.error("Wallet connection failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setConnected(false);
    setAddress("");
  };

  if (connected) {
    return (
      <button
        onClick={handleDisconnect}
        className="flex items-center gap-2 bg-green-600/20 border border-green-600 text-green-400 px-4 py-2 rounded-lg text-sm hover:bg-green-600/30 transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        {shortAddress(address)}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={loading}
      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-60"
    >
      {loading ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
