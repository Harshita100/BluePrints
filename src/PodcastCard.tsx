import React from "react";
import { Play, Clock } from "lucide-react";

interface PodcastCardProps {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

export default function PodcastCard({
  title,
  description,
  duration,
  thumbnail,
}: PodcastCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
          <Play className="h-12 w-12 text-white" fill="white" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
