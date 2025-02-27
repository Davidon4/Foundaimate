"use client";
import PageIllustration from "@/components/page-illustration";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

export default function HeroHome() {
  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/ezeluakudavid1",
          text: "Book a Demo",
          color: "#16778a",
          textColor: "#fff",
          branding: true
        })
      }
    }

    initCalendly();
  }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Scale Smarter with an AI Co-Founder Built Around You
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Navigate your startup&apos;s biggest challenges with Foundaimate, the AI co-founder companion that adapts to your unique needs and amplifies your decision-making
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  {/* <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Book a Demo{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a> */}
                  <Script 
                    src="https://assets.calendly.com/assets/external/widget.js" 
                    strategy="lazyOnload"
                    onLoad={() => {
                      console.log('Calendly script loaded');
                    }}
                  />
                  <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                      rel="stylesheet"
                  />
                  <Button 
                  size="sm" 
                  className="bg-tealCustom text-gray-200 shadow hover:bg-teal-700 text-sm rounded-md"
                  onClick={() => window.Calendly?.showPopupWidget('https://calendly.com/ezeluakudavid1')}
                  >
                    Book a Demo
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-5 py-3 shadow-2xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center gap-2">
                <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                <span className="text-sm font-medium text-gray-300 bg-gray-700/50 px-3 py-1 rounded-md">
                  foundaimate.com
                </span>
              </div>
              </div>

              {/* // Chat Content */}
              <div className="font-mono text-gray-400 space-y-6">
                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_0.5s_forwards]">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-xl">F</span>
                </div>
                <div className="flex-1">
                <div className="bg-blue-500/10 rounded-lg p-3 inline-block">
                <p className="text-blue-100 typewriter-text-1">
                My current marketing approach hasn&apos;t been very effective in the market.
                </p>
                </div>
                </div>
                </div>

                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_2s_forwards]">
                <div className="w-8 h-8 rounded-full bg-tealCustom flex items-center justify-center">
                <span className="text-teal-400 text-xs">AI</span>
                </div>
                <div className="flex-1">
                  <div className="bg-tealCustom rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-teal-100 typewriter-text-2">
                I see. You&apos;ve been focusing on social media marketing, Have you considered partnering with niche communities or influencers to reach your audience more directly?
                </p>
                </div>
                </div>
                </div>

                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_3s_forwards]">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-xl">F</span>
                </div>
                <div className="flex-1">
                <div className="bg-blue-500/10 rounded-lg p-3 inline-block">
                <p className="text-blue-100 typewriter-text-3">
                Not yet. How do I start?
                </p>
                </div>
                </div>
                </div>

                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_4s_forwards]">
                <div className="w-8 h-8 rounded-full bgCustom flex items-center justify-center">
                <span className="text-teal-400 text-xs">AI</span>
                </div>
                <div className="flex-1">
                  <div className="bg-tealCustom rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-teal-100 typewriter-text-4">
                Look for online groups where your target customers are active, or collaborate with micro-influencers who have strong engagement. I can help you find some options. Sound good?
                </p>
                </div>
                </div>
                </div>

                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_5s_forwards]">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-xl">F</span>
                </div>
                <div className="flex-1">
                <div className="bg-blue-500/10 rounded-lg p-3 inline-block">
                <p className="text-blue-100 typewriter-text-5">
                Yes, let&apos;s try that!
                </p>
                </div>
                </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}