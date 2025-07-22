import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Event Director",
      company: "TechSummit Global",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b704",
      rating: 5,
      text: "This platform transformed our conference experience. The ID cards look incredibly professional, and the QR analytics helped us understand attendee networking patterns like never before. Absolutely game-changing!",
      eventSize: "5,000+ attendees"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Manager", 
      company: "Innovate Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      text: "We've used this for 3 major corporate events. The bulk generation feature saved us hours of work, and our employees love the professional look. The customer support team is exceptional too.",
      eventSize: "1,200+ employees"
    },
    {
      name: "Dr. Emily Chen",
      role: "Conference Coordinator",
      company: "Academic Research Institute",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      text: "As someone who organizes multiple academic conferences, this tool is indispensable. The template variety and customization options are perfect for different event types. Highly recommended!",
      eventSize: "800+ researchers"
    },
    {
      name: "James Thompson",
      role: "Festival Producer",
      company: "Music Connect Festival",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "The creative templates and vibrant designs perfectly match our festival's energy. The NFC integration for VIP passes was a huge hit with artists and sponsors. Worth every penny!",
      eventSize: "15,000+ festival goers"
    },
    {
      name: "Lisa Park",
      role: "HR Director",
      company: "Global Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      rating: 5,
      text: "The enterprise features are exactly what we needed for our company-wide events. White-label branding, SSO integration, and dedicated support made the transition seamless.",
      eventSize: "10,000+ employees"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Loved by 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Event Organizers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our customers say about their experience creating professional 
            ID cards for their events.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="pt-8">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{current.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {current.name}
                      </div>
                      <div className="text-gray-600">
                        {current.role}
                      </div>
                      <div className="text-sm text-purple-600 font-medium">
                        {current.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Event Size</div>
                    <div className="font-semibold text-gray-700">{current.eventSize}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold font-poppins mb-4 text-gray-900">
            Join thousands of satisfied customers
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start creating professional ID cards for your events today and see why 
            event organizers worldwide choose our platform.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};
