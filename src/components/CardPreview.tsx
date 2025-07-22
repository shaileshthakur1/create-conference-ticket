import  { useState, useEffect } from 'react';
import { QrCode, Wifi, Calendar, MapPin } from 'lucide-react';

export const CardPreview = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  
  const templates = [
    {
      name: "Modern Corporate",
      background: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900",
      accent: "border-blue-400",
      textColor: "text-white"
    },
    {
      name: "Creative Conference", 
      background: "bg-gradient-to-b from-purple-700 via-purple-600 to-pink-700",
      accent: "border-yellow-400",
      textColor: "text-white"
    },
    {
      name: "Tech Summit",
      background: "bg-gradient-to-b from-blue-700 via-blue-600 to-cyan-700", 
      accent: "border-green-400",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % templates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [templates.length]);

  const template = templates[currentTemplate];

  return (
    <div className="relative flex justify-center">
      {/* 3D Card Container - Now Vertical */}
      <div className="card-3d">
        <div className={`
          w-64 h-96 rounded-3xl shadow-2xl p-6 relative overflow-hidden border-2 
          ${template.background} ${template.accent} ${template.textColor}
          transform transition-all duration-1000 hover:shadow-3xl
        `}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header Section */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/40 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-1">Sarah Johnson</h3>
              <p className="text-sm opacity-90 mb-1">Senior Product Manager</p>
              <p className="text-xs opacity-75">TechCorp Solutions</p>
            </div>

            {/* Event Details */}
            <div className="flex-1 space-y-4">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 opacity-75" />
                  <span className="text-xs font-medium">TECH CONFERENCE 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 opacity-75" />
                  <span className="text-xs opacity-75">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">SPEAKER</span>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-end mt-4">
              <div className="flex items-center space-x-3">
                <QrCode className="w-8 h-8 opacity-75" />
                <Wifi className="w-6 h-6 opacity-75" />
              </div>
              <div className="text-xs opacity-60">
                #ID: 2024-{String(currentTemplate + 1).padStart(3, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Template Indicators */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {templates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTemplate(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTemplate 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
