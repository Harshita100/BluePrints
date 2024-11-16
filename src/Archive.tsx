import React, { useState } from "react";
import EventCard from "./EventCard.tsx";
import { Search, Filter } from "lucide-react";

export default function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const pastEvents = [
    {
      title: "Winter Music Festival",
      date: "December 15, 2023",
      time: "7:00 PM",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      category: "Festival",
    },
    {
      title: "Entrepreneurship Summit",
      date: "January 10, 2024",
      time: "10:00 AM",
      location: "Business School",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      category: "Conference",
    },
    {
      title: "Theater Production: Romeo & Juliet",
      date: "February 5, 2024",
      time: "6:30 PM",
      location: "Drama Hall",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
      category: "Performance",
    },
    {
      title: "Science & Technology Fair",
      date: "February 20, 2024",
      time: "9:00 AM",
      location: "Science Complex",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      category: "Exhibition",
    },
  ];

  const categories = [
    "all",
    "Festival",
    "Conference",
    "Performance",
    "Exhibition",
  ];

  const filteredEvents = pastEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Archive</h1>
        <p className="text-gray-600 text-lg">
          Relive our past events and celebrations
        </p>
      </div>

      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <Filter className="text-gray-400 h-5 w-5" />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No events found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
