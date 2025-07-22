import { useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TemplatesSection } from './sections/TemplatesSection';
import { PricingSection } from './sections/PricingSection';
import { UseCasesSection } from './sections/UseCasesSection';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { Footer } from './sections/Footer';
import { CardEditor } from './CardEditor';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export const LandingPage = () => {
  const [showEditor, setShowEditor] = useState(false);

  if (showEditor) {
    return (
      <div className="min-h-screen">
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button
              onClick={() => setShowEditor(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-lg font-semibold text-gray-900">
              Conference Card Editor
            </div>
            <div></div>
          </div>
        </div>
        <CardEditor />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <HeroSection onStartCreating={() => setShowEditor(true)} />
      <FeaturesSection />
      <TemplatesSection onStartCreating={() => setShowEditor(true)} />
      <PricingSection />
      <UseCasesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
