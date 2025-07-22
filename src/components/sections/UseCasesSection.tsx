import { 
  Users, 
  Building, 
  GraduationCap, 
  Music, 
  Trophy, 
  Briefcase,
  Heart,
  Calendar
} from 'lucide-react';

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Conferences & Summits",
      description: "Professional ID cards for speakers, attendees, and organizers with QR codes for networking",
      stats: "15,000+ events",
      color: "bg-blue-500",
      image: "conference"
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Branded identity cards for team meetings, workshops, and company gatherings",
      stats: "8,500+ companies",
      color: "bg-purple-500",
      image: "corporate"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Student and faculty ID cards for seminars, workshops, and academic conferences",
      stats: "2,200+ schools",
      color: "bg-green-500",
      image: "education"
    },
    {
      icon: Music,
      title: "Music Festivals",
      description: "Vibrant festival passes with artist credentials, VIP access, and stage management",
      stats: "450+ festivals",
      color: "bg-pink-500",
      image: "music"
    },
    {
      icon: Trophy,
      title: "Sports Events",
      description: "Athletic competition credentials for participants, coaches, and officials", 
      stats: "1,800+ tournaments",
      color: "bg-orange-500",
      image: "sports"
    },
    {
      icon: Briefcase,
      title: "Trade Shows",
      description: "Exhibition badges for vendors, visitors, and industry professionals",
      stats: "3,200+ exhibitions",
      color: "bg-indigo-500",
      image: "trade"
    },
    {
      icon: Heart,
      title: "Charity Events",
      description: "Volunteer and donor recognition cards for fundraising and community events",
      stats: "900+ nonprofits",
      color: "bg-red-500",
      image: "charity"
    },
    {
      icon: Calendar,
      title: "Meetups & Workshops",
      description: "Casual event badges for networking groups, skill-sharing, and community gatherings",
      stats: "5,600+ meetups",
      color: "bg-teal-500",
      image: "meetups"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Perfect for 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Every Event Type
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by organizations worldwide, our platform adapts to any event 
            with customizable templates and professional features.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className={`w-14 h-14 ${useCase.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold font-poppins mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {useCase.stats}
                  </span>
                  <span className="text-xs font-medium text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                    View Examples →
                  </span>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-poppins mb-4 text-gray-900">
              Trusted by Leading Organizations
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how event organizers worldwide are creating memorable experiences 
              with our professional ID card solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-gray-600">Event Organizers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Cards Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold font-poppins mb-4 text-gray-900">
            Ready to create professional ID cards for your event?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful event organizers who trust our platform 
            to create memorable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Creating Free
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              View All Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};