import { useState } from "react";

export default function FarmerCard({ name, crop, quantity, price, image, location, rating }) {
  const [exchanged, setExchanged] = useState(false);

  const handleExchange = () => {
    setExchanged(true);
    setTimeout(() => setExchanged(false), 2000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-600/50 hover:-translate-y-1 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={crop}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80";
          }}
        />
        {/* Rating badge */}
        <span className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs px-2 py-1 rounded-full">
          ⭐ {rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Farmer info */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-green-600/30 flex items-center justify-center text-xs">
            🧑‍🌾
          </div>
          <div>
            <p className="text-white text-sm font-medium">{name}</p>
            <p className="text-zinc-500 text-xs">{location}</p>
          </div>
        </div>

        {/* Crop name */}
        <h2 className="text-xl font-bold text-white">{crop}</h2>

        {/* Quantity & price */}
        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-zinc-400 text-sm">{quantity} available</span>
          <span className="text-green-400 font-semibold">{price}</span>
        </div>

        {/* Exchange button */}
        <button
          onClick={handleExchange}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
            exchanged
              ? "bg-green-700 text-white"
              : "bg-green-600 hover:bg-green-500 text-white"
          }`}
        >
          {exchanged ? "✓ Added to Exchange" : "Exchange"}
        </button>
      </div>
    </div>
  );
}
