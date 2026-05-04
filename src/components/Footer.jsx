export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500 text-xl">🌾</span>
              <h3 className="text-white font-bold text-lg">
                Farmers<span className="text-green-500">Exchange</span>
              </h3>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Decentralized marketplace for farm products, powered by Soroban
              smart contracts on the Stellar network.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Platform</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
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
                  Statistics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Community</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <span>⌥</span> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <span>𝕏</span> Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <span>#</span> Discord
                </a>
              </li>
              <li>
                <a
                  href="https://stellar.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <span>✦</span> Stellar.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-zinc-600 text-xs">
          <p>© 2026 FarmersExchange. All rights reserved.</p>
          <p>Built on Soroban · Stellar Network</p>
        </div>
      </div>
    </footer>
  );
}
