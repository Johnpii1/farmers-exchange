import { useState } from "react";
import { farmers } from "../data/farmers";
import FarmerCard from "./FarmerCard";

const crops = ["All", "Tomatoes", "Maize", "Cassava", "Yam", "Rice", "Groundnuts"];

export default function ProductGrid() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = farmers.filter((f) => {
    const matchesCrop = filter === "All" || f.crop === filter;
    const matchesSearch =
      f.crop.toLowerCase().includes(search.toLowerCase()) ||
      f.name.toLowerCase().includes(search.toLowerCase());
    return matchesCrop && matchesSearch;
  });

  return (
    <section id="marketplace" className="px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Marketplace</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Browse verified farm products available for exchange
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search crops or farmers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-2.5 rounded-xl text-sm w-full md:w-64 focus:outline-none focus:border-green-600 transition-colors"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {crops.map((crop) => (
          <button
            key={crop}
            onClick={() => setFilter(crop)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === crop
                ? "bg-green-600 text-white"
                : "bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-green-600/50 hover:text-white"
            }`}
          >
            {crop}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <FarmerCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-500">
          <p className="text-4xl mb-3">🌾</p>
          <p>No products found. Try a different search.</p>
        </div>
      )}
    </section>
  );
}
