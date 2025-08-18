import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, Eye } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  category: string;
  preview: string;
  isPremium: boolean;
  downloads: number;
  rating: number;
  cardData: {
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
  };
}

interface TemplatePreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onUseTemplate: (template: Template) => void;
}

export const TemplatePreviewModal = ({ template, isOpen, onClose, onUseTemplate }: TemplatePreviewModalProps) => {
  if (!template) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left Panel - Template Preview */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-8 flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Card Preview - Shows actual template data */}
            <div className="relative z-10">
              <div 
                className={`w-80 h-96 ${template.preview} rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500`}
              >
                <div className="relative h-full p-6 text-white flex flex-col">
                  {/* Header with Event Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-6 h-6 bg-white/30 rounded"></div>
                    <div className="text-xs opacity-70">2024</div>
                  </div>
                  
                  {/* Photo and Personal Info */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-3 overflow-hidden">
                      <img 
                        src={template.cardData.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-lg font-bold mb-1">
                      {template.cardData.name}
                    </h2>
                    <p className="text-sm opacity-80">
                      {template.cardData.title}
                    </p>
                    <p className="text-xs opacity-60">
                      {template.cardData.company}
                    </p>
                  </div>
                  
                  {/* Event Details */}
                  <div className="mt-auto">
                    <div className="bg-white/20 rounded-lg p-3 mb-4">
                      <div className="text-xs font-bold opacity-90 mb-1">
                        {template.cardData.eventName}
                      </div>
                      <div className="text-xs opacity-70">
                        {template.cardData.eventLocation}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-white/30 px-3 py-1 rounded-full text-xs font-semibold">
                        {template.cardData.role}
                      </span>
                      <div className="w-6 h-6 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Template Info */}
          <div className="p-8 flex flex-col bg-white">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Template Info */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{template.name}</h2>
                {template.isPremium && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {template.downloads.toLocaleString()} downloads
                </span>
                <span>⭐ {template.rating}</span>
                <span className="capitalize">{template.category}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Template Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional layout design</li>
                    <li>• Customizable fonts and colors</li>
                    <li>• Photo upload support</li>
                    <li>• QR code integration</li>
                    <li>• High-resolution export</li>
                    {template.isPremium && (
                      <>
                        <li>• Premium backgrounds</li>
                        <li>• Advanced customization</li>
                        <li>• Priority support</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sample Data Included</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <div><span className="font-medium">Name:</span> {template.cardData.name}</div>
                    <div><span className="font-medium">Title:</span> {template.cardData.title}</div>
                    <div><span className="font-medium">Company:</span> {template.cardData.company}</div>
                    <div><span className="font-medium">Event:</span> {template.cardData.eventName}</div>
                    <div><span className="font-medium">Location:</span> {template.cardData.eventLocation}</div>
                    <div><span className="font-medium">Role:</span> {template.cardData.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-3">
              {template.isPremium ? (
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-3">
                  Upgrade to Premium
                </Button>
              ) : (
                <Button 
                  onClick={() => onUseTemplate(template)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                >
                  Use This Template Free
                </Button>
              )}
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onClose}
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};