import React from 'react';

interface Font {
  name: string;
  class: string;
  style: string;
}

interface FontSelectorProps {
  fonts: Font[];
  selectedFont: string;
  onFontSelect: (fontClass: string) => void;
}

export const FontSelector: React.FC<FontSelectorProps> = ({
  fonts,
  selectedFont,
  onFontSelect
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        Typography
      </label>
      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
        {fonts.map((font, index) => (
          <button
            key={index}
            onClick={() => onFontSelect(font.class)}
            className={`p-3 rounded-lg border transition-all text-left ${
              selectedFont === font.class
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`${font.class} font-semibold text-gray-900`}>
              {font.name}
            </div>
            <div className="text-xs text-gray-500">{font.style}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
