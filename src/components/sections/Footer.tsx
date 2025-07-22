import { 
  CreditCard, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram,
  Star,
  Shield,
  Zap
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins">CardCraft Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Create professional event ID cards in minutes with our premium design tools 
              and enterprise features. Trusted by 50,000+ event organizers worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Card Generator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Bulk Generation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Analytics Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">API Access</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">White Label</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Conferences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Corporate Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Educational</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Music Festivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sports Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Trade Shows</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Meetups</a></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Press Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>support@cardcraft.pro</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-2">
                Stay updated with CardCraft Pro
              </h3>
              <p className="text-gray-300 text-sm">
                Get the latest features, templates, and event industry insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2024 CardCraft Pro. All rights reserved. 
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
