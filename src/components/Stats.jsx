const stats = [
  { value: "200+", label: "Verified Farmers", icon: "🧑‍🌾" },
  { value: "1,400+", label: "Total Trades", icon: "🔄" },
  { value: "4", label: "Supported Tokens", icon: "🪙" },
  { value: "$2.1M", label: "Total Volume", icon: "📈" },
];

export default function Stats() {
  return (
    <section id="stats" className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-green-600/50 transition-all"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
            <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
