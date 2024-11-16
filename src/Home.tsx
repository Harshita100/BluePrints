import React from "react";
import EventCard from "./EventCard.tsx";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const upcomingEvents = [
    {
      title: "Annual Cultural Festival 2024",
      date: "March 15, 2024",
      time: "6:00 PM",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      category: "Festival",
    },
    {
      title: "Tech Innovation Summit",
      date: "March 20, 2024",
      time: "10:00 AM",
      location: "Conference Hall",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      category: "Conference",
    },
    {
      title: "Spring Music Concert",
      date: "April 5, 2024",
      time: "7:00 PM",
      location: "Open Air Theatre",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      category: "Concert",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl" />
        <div
          className="relative bg-cover bg-center h-96 rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531058020387-3be344556be6)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Welcome to CampusWave
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Your gateway to campus events, podcasts, and cultural
              celebrations. Stay connected with everything happening in our
              vibrant community.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <a
            href="/archive"
            className="flex items-center text-indigo-600 hover:text-indigo-700"
          >
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-4">
              <a
                href="/media"
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                <span className="w-4 h-4 bg-indigo-100 rounded-full mr-3"></span>
                Latest Podcasts
              </a>
              <a
                href="/archive"
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                <span className="w-4 h-4 bg-purple-100 rounded-full mr-3"></span>
                Event Galleries
              </a>
              <a
                href="/media"
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                <span className="w-4 h-4 bg-pink-100 rounded-full mr-3"></span>
                Featured Stories
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
            <p className="mb-6">
              Want to contribute to campus media? Join our team of content
              creators and event organizers!
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
