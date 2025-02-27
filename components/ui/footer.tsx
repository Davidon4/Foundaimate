import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo className="h-10 w-auto text-white" />
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white mx-2">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Foundaimate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}