import React from 'react';

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

interface Template {
  name: string;
  bg: string;
  accent: string;
  layout: string;
  style: string;
}

interface CardPreviewProps {
  template: Template;
  cardData: CardData;
}

export const CardPreview: React.FC<CardPreviewProps> = ({ template, cardData }) => {
  const getBackgroundStyle = () => {
    // Use cardData background if set, otherwise fall back to template
    const bgColor = cardData.backgroundColor || 'slate';
    return `from-${bgColor}-900 via-${bgColor}-800 to-${bgColor}-900`;
  };

  const getCardLayout = (template: Template, data: CardData) => {
    const backgroundStyle = getBackgroundStyle();
    const baseClasses = `w-64 h-96 rounded-3xl shadow-2xl p-6 relative overflow-hidden border-2 ${template.accent} text-white transform transition-all duration-500`;
    
    switch (template.layout) {
      case 'side-photo':
        return (
          <div className={`${baseClasses} bg-gradient-to-br ${backgroundStyle} flex`}>
            <div className="w-1/3 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-2 flex items-center justify-center overflow-hidden">
                {data.photo ? (
                  <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                )}
              </div>
            </div>
            <div className="w-2/3 pl-3">
              <h3 className={`text-lg font-bold ${data.font} mb-1`}>{data.name}</h3>
              <p className="text-sm opacity-90 mb-1">{data.title}</p>
              <p className="text-xs opacity-75 mb-3">{data.company}</p>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-xs font-medium">{data.eventName}</div>
                <div className="text-xs opacity-75">{data.eventLocation}</div>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1">
                <span className="text-xs font-semibold">{data.role}</span>
              </div>
            </div>
          </div>
        );
      
      case 'corner-photo':
        return (
          <div className={`${baseClasses} bg-gradient-to-br ${backgroundStyle}`}>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full overflow-hidden">
              {data.photo ? (
                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white/40 rounded-full"></div>
              )}
            </div>
            <div className="pt-8">
              <h3 className={`text-xl font-bold ${data.font} mb-2`}>{data.name}</h3>
              <p className="text-sm opacity-90 mb-1">{data.title}</p>
              <p className="text-xs opacity-75 mb-6">{data.company}</p>
              <div className="bg-white/10 rounded-xl p-3 mb-4">
                <div className="text-sm font-medium mb-1">{data.eventName}</div>
                <div className="text-xs opacity-75">{data.eventLocation}</div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">{data.role}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'split-layout':
        return (
          <div className={`${baseClasses} bg-gradient-to-r ${backgroundStyle} flex flex-col`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg mr-4 flex items-center justify-center overflow-hidden">
                {data.photo ? (
                  <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-12 h-12 bg-white/40 rounded-lg"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${data.font} mb-1`}>{data.name}</h3>
                <p className="text-sm opacity-90">{data.title}</p>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="bg-white/10 rounded-xl p-3">
                <p className="text-xs opacity-75 mb-1">{data.company}</p>
                <div className="text-sm font-medium">{data.eventName}</div>
                <div className="text-xs opacity-75">{data.eventLocation}</div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">{data.role}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className={`${baseClasses} bg-gradient-to-bl ${backgroundStyle} text-center`}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {data.photo ? (
                    <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-16 h-16 bg-white/50 rounded-full"></div>
                  )}
                </div>
                <h3 className={`text-2xl font-bold ${data.font} mb-2`}>{data.name}</h3>
                <p className="text-sm opacity-90 mb-1">{data.title}</p>
                <p className="text-xs opacity-75 mb-6">{data.company}</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white/15 rounded-xl p-3">
                  <div className="text-sm font-medium">{data.eventName}</div>
                  <div className="text-xs opacity-75">{data.eventLocation}</div>
                </div>
                <div className="bg-white/25 rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-semibold">{data.role}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'badge-style':
        return (
          <div className={`${baseClasses} bg-gradient-to-tr ${backgroundStyle}`}>
            <div className="absolute top-0 left-0 right-0 h-20 bg-white/10 rounded-t-3xl flex items-center justify-center">
              <span className="text-xs font-bold opacity-75">CONFERENCE BADGE</span>
            </div>
            <div className="pt-24 text-center h-full flex flex-col">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {data.photo ? (
                  <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-20 h-20 bg-white/40 rounded-full"></div>
                )}
              </div>
              <h3 className={`text-xl font-bold ${data.font} mb-2`}>{data.name}</h3>
              <p className="text-sm opacity-90 mb-1">{data.title}</p>
              <p className="text-xs opacity-75 mb-4">{data.company}</p>
              <div className="mt-auto">
                <div className="bg-white/15 rounded-xl p-3 mb-3">
                  <div className="text-sm font-medium">{data.eventName}</div>
                  <div className="text-xs opacity-75">{data.eventLocation}</div>
                </div>
                <div className="bg-white/25 rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-semibold">{data.role}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'lanyard-card':
        return (
          <div className={`${baseClasses} bg-gradient-to-b ${backgroundStyle}`}>
            <div className="absolute top-4 left-4 right-4 h-2 bg-white/20 rounded-full"></div>
            <div className="pt-8 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl mr-3 flex items-center justify-center overflow-hidden">
                  {data.photo ? (
                    <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 bg-white/40 rounded-xl"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${data.font} mb-1`}>{data.name}</h3>
                  <p className="text-sm opacity-90">{data.title}</p>
                  <p className="text-xs opacity-75">{data.company}</p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-sm font-medium mb-1">{data.eventName}</div>
                  <div className="text-xs opacity-75">{data.eventLocation}</div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold">{data.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`${baseClasses} bg-gradient-to-b ${backgroundStyle}`}>
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {data.photo ? (
                    <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-16 h-16 bg-white/40 rounded-full"></div>
                  )}
                </div>
                <h3 className={`text-xl font-bold ${data.font} mb-1`}>{data.name}</h3>
                <p className="text-sm opacity-90 mb-1">{data.title}</p>
                <p className="text-xs opacity-75">{data.company}</p>
              </div>
              <div className="flex-1 space-y-4">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium mb-2">{data.eventName}</div>
                  <div className="text-xs opacity-75">{data.eventLocation}</div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold">{data.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
      {getCardLayout(template, cardData)}
    </div>
  );
};
