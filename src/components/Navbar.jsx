import WalletButton from "./WalletButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">🌾</span>
        <h1 className="text-xl font-bold text-white tracking-tight">
          Farmers<span className="text-green-500">Exchange</span>
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <li>
          <a href="#marketplace" className="hover:text-green-400 transition-colors">
            Marketplace
          </a>
        </li>
        <li>
          <a href="#exchange" className="hover:text-green-400 transition-colors">
            Exchange
          </a>
        </li>
        <li>
          <a href="#stats" className="hover:text-green-400 transition-colors">
            Stats
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition-colors">
            Docs
          </a>
        </li>
      </ul>

      {/* Wallet */}
      <WalletButton />
    </nav>
  );
}
