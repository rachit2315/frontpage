"use client";

import Image from "next/image";
import { FaUserGraduate, FaBook, FaSearch, FaUserPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample library data
const libraries = [
  { id: 1, name: "Central Public Library", location: "Downtown" },
  { id: 2, name: "Academic Excellence Library", location: "University Area" },
  { id: 3, name: "Community Knowledge Hub", location: "West Side" },
  { id: 4, name: "Digital Learning Center", location: "Tech Park" },
  { id: 5, name: "Heritage Reading Room", location: "Old City" },
];

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredLibraries = libraries.filter(library =>
    library.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Only render the content after mounting to prevent hydration errors
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-75"></div>

      <div className="relative z-10 flex flex-col items-center p-8 min-h-screen">
        <h1 className="text-6xl font-bold mb-24 mt-10 text-gray-800 font-poppins">
          Welcome to The Learning Hub
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {/* Students Card */}
          <div className="group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-yellow-50">
                  <Image
                    src="/1.png"
                    alt="Student"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Students</h2>
                  <p className="text-gray-600 mb-8">
                    Find lessons to learn about topics that interest you most or strengthen your skills through interactive lessons
                  </p>
                  <Link href="https://student.thelearninghubonline.com/">
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-xl font-medium transition-all">
                      Start Learning
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Parents Card */}
          <div className="group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-blue-50">
                  <Image
                    src="/2.png"
                    alt="Parent"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Library admin
                  </h2>
                  <p className="text-gray-600 mb-8">
                  Manage Library operations like attendance, fees collection etc with ease
                  </p>
                  <Link href="/parent-dashboard">
                    <button className="w-full bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all">
                      Manage here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Schools Card */}
          <div className="group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-purple-50">
                  <Image
                    src="/3.png"
                    alt="School"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Near one ?</h2>
                  <p className="text-gray-600 mb-8">
                  Search library in your area
                  </p>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Search for librarys..."
                      className="w-full px-6 py-3 rounded-xl bg-white border-2 border-purple-400 text-gray-800 
                      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 
                      transition-all duration-300 shadow-sm hover:border-purple-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 
                    transition-all duration-300 group-hover:text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
