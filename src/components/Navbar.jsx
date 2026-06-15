"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
  };

  // base links (NO mutation)
  const baseNavLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/plans" },
  ];

  const dashboardLinks = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
    admin: "/dashboard/admin",
  };

  // final nav links (safe + immutable)
  const navLinks = user?.email
    ? [
        ...baseNavLinks,
        {
          label: "Dashboard",
          href: dashboardLinks[user.role || "seeker"],
        },
      ]
    : baseNavLinks;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg">
            <span className="text-xl font-bold text-white">P</span>
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white">Hire Loop</h1>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 md:flex">

            {/* NAV LINKS */}
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              {navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/20" />

            {/* AUTH */}
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-300">
                    Hi, {user.name}!
                  </span>
                  <Button onClick={handleSignOut} variant="ghost">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-violet-400 hover:text-violet-300"
                >
                  Sign In
                </Link>
              )}

              <Button
                as={Link}
                href="/register"
                radius="lg"
                className="h-11 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-200"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0F] md:hidden">
          <div className="space-y-3 px-4 py-6">

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <Link
                href="/auth/signin"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-violet-400 hover:bg-white/5 rounded-xl"
              >
                Sign In
              </Link>

              <Button
                as={Link}
                href="/register"
                className="w-full bg-white font-semibold text-black"
                radius="lg"
              >
                Get Started
              </Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}