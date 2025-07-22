import { useState } from 'react';
import { Eye, Star, Lock } from 'lucide-react';

interface TemplatesSectionProps {
  onStartCreating?: () => void;
}

export const TemplatesSection = ({ onStartCreating }: TemplatesSectionProps) => {
  const [currentCategory, setCurrentCategory] = useState('All');
  
  const categories = ['All', 'Conference', 'Corporate', 'Workshop', 'Music Festival', 'Sports', 'Academic'];
  
  const templates = [
    // Free Templates (15 total)
    { id: 1, name: "Modern Corporate", category: "Corporate", preview: "bg-gradient-to-b from-slate-800 to-slate-900", isPremium: false, downloads: 15420, rating: 4.9 },
    { id: 2, name: "Tech Conference", category: "Conference", preview: "bg-gradient-to-b from-blue-600 to-cyan-600", isPremium: false, downloads: 18750, rating: 4.9 },
    { id: 3, name: "Academic Excellence", category: "Academic", preview: "bg-gradient-to-b from-green-600 to-teal-600", isPremium: false, downloads: 7830, rating: 4.6 },
    { id: 4, name: "Business Summit", category: "Corporate", preview: "bg-gradient-to-b from-gray-700 to-gray-900", isPremium: false, downloads: 9420, rating: 4.7 },
    { id: 5, name: "Workshop Basic", category: "Workshop", preview: "bg-gradient-to-b from-orange-500 to-red-600", isPremium: false, downloads: 6340, rating: 4.5 },
    { id: 6, name: "Conference Classic", category: "Conference", preview: "bg-gradient-to-b from-indigo-600 to-purple-600", isPremium: false, downloads: 11250, rating: 4.8 },
    { id: 7, name: "Corporate Simple", category: "Corporate", preview: "bg-gradient-to-b from-blue-800 to-indigo-900", isPremium: false, downloads: 8920, rating: 4.6 },
    { id: 8, name: "Tech Meetup", category: "Conference", preview: "bg-gradient-to-b from-cyan-600 to-blue-700", isPremium: false, downloads: 7650, rating: 4.7 },
    { id: 9, name: "Academic Basic", category: "Academic", preview: "bg-gradient-to-b from-emerald-600 to-green-700", isPremium: false, downloads: 5430, rating: 4.4 },
    { id: 10, name: "Sports Basic", category: "Sports", preview: "bg-gradient-to-b from-red-600 to-orange-600", isPremium: false, downloads: 4320, rating: 4.3 },
    { id: 11, name: "Workshop Standard", category: "Workshop", preview: "bg-gradient-to-b from-yellow-500 to-orange-500", isPremium: false, downloads: 6780, rating: 4.5 },
    { id: 12, name: "Music Basic", category: "Music Festival", preview: "bg-gradient-to-b from-pink-600 to-rose-700", isPremium: false, downloads: 3920, rating: 4.2 },
    { id: 13, name: "Corporate Clean", category: "Corporate", preview: "bg-gradient-to-b from-slate-600 to-gray-800", isPremium: false, downloads: 8150, rating: 4.6 },
    { id: 14, name: "Conference Pro", category: "Conference", preview: "bg-gradient-to-b from-violet-600 to-purple-700", isPremium: false, downloads: 9840, rating: 4.7 },
    { id: 15, name: "Academic Pro", category: "Academic", preview: "bg-gradient-to-b from-teal-600 to-cyan-700", isPremium: false, downloads: 6570, rating: 4.5 },
    
    // Premium Templates (10 total)
    { id: 16, name: "Creative Conference", category: "Conference", preview: "bg-gradient-to-b from-purple-600 to-pink-600", isPremium: true, downloads: 12830, rating: 4.8 },
    { id: 17, name: "Music Festival Vibes", category: "Music Festival", preview: "bg-gradient-to-b from-orange-500 to-red-600", isPremium: true, downloads: 9420, rating: 4.7 },
    { id: 18, name: "Sports Championship", category: "Sports", preview: "bg-gradient-to-b from-yellow-500 to-orange-500", isPremium: true, downloads: 11250, rating: 4.8 },
    { id: 19, name: "Premium Corporate", category: "Corporate", preview: "bg-gradient-to-b from-rose-600 to-pink-700", isPremium: true, downloads: 8760, rating: 4.9 },
    { id: 20, name: "Elite Conference", category: "Conference", preview: "bg-gradient-to-b from-emerald-500 to-teal-600", isPremium: true, downloads: 7340, rating: 4.8 },
    { id: 21, name: "Workshop Premium", category: "Workshop", preview: "bg-gradient-to-b from-amber-500 to-yellow-600", isPremium: true, downloads: 5920, rating: 4.7 },
    { id: 22, name: "Academic Elite", category: "Academic", preview: "bg-gradient-to-b from-blue-500 to-indigo-600", isPremium: true, downloads: 4830, rating: 4.6 },
    { id: 23, name: "Sports Elite", category: "Sports", preview: "bg-gradient-to-b from-red-500 to-rose-600", isPremium: true, downloads: 6420, rating: 4.8 },
    { id: 24, name: "Music Premium", category: "Music Festival", preview: "bg-gradient-to-b from-fuchsia-500 to-purple-600", isPremium: true, downloads: 5670, rating: 4.7 },
    { id: 25, name: "Corporate Luxury", category: "Corporate", preview: "bg-gradient-to-b from-indigo-500 to-blue-600", isPremium: true, downloads: 7890, rating: 4.9 }
  ];

  const filteredTemplates = currentCategory === 'All' 
    ? templates 
    : templates.filter(t => t.category === currentCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Professional Templates for 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Every Event
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose from our extensive collection of professionally designed templates. 
            15 templates are completely free, with premium options for advanced features.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  currentCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredTemplates.map((template, index) => (
            <div 
              key={template.id}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Template Preview - Now Vertical */}
              <div className="relative h-80 overflow-hidden">
                <div className={`w-full h-full ${template.preview} relative`}>
                  {/* Mock Conference Card Content */}
                  <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white flex flex-col">
                    {/* Photo placeholder */}
                    <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-3"></div>
                    
                    {/* Name and details */}
                    <div className="text-center mb-4">
                      <div className="w-20 h-3 bg-white/40 rounded mx-auto mb-2"></div>
                      <div className="w-16 h-2 bg-white/30 rounded mx-auto mb-1"></div>
                      <div className="w-24 h-2 bg-white/25 rounded mx-auto"></div>
                    </div>
                    
                    {/* Event badge */}
                    <div className="bg-white/20 rounded-lg p-2 mb-4 flex-1">
                      <div className="w-full h-2 bg-white/30 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/25 rounded"></div>
                    </div>
                    
                    {/* Bottom section */}
                    <div className="flex justify-between items-end">
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                      <div className="w-12 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                      <button 
                        onClick={template.isPremium ? undefined : onStartCreating}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                          template.isPremium 
                            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        }`}
                      >
                        {template.isPremium ? <Lock className="w-4 h-4" /> : null}
                        {template.isPremium ? 'Upgrade' : 'Use Free'}
                      </button>
                    </div>
                  </div>

                  {/* Premium Badge */}
                  {template.isPremium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Premium
                    </div>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold font-poppins text-gray-900">
                    {template.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    {template.rating}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{template.category}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{template.downloads.toLocaleString()} downloads</span>
                  <span className={`font-medium ${template.isPremium ? 'text-yellow-600' : 'text-green-600'}`}>
                    {template.isPremium ? 'Premium' : 'Free'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg px-8 py-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">15</div>
              <div className="text-sm text-gray-600">Free Templates</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">10</div>
              <div className="text-sm text-gray-600">Premium Templates</div>
            </div>
          </div>
          <button 
            onClick={onStartCreating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Creating Your Card
          </button>
        </div>
      </div>
    </section>
  );
};
