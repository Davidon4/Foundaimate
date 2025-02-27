import Image from "next/image";
import { Star } from "lucide-react";
import PageIllustration from "@/components/page-illustration";

const testimonials = [
  {
    name: "Vee Doe",
    role: "CEO at StartupX",
    image: "/images/Veey.png",
    rating: 5,
    feedback:
      "Foundaimate has been a game-changer for our startup. The AI companion's insights helped us pivot at crucial moments and identify opportunities we might have missed. It's like having a seasoned advisor available 24/7.",
    company: "StartupX",
    companyLogo: "/images/startupx-logo.png",
  },
  {
    name: "John Smith",
    role: "Founder of InnovateY",
    image: "/images/John.png",
    rating: 5,
    feedback:
      "What impressed me most was how personalized the guidance felt. It's not just generic advice – Foundaimate truly understands our unique challenges and provides actionable solutions that work for our specific context.",
    company: "InnovateY",
    companyLogo: "/images/innovatey-logo.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <PageIllustration/>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Innovative Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who&apos;ve transformed their startups with Foundaimate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    className="h-16 w-16 rounded-full ring-2 ring-white"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                  />
                  {/* <Image
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full ring-2 ring-white"
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    width={32}
                    height={32}
                  /> */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="relative">
                <span className="absolute top-0 left-0 text-6xl text-teal-200 opacity-50">&quot;</span>
                <p className="relative text-gray-700 italic pl-6 leading-relaxed">
                  {testimonial.feedback}
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by founders in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/highmart.png" alt="Highmart" width={80} height={20} className="opacity-70 hover:opacity-100 transition-opacity"/>
            <Image src="/images/admin.png" alt="Admin" width={80} height={20} className="border-2 border-white rounded-md opacity-70 hover:opacity-100 transition-opacity"/>
            <Image src="/images/quickbill.png" alt="Quickbill" width={80} height={20} className="border-2 border-white rounded-md opacity-70 hover:opacity-100 transition-opacity"/>
          </div>
        </div>
      </div>
    </section>
  );
}