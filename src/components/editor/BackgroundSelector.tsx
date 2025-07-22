import React from 'react';

interface Background {
  name: string;
  color: string;
  pattern: string;
}

interface BackgroundSelectorProps {
  backgrounds: Background[];
  selectedBackground: string;
  onBackgroundSelect: (color: string, pattern: string) => void;
}

export const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  backgrounds,
  selectedBackground,
  onBackgroundSelect
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Background Themes
        </label>
        <div className="grid grid-cols-2 gap-3">
          {backgrounds.map((bg, index) => (
            <button
              key={index}
              onClick={() => onBackgroundSelect(bg.color, bg.pattern)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedBackground === bg.color
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-full h-12 rounded-lg bg-gradient-to-r from-${bg.color}-600 to-${bg.color}-700 mb-2`}></div>
              <span className="text-sm font-medium text-gray-900">{bg.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
