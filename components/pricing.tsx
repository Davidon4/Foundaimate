'use client';

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, annual: 24 },
    description: "Perfect for early-stage startups and solo founders",
    features: [
      "AI-powered startup guidance",
      "Basic market analysis",
      "Sales and marketing insights",
      "Technical insights",
      "Daily motivation insights",
      "Email support",
      "1 founder account",
    ],
    buttonText: "Start Free Trial",
    popular: false,
    comingSoon: false,
  },
  {
    name: "Pro",
    price: { monthly: 79, annual: 69 },
    description: "Ideal for growing startups with bigger ambitions",
    features: [
      "Everything in Starter, plus:",
      "Advanced market insights",
      "Financial insights",
      "Competitor analysis",
      "Priority support",
      "3 team member accounts",
      "Custom action plans",
      "Weekly progress tracking",
    ],
    buttonText: "Coming Soon",  // Changed button text
    popular: true,
    comingSoon: true
  },
  {
    name: "Enterprise",
    price: { monthly: 199, annual: 179 },
    description: "For established startups requiring maximum support",
    features: [
      "Everything in Pro, plus:",
      "Dedicated AI assistant",
      "Custom integrations",
      "24/7 priority support",
      "Unlimited team accounts",
      "Advanced analytics",
      "Quarterly strategy reviews",
      "API access",
    ],
    popular: false,
    buttonText: "Coming Soon",
    comingSoon: true, 
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect plan for your startup&apos;s growth
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!annual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                annual ? 'bg-teal-600' : 'bg-gray-400'
              }`}
              onClick={() => setAnnual(!annual)}
            >
              <span
                className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  annual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual billing
              <span className="ml-1.5 text-teal-600">(-20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 ${
                plan.popular ? 'border-2 border-teal-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-teal-600 hover:bg-teal-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                onClick={() => {
                  // Add your payment/signup logic here
                  console.log(`Selected ${plan.name} plan`);
                }}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="link" className="text-gray-600">
              Compare Plans
            </Button>
            <Button variant="link" className="text-gray-600">
              Read FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}