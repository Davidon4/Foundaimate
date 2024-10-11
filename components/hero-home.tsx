import PageIllustration from "@/components/page-illustration";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroHome() {
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
              Your personalized ai virtual <br className="max-lg:hidden" />
               co-founder
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Foundaimate is an intelligent AI co-founder designed to offer tailored insights and guidance, helping you navigate every startup challenge with confidence and clarity
                {/* Foundaimate is an intelligent AI co-founder designed to offer tailored insights and guidance to help you tackle every startup challenge. */}
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
                  <Button size="sm" asChild>
                    <Link href="/signup" 
                    className="bg-tealCustom text-gray-200 shadow hover:bg-teal-700 text-sm rounded-md"
                    >Book a Demo
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </Link>
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
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  foundaimate.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                    Founder:
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                My current marketing approach hasn’t been very effective in the market.
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-gray-200">
                Foundaimate (AI):
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                I see. You’ve been focusing on social media marketing, Have you considered partnering with niche communities or influencers to reach your audience more directly?
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                Founder:
                </span>{" "}
                <span className="animate-[code-6_10s_infinite]">
                Not yet. How do I start?
                </span>
                <br/>
                <br/>
                <span className="animate-[code-7_10s_infinite] text-gray-200">
                Foundaimate (AI):
                </span>{" "}
                <span className="animate-[code-8_10s_infinite]">
                Look for online groups where your target customers are active, or collaborate with micro-influencers who have strong engagement. I can help you find some options. Sound good?
                </span>
                <br/>
                <br/>
                <span className="animate-[code-9_10s_infinite] text-gray-200">
                Founder:
                </span>{" "}
                <span className="animate-[code-10_10s_infinite]">
                Yes, let’s try that!
                </span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}