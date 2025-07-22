import { Button } from '../ui/button';
import { Play, Star, Users, CreditCard, Zap, Sparkles } from 'lucide-react';
import { CardPreview } from '../CardPreview';

interface HeroSectionProps {
  onStartCreating?: () => void;
}

export const HeroSection = ({ onStartCreating }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Conference Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-purple-500/30 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow">
          <div className="w-16 h-16 bg-blue-500/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 bg-yellow-500/30 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              Trusted by 50,000+ event organizers worldwide
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins mb-6 leading-tight text-white">
              Create 
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                {' '}Professional{' '}
              </span>
              Conference ID Cards 
              <span className="text-gray-300">in Minutes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed font-inter max-w-2xl">
              Generate stunning, customizable identity cards for conferences, events, and workshops 
              with our premium design tools and enterprise features. No design skills required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                size="lg" 
                onClick={onStartCreating}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Creating Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                View Templates
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-purple-400" />
                2M+ cards generated
              </div>
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-2 text-blue-400" />
                Enterprise grade security
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                4.9/5 rating
              </div>
            </div>
          </div>

          {/* Right Content - Card Preview */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
            <CardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
