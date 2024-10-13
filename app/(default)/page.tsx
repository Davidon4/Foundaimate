export const metadata = {
    title: "Home - foundaimate.com",
    description: "Page description"
};

import HeroHome from "@/components/hero-home";
import StartupCategories from "@/components/startup-categories";

export default function Home() {
    return (
        <>
        <HeroHome />
        <StartupCategories />
        </>
    )
}
