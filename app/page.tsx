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
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://main.d1e6d6hitalc2u.amplifyapp.com/Home.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center p-8 min-h-screen">
        <h1 className="text-6xl font-bold mb-20 mt-10 text-white font-poppins">
          OUR SERVICE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {/* Student Card */}
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border-2 border-white/30 flex flex-col items-center justify-between h-[400px] hover:bg-blue-600/30">
              <FaUserGraduate className="text-6xl text-white mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">STUDENT</h2>
              <p className="text-white text-center mb-8 font-light">
                Quality study materials and test series for All Exams
              </p>
              <div className="flex gap-4">
                <Link href="https://thelearninghubonline.com/current_affairs">
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-all">
                    <FaBook className="text-lg" />
                    LEARNING
                  </button>
                </Link>
                <Link href="https://thelearninghubonline.com/signup">
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-all">
                    <FaUserPlus className="text-lg" />
                    ADMISSION
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Library Admin Card */}
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border-2 border-white/30 flex flex-col items-center justify-between h-[400px] hover:bg-blue-600/30">
              <FaBook className="text-6xl text-white mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">LIBRARY ADMIN</h2>
              <p className="text-white text-center mb-8 font-light">
                Manage Library operations like attendance, fees collection etc with ease
              </p>
              <Link href="/admin-dashboard">
                <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-all">
                  <FaBook className="text-lg" />
                  START MANAGING
                </button>
              </Link>
            </div>
          </div>

          {/* Search Card */}
          <div className={`group transition-all duration-300 ${!isSearchOpen && "hover:scale-105"}`}>
            <div className={`bg-white/20 backdrop-blur-sm p-8 rounded-lg border-2 border-white/30 
              flex flex-col items-center justify-between h-[400px] 
              ${!isSearchOpen && "hover:bg-blue-600/30"} 
              ${isSearchOpen && "bg-blue-600/30"}`}
            >
              <FaSearch className="text-6xl text-white mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">SEARCH</h2>
              <p className="text-white text-center mb-8 font-light">
                Search library in your area
              </p>
              <div className="relative w-full">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 
                    text-white px-6 py-3 rounded-full font-medium transition-all"
                >
                  <FaSearch className="text-lg" />
                  {isSearchOpen ? 'CLOSE SEARCH' : 'START SEARCHING'}
                </button>
                
                {/* Search Dropdown */}
                <div className={`absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-md 
                  rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50
                  ${isSearchOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}
                >
                  <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search libraries..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 
                          focus:outline-none focus:border-blue-500 text-gray-800"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="max-h-60 overflow-y-auto bg-white">
                    {filteredLibraries.length > 0 ? (
                      filteredLibraries.map((library) => (
                        <Link href={`/library/${library.id}`} key={library.id}>
                          <div className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors">
                            <div className="font-medium text-gray-800">{library.name}</div>
                            <div className="text-sm text-gray-600">{library.location}</div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-600 text-center">
                        No libraries found
                      </div>
                    )}
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
