import { useState } from "react";
import { Link } from "react-router-dom";
import tribesData from "../data/tribes.json";


function Tribes() {
  const [searchTerm, setSearchTerm] = useState("");

  const tribesArray = Object.entries(tribesData).map(([id, data]) => ({
    id,
    ...data,
  }));

  const filteredTribes = tribesArray.filter((tribe) =>
    tribe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Народы мира 🌎</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔎 Поиск народа..."
          className="border p-3 rounded w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTribes.map((tribe) => (
          <Link
            to={`/tribes/${tribe.id}`}
            key={tribe.id}
            className="block bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{tribe.name}</h2>
            <p className="text-gray-600">{tribe.region.join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tribes;
