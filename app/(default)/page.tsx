export const metadata = {
    title: "Home - Foundaimate",
    description: "Page description"
};

import Hero from "@/components/hero-home";
import StartupCategories from "@/components/startup-categories";

export default function Home() {
    return (
        <>
        <Hero />
        <StartupCategories />
        </>
    )
}
