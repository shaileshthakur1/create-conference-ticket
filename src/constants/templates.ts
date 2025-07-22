export interface Template {
  name: string;
  bg: string;
  accent: string;
  layout: string;
  style: string;
}

export const templates: Template[] = [
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