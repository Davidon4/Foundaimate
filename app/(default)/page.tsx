export const metadata = {
    title: "Home - foundaimate.com",
    description: "Page description"
};

import HeroHome from "@/components/hero-home";
import StartupCategories from "@/components/startup-categories";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";

export default function Home() {
    return (
        <>
        <HeroHome />
        <StartupCategories />
        <Features   />
        <Testimonials />
        <Faq />
        <Pricing />
        <CallToAction />
        </>
    )
}
