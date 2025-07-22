import React, { useState } from 'react';
import { Edit3, Palette, Download, Image, Sparkles } from 'lucide-react';
import { TemplateSelector } from './editor/TemplateSelector';
import { FontSelector } from './editor/FontSelector';
import { BackgroundSelector } from './editor/BackgroundSelector';
import { PhotoUploader } from './editor/PhotoUploader';
import { PersonalInfoForm } from './editor/PersonalInfoForm';
import { CardPreview } from './editor/CardPreview';
import { ExportPanel } from './editor/ExportPanel';

interface CardData {
  name: string;
  title: string;
  company: string;
  eventName: string;
  eventLocation: string;
  role: string;
  photo: string | null;
  font: string;
  backgroundColor: string;
  backgroundPattern: string;
}

export const CardEditor = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: 'Sarah Johnson',
    title: 'Senior Product Manager',
    company: 'TechCorp Solutions',
    eventName: 'TECH CONFERENCE 2024',
    eventLocation: 'San Francisco, CA',
    role: 'SPEAKER',
    photo: null,
    font: 'font-poppins',
    backgroundColor: 'slate',
    backgroundPattern: 'circles'
  });

  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [activeTab, setActiveTab] = useState('edit');

  // 18 Unique Templates with completely different layouts and styles
  const templates = [
    { 
      name: 'Executive Elite', 
      bg: 'from-slate-900 via-slate-800 to-slate-900',
      accent: 'border-blue-400',
      layout: 'top-photo',
      style: 'corporate'
    },
    { 
      name: 'Creative Spark', 
      bg: 'from-purple-700 via-purple-600 to-pink-700',
      accent: 'border-yellow-400',
      layout: 'side-photo',
      style: 'creative'
    },
    { 
      name: 'Tech Summit', 
      bg: 'from-blue-700 via-blue-600 to-cyan-700',
      accent: 'border-green-400',
      layout: 'corner-photo',
      style: 'modern'
    },
    { 
      name: 'Minimalist Pro', 
      bg: 'from-emerald-700 via-emerald-600 to-teal-700',
      accent: 'border-white',
      layout: 'minimal',
      style: 'clean'
    },
    { 
      name: 'Academic Excellence', 
      bg: 'from-indigo-800 via-indigo-700 to-blue-800',
      accent: 'border-yellow-300',
      layout: 'split-layout',
      style: 'academic'
    },
    { 
      name: 'Conference Badge', 
      bg: 'from-orange-600 via-red-600 to-pink-600',
      accent: 'border-white',
      layout: 'badge-style',
      style: 'official'
    },
    { 
      name: 'Lanyard Card', 
      bg: 'from-cyan-700 via-blue-700 to-indigo-700',
      accent: 'border-red-400',
      layout: 'lanyard-card',
      style: 'traditional'
    },
    { 
      name: 'VIP Access', 
      bg: 'from-pink-600 via-purple-600 to-indigo-600',
      accent: 'border-gold',
      layout: 'vip-style',
      style: 'luxury'
    },
    { 
      name: 'Speaker Spotlight', 
      bg: 'from-red-700 via-orange-600 to-yellow-600',
      accent: 'border-white',
      layout: 'speaker-focus',
      style: 'prominent'
    },
    { 
      name: 'Network Hub', 
      bg: 'from-gray-800 via-gray-700 to-slate-800',
      accent: 'border-green-400',
      layout: 'networking',
      style: 'business'
    },
    { 
      name: 'Innovation Lab', 
      bg: 'from-violet-700 via-purple-600 to-fuchsia-700',
      accent: 'border-cyan-400',
      layout: 'innovation',
      style: 'futuristic'
    },
    { 
      name: 'Global Summit', 
      bg: 'from-teal-700 via-cyan-600 to-blue-700',
      accent: 'border-yellow-400',
      layout: 'global',
      style: 'international'
    },
    { 
      name: 'Startup Pitch', 
      bg: 'from-lime-600 via-green-600 to-emerald-600',
      accent: 'border-white',
      layout: 'startup',
      style: 'dynamic'
    },
    { 
      name: 'Medical Conference', 
      bg: 'from-blue-800 via-indigo-700 to-purple-800',
      accent: 'border-red-300',
      layout: 'medical',
      style: 'professional'
    },
    { 
      name: 'AI & Tech', 
      bg: 'from-slate-700 via-gray-600 to-zinc-700',
      accent: 'border-blue-400',
      layout: 'tech-ai',
      style: 'cutting-edge'
    },
    { 
      name: 'Design Workshop', 
      bg: 'from-rose-600 via-pink-500 to-purple-600',
      accent: 'border-white',
      layout: 'design-focus',
      style: 'artistic'
    },
    { 
      name: 'Business Forum', 
      bg: 'from-amber-700 via-orange-600 to-red-600',
      accent: 'border-yellow-300',
      layout: 'business-card',
      style: 'executive'
    },
    { 
      name: 'Future Forward', 
      bg: 'from-purple-800 via-violet-700 to-indigo-800',
      accent: 'border-cyan-300',
      layout: 'futuristic',
      style: 'next-gen'
    }
  ];

  // 10 Different Fonts
  const fonts = [
    { name: 'Poppins', class: 'font-poppins', style: 'Modern Sans-Serif' },
    { name: 'Inter', class: 'font-inter', style: 'Clean & Readable' },
    { name: 'Playfair Display', class: 'font-playfair', style: 'Elegant Serif' },
    { name: 'Roboto', class: 'font-sans', style: 'Professional' },
    { name: 'Montserrat', class: 'font-mono', style: 'Contemporary' },
    { name: 'Open Sans', class: 'font-serif', style: 'Friendly' },
    { name: 'Lato', class: 'font-sans', style: 'Humanist' },
    { name: 'Raleway', class: 'font-sans', style: 'Sophisticated' },
    { name: 'Source Sans Pro', class: 'font-sans', style: 'Technical' },
    { name: 'Nunito', class: 'font-sans', style: 'Rounded & Warm' }
  ];

  // Background Options
  const backgrounds = [
    { name: 'Ocean Blue', color: 'slate', pattern: 'waves' },
    { name: 'Forest Green', color: 'emerald', pattern: 'leaves' },
    { name: 'Sunset Orange', color: 'orange', pattern: 'geometric' },
    { name: 'Royal Purple', color: 'purple', pattern: 'circles' },
    { name: 'Rose Gold', color: 'rose', pattern: 'diamonds' },
    { name: 'Midnight Black', color: 'gray', pattern: 'dots' },
    { name: 'Sky Blue', color: 'blue', pattern: 'clouds' },
    { name: 'Crimson Red', color: 'red', pattern: 'abstract' }
  ];

  const handleInputChange = (field: keyof CardData, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCardData(prev => ({ ...prev, photo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left Panel - Modern Editing Tools */}
            <div className="p-8 bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-poppins text-gray-900">
                      Card Studio
                    </h2>
                    <p className="text-sm text-gray-600">Design your perfect conference ID</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Tabs */}
              <div className="flex mb-8 bg-gray-100/80 backdrop-blur-sm rounded-2xl p-1.5">
                {[
                  { id: 'edit', label: 'Content', icon: Edit3 },
                  { id: 'design', label: 'Design', icon: Palette },
                  { id: 'background', label: 'Style', icon: Image },
                  { id: 'export', label: 'Export', icon: Download }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-purple-600 shadow-lg shadow-purple-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              {activeTab === 'edit' && (
                <div className="space-y-6">
                  <PhotoUploader 
                    photo={cardData.photo} 
                    onPhotoUpload={handlePhotoUpload} 
                  />
                  <PersonalInfoForm 
                    cardData={cardData} 
                    onInputChange={handleInputChange} 
                  />
                </div>
              )}

              {activeTab === 'design' && (
                <div className="space-y-6">
                  <TemplateSelector
                    templates={templates}
                    selectedTemplate={selectedTemplate}
                    onTemplateSelect={setSelectedTemplate}
                  />
                  <FontSelector
                    fonts={fonts}
                    selectedFont={cardData.font}
                    onFontSelect={(fontClass) => handleInputChange('font', fontClass)}
                  />
                </div>
              )}

              {activeTab === 'background' && (
                <BackgroundSelector
                  backgrounds={backgrounds}
                  selectedBackground={cardData.backgroundColor}
                  onBackgroundSelect={(color, pattern) => {
                    handleInputChange('backgroundColor', color);
                    handleInputChange('backgroundPattern', pattern);
                  }}
                />
              )}

              {activeTab === 'export' && <ExportPanel />}
            </div>

            {/* Right Panel - Enhanced Live Preview */}
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-2xl"></div>
              </div>
              
              <CardPreview template={templates[selectedTemplate]} cardData={cardData} />

              {/* Preview Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/10 backdrop-blur-lg rounded-2xl p-2">
                <button className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/50 transition-colors"></button>
                <button className="w-3 h-3 bg-white/60 rounded-full"></button>
                <button className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/50 transition-colors"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
