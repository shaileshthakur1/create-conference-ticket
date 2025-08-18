import React, { useState } from 'react';
import { Edit3, Palette, Download, Image, Sparkles } from 'lucide-react';
import { TemplateSelector } from './editor/TemplateSelector';
import { FontSelector } from './editor/FontSelector';
import { BackgroundSelector } from './editor/BackgroundSelector';
import { PhotoUploader } from './editor/PhotoUploader';
import { PersonalInfoForm } from './editor/PersonalInfoForm';
import { CardPreview } from './editor/CardPreview';
import { ExportPanel } from './editor/ExportPanel';
import { templates } from '../constants/templates';
import { fonts } from '../constants/fonts';
import { backgrounds } from '../constants/backgrounds';

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
  // Check for selected template from localStorage
  const getInitialCardData = (): CardData => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
      try {
        const template = JSON.parse(savedTemplate);
        // Clear the localStorage after loading
        localStorage.removeItem('selectedTemplate');
        return template.cardData;
      } catch (error) {
        console.error('Failed to parse saved template:', error);
      }
    }
    // Default card data if no template selected
    return {
      name: 'Sarah Johnson',
      title: 'Senior Product Manager',
      company: 'TechCorp Solutions',
      eventName: 'TECH CONFERENCE 2024',
      eventLocation: 'San Francisco, CA',
      role: 'SPEAKER',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      font: 'font-poppins',
      backgroundColor: 'slate',
      backgroundPattern: 'circles'
    };
  };

  const [cardData, setCardData] = useState<CardData>(getInitialCardData());

  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [activeTab, setActiveTab] = useState('edit');

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