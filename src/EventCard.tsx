import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  image,
  category,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
