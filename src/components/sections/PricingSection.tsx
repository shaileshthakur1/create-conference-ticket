import { useState } from 'react';
import { Check, Crown, Zap, Building } from 'lucide-react';
import { Button } from '../ui/button';

// 1. Define the Plan type
type Plan = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  popular: boolean;
  color: string;
};

// 2. (If you want, define plans as Plan[])
export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      name: "Free",
      icon: Zap,
      price: { monthly: 0, annual: 0 },
      description: "Perfect for trying out our platform",
      features: [
        "3 basic templates",
        "Solid color backgrounds",
        "Standard card size",
        "5 cards per month",
        "Basic QR codes",
        "Community support"
      ],
      limitations: [
        "No analytics",
        "No custom branding",
        "No bulk generation"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Premium",
      icon: Crown,
      price: { monthly: 19.99, annual: 199.99 },
      description: "For professionals and growing teams",
      features: [
        "All 25+ templates",
        "Advanced background effects",
        "Custom image backgrounds",
        "All card sizes",
        "Unlimited card generation",
        "QR analytics & NFC support",
        "Priority customer support",
        "Export in multiple formats",
        "Basic collaboration (3 members)",
        "No watermarks"
      ],
      cta: "Start Premium Trial",
      popular: true,
      color: "border-purple-500"
    },
    {
      name: "Enterprise",
      icon: Building,
      price: { monthly: 99.99, annual: 999.99 },
      description: "For large organizations and events",
      features: [
        "Everything in Premium",
        "White-label solutions",
        "API access with higher limits",
        "Custom branding & templates",
        "Bulk generation (unlimited)",
        "Advanced analytics & reporting",
        "SSO integration",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom integrations",
        "Advanced collaboration (unlimited)",
        "Custom template design service"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-blue-500"
    }
  ];

  // 3. Strongly type the function parameter!
  const getPrice = (plan: Plan) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly;
    if (price === 0) return "Free";
    const displayPrice = isAnnual ? (price / 12).toFixed(2) : price.toFixed(2);
    return `$${displayPrice}`;
  };

  // 4. Strongly type the function parameter!
  const getSavings = (plan: Plan) => {
    if (plan.price.monthly === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return percentage;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Choose Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and upgrade as you grow. All plans include our core features 
            with no hidden fees or surprises.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold ml-2">
                Save up to 17%
              </span>
            )}
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${plan.color} ${
                plan.popular ? 'scale-105 lg:scale-110' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.name === 'Free' ? 'bg-gray-100' :
                      plan.name === 'Premium' ? 'bg-gradient-to-r from-purple-600 to-blue-600' :
                      'bg-gradient-to-r from-blue-600 to-cyan-600'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.name === 'Free' ? 'text-gray-600' : 'text-white'
                      }`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {getPrice(plan)}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-500 ml-2">
                          /{isAnnual ? 'month' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually (${plan.price.annual}/year)
                      </div>
                    )}
                    {isAnnual && getSavings(plan) && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        Save {getSavings(plan)}% vs monthly
                      </div>
                    )}
                  </div>
                </div>
                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA Button */}
                <Button
                  className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Button>
                {plan.name === 'Premium' && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    14-day free trial • No credit card required
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Additional Pricing Options */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
              Pay-Per-Card Option
            </h3>
            <p className="text-gray-600 mb-6">
              Need just a few cards occasionally? Pay only for what you use.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">\$0.99</span>
              <span className="text-gray-500">per card</span>
            </div>
            <Button variant="outline" className="rounded-xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};