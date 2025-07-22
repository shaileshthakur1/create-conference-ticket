import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How many ID cards can I create with each plan?",
      answer: "Our Free plan allows 5 cards per month with basic templates. Premium plan includes unlimited card generation with all templates and advanced features. Enterprise plan offers unlimited cards plus white-label solutions and API access."
    },
    {
      question: "Can I upload my own logos and branding?",
      answer: "Yes! Premium and Enterprise plans allow you to upload custom logos, use your brand colors, and customize templates to match your organization's identity. Enterprise customers can also access white-label solutions."
    },
    {
      question: "What export formats are available?",
      answer: "You can export cards in multiple formats including PNG, PDF, SVG, and print-ready files with bleed areas. Premium users get access to all formats, while Free users can export in standard PNG format."
    },
    {
      question: "How do QR codes and NFC features work?",
      answer: "QR codes are automatically generated for each card with customizable data (contact info, social links, etc.). Premium users get QR analytics to track scans. NFC functionality allows tap-to-share contact information and requires Premium or Enterprise plans."
    },
    {
      question: "Can I generate cards in bulk for large events?",
      answer: "Absolutely! Premium and Enterprise plans include bulk generation via CSV import. Simply upload a spreadsheet with attendee information and generate hundreds or thousands of cards at once. Enterprise customers get priority processing for large batches."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! We offer native iOS and Android apps for Premium and Enterprise customers. The mobile app allows you to create, edit, and export cards on the go, plus scan QR/NFC codes at events."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "Free users get community support and help documentation. Premium users receive priority email support with 24-hour response time. Enterprise customers get dedicated account managers and phone support."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period. You can always reactivate your subscription later without losing your saved templates and projects."
    },
    {
      question: "Do you offer enterprise-level security and compliance?",
      answer: "Yes! Enterprise plans include SOC 2 compliance, advanced encryption, SSO integration (Google, Microsoft, SAML), and on-premise deployment options. We take data security seriously and follow industry best practices."
    },
    {
      question: "Can I integrate with my existing event management platform?",
      answer: "Enterprise customers get API access to integrate with existing platforms. We support webhooks, REST APIs, and can work with popular event management systems. Contact our sales team for specific integration requirements."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Frequently Asked 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about creating professional ID cards 
            for your events. Can't find what you're looking for?
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold font-poppins text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you create the perfect ID cards 
              for your event. Get in touch with us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
