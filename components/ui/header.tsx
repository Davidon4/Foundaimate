import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-black/[0.03] backdroop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100), theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="flex flex-1 items-center">
                <Logo/>
                </div>
                <ul className="flex flex-1 items-center justify-end gap-3">
                    <li>
                    <Button variant="outline" size="sm" asChild>
                    <Link href="/signin" 
                    className="text-black shadow text-sm rounded-md"
                    >Login</Link>
                    </Button>
                    </li>
                    <li>
                    <Button size="sm" asChild>
                    <Link href="/signup" 
                    className="bg-tealCustom text-gray-200 shadow hover:bg-teal-700 text-sm rounded-md"
                    >Register</Link>
                    </Button>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    )
}