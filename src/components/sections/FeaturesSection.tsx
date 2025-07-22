import { 
  Palette, 
  Upload, 
  QrCode, 
  Users, 
  Download, 
  BarChart3,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Crown,
  Settings
} from 'lucide-react';
import React from 'react';

// 1. Define the Feature type
type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
};

type FeatureCardProps = {
  feature: Feature;
  delay?: number;
};

// 2. Type your component props!
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, delay = 0 }) => (
  <div 
    className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative z-10">
      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold font-poppins mb-2 text-gray-900">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
    {/* Background Gradient */}
    <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
    {/* Hover Border Effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-2xl transition-colors duration-300"></div>
  </div>
);

export const FeaturesSection: React.FC = () => {

  const coreFeatures: Feature[] = [
    {
      icon: Palette,
      title: "Custom Templates",
      description: "25+ professional templates for every event type",
      color: "bg-purple-500"
    },
    {
      icon: Upload,
      title: "Photo Upload & Edit",
      description: "Drag & drop photos with advanced editing tools",
      color: "bg-blue-500"
    },
    {
      icon: QrCode,
      title: "QR & NFC Codes",
      description: "Smart codes with analytics and verification",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Role Customization",
      description: "Speaker, Organizer, VIP, Staff roles and more",
      color: "bg-yellow-500"
    }
  ];

  const advancedFeatures: Feature[] = [
    {
      icon: Download,
      title: "Bulk Generation",
      description: "CSV import for hundreds of cards at once",
      color: "bg-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track scans, usage, and engagement metrics",
      color: "bg-pink-500"
    },
    {
      icon: Zap,
      title: "API Access",
      description: "Integrate with your existing event platform",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliance with advanced encryption",
      color: "bg-red-500"
    }
  ];

  const enterpriseFeatures: Feature[] = [
    {
      icon: Crown,
      title: "White-Label",
      description: "Custom branding for your organization",
      color: "bg-amber-500"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Fast delivery worldwide with 99.9% uptime",
      color: "bg-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Native iOS and Android applications",
      color: "bg-cyan-500"
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description: "Tailored solutions for enterprise needs",
      color: "bg-slate-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Everything You Need to Create
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Amazing ID Cards
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From basic templates to enterprise-grade features, we've got everything covered 
            to make your event professional and memorable.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold font-poppins text-center mb-12 text-gray-800">
            Core Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold font-poppins text-center mb-12 text-gray-800">
            Advanced Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins text-center mb-12 text-gray-800">
            Enterprise Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20 text-center">
          <div className="glassmorphism rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-gray-800">
              See It In Action
            </h3>
            <p className="text-gray-600 mb-6">
              Watch how easy it is to create professional ID cards in under 2 minutes
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};