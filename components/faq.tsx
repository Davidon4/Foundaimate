"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

const faqs = [
  {
    question: "What is Foundaimate?",
    answer:
      "Foundaimate is your AI-powered startup companion that provides personalized guidance, strategic insights, and day-to-day support for entrepreneurs. Think of it as having a seasoned advisor available 24/7.",
  },
  {
    question: "How can Foundaimate help my startup?",
    answer:
      "Foundaimate assists with strategic planning, market analysis, problem-solving, and daily operational decisions. It provides actionable insights, helps identify opportunities, and offers tailored solutions based on your specific industry and challenges.",
  },
  {
    question: "Is Foundaimate suitable for my industry?",
    answer:
      "Yes! Foundaimate is trained on diverse startup experiences across multiple industries including tech, healthcare, finance, retail, and more. It adapts its guidance to your specific sector and business model.",
  },
  {
    question: "How much does Foundaimate cost?",
    answer:
      "We offer flexible pricing plans designed to grow with your startup. Start with our free trial to experience the full potential of Foundaimate, then choose a plan that best fits your needs and budget.",
  },
  {
    question: "Can I use Foundaimate on mobile devices?",
    answer:
      "Absolutely! Foundaimate is fully responsive and works seamlessly across all devices - desktop, tablet, and mobile. Access your AI companion whenever and wherever you need it.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 technical support, regular platform updates, and a comprehensive knowledge base. Our team is always ready to help you make the most of Foundaimate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
            <PageIllustration/>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Foundaimate and how it can help your startup grow.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-teal-700" />
                  ) : (
                    <Plus className="h-6 w-6 text-teal-700" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300">
            Contact Support
          </button>
        </div> */}
      </div>
    </section>
  );
}