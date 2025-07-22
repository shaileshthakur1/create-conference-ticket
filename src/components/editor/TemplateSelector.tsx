import React from 'react';

interface Template {
  name: string;
  bg: string;
  accent: string;
  layout: string;
  style: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: number;
  onTemplateSelect: (index: number) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplate,
  onTemplateSelect
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Choose Template ({templates.length} Unique Layouts)
        </label>
        <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
          {templates.map((template, index) => (
            <button
              key={index}
              onClick={() => onTemplateSelect(index)}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedTemplate === index
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className={`w-full h-16 rounded-lg bg-gradient-to-r ${template.bg} mb-2 relative overflow-hidden`}>
                {/* Template preview indicator based on layout */}
                {template.layout === 'side-photo' && (
                  <div className="absolute inset-2 flex">
                    <div className="w-1/3 bg-white/20 rounded mr-1"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-1 bg-white/30 rounded"></div>
                      <div className="h-1 bg-white/20 rounded w-3/4"></div>
                    </div>
                  </div>
                )}
                {template.layout === 'corner-photo' && (
                  <div className="absolute inset-2">
                    <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className="mt-6 space-y-1">
                      <div className="h-1 bg-white/30 rounded w-2/3"></div>
                      <div className="h-1 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                )}
                {template.layout === 'minimal' && (
                  <div className="absolute inset-2 text-center">
                    <div className="w-6 h-6 bg-white/30 rounded-full mx-auto mb-1"></div>
                    <div className="h-1 bg-white/30 rounded w-3/4 mx-auto"></div>
                  </div>
                )}
                {template.layout === 'badge-style' && (
                  <div className="absolute inset-2">
                    <div className="h-2 bg-white/20 rounded-t mb-2"></div>
                    <div className="w-4 h-4 bg-white/30 rounded-full mx-auto mb-1"></div>
                    <div className="h-1 bg-white/30 rounded w-2/3 mx-auto"></div>
                  </div>
                )}
                {!['side-photo', 'corner-photo', 'minimal', 'badge-style'].includes(template.layout) && (
                  <div className="absolute inset-2 text-center">
                    <div className="w-4 h-4 bg-white/30 rounded-full mx-auto mb-1"></div>
                    <div className="space-y-1">
                      <div className="h-1 bg-white/30 rounded"></div>
                      <div className="h-1 bg-white/20 rounded w-3/4 mx-auto"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-gray-900 block">{template.name}</span>
                <span className="text-xs text-gray-500 capitalize">{template.style}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};