import { Brain, Flame, HeadphonesIcon, MessageSquare } from "lucide-react";

const features = [
  {
    name: "AI-Powered Insights",
    description:
      "Leverage artificial intelligence to gain actionable insights tailored to your startup's needs.",
    icon: Brain,
    highlight: "500+ Insights Generated Daily"
  },
  {
    name: "Get Motivated",
    description:
      "Stay inspired with motivational quotes and personalized encouragement to keep your entrepreneurial spirit high.",
    icon: Flame,
    highlight: "95% User Satisfaction"
  },
  {
    name: "Day-to-Day Companion",
    description:
      "Your AI partner that's always there to brainstorm ideas, solve problems, and guide you through daily business challenges.",
    icon: MessageSquare,
    highlight: "24/7 Availability"
  },
  {
    name: "24/7 Support",
    description:
      "Access our dedicated support team anytime to help you overcome challenges.",
    icon: HeadphonesIcon,
    highlight: "< 5min Response Time"
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-4 -top-4 w-24 h-24 bg-teal-200 rounded-full blur-xl" />
        <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-blue-200 rounded-full blur-xl" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Modern Startups
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Foundaimate the perfect AI co-founder for your startup journey.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 -translate-y-1/2">
                <div className="inline-flex p-3 rounded-xl bg-tealCustom group-hover:bg-teal-700 transition-colors duration-300">
                  <feature.icon 
                    className="h-6 w-6 text-teal-50" 
                    aria-hidden="true" 
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-teal-700">
                    {feature.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}