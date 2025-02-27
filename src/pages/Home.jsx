import React, { useState } from "react";
import PostTradeModal from "../components/PostTradeModal";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample skill data
  const skillTrades = [
    {
      id: 1,
      user: "Alex Thompson",
      offering: "Guitar Lessons",
      seeking: "Spanish Language",
      experience: "5 years",
      location: "New York",
      rating: 4.8,
      category: "music",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      user: "Sarah Chen",
      offering: "Web Development",
      seeking: "Photography",
      experience: "3 years",
      location: "San Francisco",
      rating: 4.9,
      category: "technology",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      user: "Mike Johnson",
      offering: "Cooking Classes",
      seeking: "Fitness Training",
      experience: "7 years",
      location: "Chicago",
      rating: 4.7,
      category: "culinary",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  // Filter skills based on search and category
  const filteredSkills = skillTrades.filter((trade) => {
    const matchesSearch =
      trade.offering.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.seeking.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || trade.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search skills, locations..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Post a Skill Trade
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((trade) => (
            <div
              key={trade.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={trade.avatar || "/placeholder.svg"}
                    alt={trade.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {trade.user}
                  </h3>
                  <p className="text-sm text-gray-500">{trade.location}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {trade.rating}
                  </span>
                  <svg
                    className="w-5 h-5 text-yellow-400 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-sm font-medium text-indigo-900">
                    Offering
                  </p>
                  <p className="text-sm text-indigo-700">{trade.offering}</p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Seeking</p>
                  <p className="text-sm text-green-700">{trade.seeking}</p>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {trade.experience} of experience
                </div>
              </div>

              <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                Connect & Trade
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Post Trade Modal */}
      <PostTradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
