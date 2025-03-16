"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MenuIcon, Search, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-fox-navy text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="h-8 w-auto">
                <Image
                  src="/logo.svg"
                  alt="LiveNOW from FOX"
                  width={120}
                  height={40}
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/live">Live</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavLink href="/weather">Weather</NavLink>
            <NavLink href="/tag/politics">Politics</NavLink>
            <NavLink href="/where-to-watch">Where to Watch</NavLink>
            <NavLink href="/team">LiveNOW Team</NavLink>
            <NavLink href="/about-us">About</NavLink>
          </nav>

          {/* Mobile Navigation Buttons */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white p-1 hover:bg-fox-navy/60"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1 hover:bg-fox-navy/60"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Search Button (Desktop) */}
          <div className="hidden md:flex">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white p-1 hover:bg-fox-navy/60"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Box */}
        {isSearchOpen && (
          <div className="py-4 px-2 border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search site"
                className="w-full p-2 pr-10 text-black rounded focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 text-sm">
              <MobileNavLink href="/live">Live</MobileNavLink>
              <MobileNavLink href="/news">News</MobileNavLink>
              <MobileNavLink href="/weather">Weather</MobileNavLink>
              <MobileNavLink href="/tag/politics">Politics</MobileNavLink>
              <MobileNavLink href="/where-to-watch">Where to Watch</MobileNavLink>
              <MobileNavLink href="/team">LiveNOW Team</MobileNavLink>
              <MobileNavLink href="/about-us">About</MobileNavLink>
            </div>
          </nav>
        )}
      </div>

      {/* Watch Live Button */}
      <div className="bg-fox-red">
        <div className="container mx-auto px-4">
          <div className="flex justify-end py-1">
            <Link
              href="/live"
              className="text-white font-semibold text-sm hover:underline"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white py-2 block hover:bg-fox-navy/60 px-2 transition-colors"
    >
      {children}
    </Link>
  );
}

export default Header;
