import React from "react";
import PodcastCard from "./PodcastCard.tsx";

export default function MediaHub() {
  const podcasts = [
    {
      title: "Campus Life Uncovered",
      description:
        "Weekly discussions about student life, academics, and campus culture",
      duration: "45 min",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    },
    {
      title: "Tech Talk Tuesday",
      description:
        "Latest in technology and innovation from our engineering department",
      duration: "30 min",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    },
    {
      title: "Arts & Culture Show",
      description: "Exploring the creative side of campus life",
      duration: "35 min",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },
  ];

  const galleries = [
    {
      title: "Spring Festival 2024",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      count: "42 photos",
    },
    {
      title: "Sports Week Highlights",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      count: "56 photos",
    },
    {
      title: "Cultural Night",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      count: "38 photos",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Podcasts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Photo Galleries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={gallery.image}
                alt={gallery.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {gallery.title}
                </h3>
                <p className="text-gray-300">{gallery.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
