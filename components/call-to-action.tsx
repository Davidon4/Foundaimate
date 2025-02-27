"use client";
import { ArrowRight, Rocket, Shield, Clock2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const benefits = [
  {
    icon: Rocket,
    text: "Start growing your startup today"
  },
  {
    icon: Shield,
    text: "30-day money-back guarantee"
  },
  {
    icon: Clock2,
    text: "24/7 AI companion support"
  }
];

export default function CallToAction() {
  const router = useRouter();

  const handleBookDemo = () => {
    window.Calendly?.showPopupWidget('https://calendly.com/ezeluakudavid1')
  }

  const handleViewPricing = () => {
    router.push('/pricing')
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative bg-tealCustom rounded-2xl overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

          <div className="relative px-8 py-12 md:py-20 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Startup Journey?
              </h2>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-teal-100 mb-8">
                Join hundreds of founders who are scaling their startups faster with AI-powered guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-teal-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={handleBookDemo}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
                  onClick={handleViewPricing}
                >
                  View Pricing
                </Button>
              </div>

              {/* Benefits list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center gap-2 text-teal-100"
                  >
                    <benefit.icon className="h-5 w-5" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}