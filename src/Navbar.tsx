import React from "react";
import { Menu, X, Radio, Calendar, Archive } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Radio className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">CampusWave</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                className="flex items-center hover:text-indigo-300 transition"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Events
              </a>
              <a
                href="/media"
                className="flex items-center hover:text-indigo-300 transition"
              >
                <Radio className="h-4 w-4 mr-1" />
                Media Hub
              </a>
              <a
                href="/archive"
                className="flex items-center hover:text-indigo-300 transition"
              >
                <Archive className="h-4 w-4 mr-1" />
                Archive
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 hover:bg-indigo-800 rounded-md"
            >
              Events
            </a>
            <a
              href="/media"
              className="block px-3 py-2 hover:bg-indigo-800 rounded-md"
            >
              Media Hub
            </a>
            <a
              href="/archive"
              className="block px-3 py-2 hover:bg-indigo-800 rounded-md"
            >
              Archive
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
