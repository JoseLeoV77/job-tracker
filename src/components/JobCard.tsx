"use client";
import { useState } from "react";

export default function JobCard({ job }: { job: any }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center transition-all hover:border-blue-300">
      <div>
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-slate-500">{job.company} • {job.location}</p>
      </div>
      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        className={`px-4 py-2 rounded-md font-medium transition-colors ${
          isFavorite 
            ? 'bg-red-50 text-red-600 border border-red-200' 
            : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
        }`}
      >
        {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
      </button>
    </div>
  );
}