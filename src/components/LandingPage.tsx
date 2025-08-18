import { useNavigate } from 'react-router-dom';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TemplatesSection } from './sections/TemplatesSection';
import { PricingSection } from './sections/PricingSection';
import { UseCasesSection } from './sections/UseCasesSection';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { Footer } from './sections/Footer';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartCreating = () => {
    navigate('/auth');
  };

  const handleViewTemplates = () => {
    const templatesSection = document.getElementById('templates-section');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <HeroSection onStartCreating={handleStartCreating} onViewTemplates={handleViewTemplates} />
      <FeaturesSection />
      <div id="templates-section">
        <TemplatesSection onStartCreating={handleStartCreating} />
      </div>
      <PricingSection />
      <UseCasesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};