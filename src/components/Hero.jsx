export default function Hero() {
  return (
    <section className="relative text-center py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl" />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-green-400 text-xs px-4 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Powered by Soroban · Stellar Network
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
        Trade Farm Products{" "}
        <span className="text-green-500">On Soroban</span>
      </h1>

      {/* Subtext */}
      <p className="mt-5 text-zinc-400 text-lg max-w-xl mx-auto">
        A secure, decentralized marketplace connecting farmers and buyers
        through smart contracts on the Stellar blockchain.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#marketplace"
          className="bg-green-600 hover:bg-green-500 text-white px-7 py-3 rounded-xl font-semibold transition-all"
        >
          Browse Marketplace
        </a>
        <a
          href="#exchange"
          className="bg-zinc-800 hover:bg-zinc-700 text-white px-7 py-3 rounded-xl font-semibold transition-all border border-zinc-700"
        >
          Start Exchanging
        </a>
      </div>

      {/* Supported tokens */}
      <div className="mt-10 flex items-center justify-center gap-3 text-zinc-500 text-sm">
        <span>Supported tokens:</span>
        {["XLM", "USDC", "AQUA", "yXLM"].map((t) => (
          <span
            key={t}
            className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full text-zinc-300 text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
