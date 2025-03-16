import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-fox-navy text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Live Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Live</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/where-to-watch">Where To Watch</FooterLink>
              <FooterLink href="https://www.youtube.com/livenowfox">LiveNOW on YouTube</FooterLink>
              <FooterLink href="/live">FOX TV Stations</FooterLink>
              <FooterLink href="/live/fox-weather">FOX Weather</FooterLink>
              <FooterLink href="https://tubitv.com/live">Tubi</FooterLink>
              <FooterLink href="/live/soul-live">FOX SOUL</FooterLink>
            </nav>
          </div>

          {/* News Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">News</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/news">Top Stories</FooterLink>
              <FooterLink href="/national-news">National</FooterLink>
              <FooterLink href="/tag/world">World</FooterLink>
              <FooterLink href="/tag/politics">Politics</FooterLink>
              <FooterLink href="/tag/crime-publicsafety">Crime</FooterLink>
              <FooterLink href="/tag/crime-publicsafety/police-chases">Police Chases</FooterLink>
              <FooterLink href="/tag/crime-publicsafety/idaho-students-killed">Idaho Murders</FooterLink>
              <FooterLink href="/tag/israel-war-hamas">Israel-Hamas War</FooterLink>
              <FooterLink href="/tag/russia-ukraine">Russia-Ukraine War</FooterLink>
            </nav>
          </div>

          {/* Regional Sections */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Northeast</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="https://www.fox5ny.com/">New York News - FOX 5 NY</FooterLink>
              <FooterLink href="https://www.fox29.com/">Philadelphia News - FOX 29</FooterLink>
              <FooterLink href="https://www.fox5dc.com/">Washington, DC News - FOX 5 DC</FooterLink>
              <FooterLink href="https://www.my9nj.com/">New Jersey News - My9NJ</FooterLink>
            </nav>
          </div>

          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">South</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="https://www.fox5atlanta.com/">Atlanta News - FOX 5 Atlanta</FooterLink>
              <FooterLink href="https://www.fox35orlando.com/">Orlando News - FOX 35 Orlando</FooterLink>
              <FooterLink href="https://www.fox13news.com/">Tampa News - FOX 13 News</FooterLink>
              <FooterLink href="https://www.wogx.com/">Gainesville News - FOX 51 Gainesville</FooterLink>
              <FooterLink href="https://www.fox4news.com/">Dallas News - FOX 4 News</FooterLink>
              <FooterLink href="https://www.fox26houston.com/">Houston News - FOX 26 Houston</FooterLink>
              <FooterLink href="https://www.fox7austin.com/">Austin News - FOX 7 Austin</FooterLink>
            </nav>
          </div>

          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Midwest</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="https://www.fox32chicago.com/">Chicago News - FOX 32 Chicago</FooterLink>
              <FooterLink href="https://www.fox2detroit.com/">Detroit News - FOX 2 Detroit</FooterLink>
              <FooterLink href="https://www.fox9.com/">Minneapolis News - FOX 9</FooterLink>
              <FooterLink href="https://www.fox6now.com/">Milwaukee News - FOX 6 News</FooterLink>
            </nav>
          </div>

          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">West</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="https://www.fox10phoenix.com/">Phoenix News - FOX 10 Phoenix</FooterLink>
              <FooterLink href="https://www.foxla.com/">Los Angeles News - FOX 11</FooterLink>
              <FooterLink href="https://www.ktvu.com/">San Francisco News - KTVU FOX 2</FooterLink>
              <FooterLink href="https://www.fox13seattle.com/">Seattle News - FOX 13 Seattle</FooterLink>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-8">
          {/* Weather Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Weather</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/tag/weather/winter-weather">Winter Weather</FooterLink>
              <FooterLink href="/tag/weather/severe-weather">Severe Weather</FooterLink>
              <FooterLink href="/tag/weather/hurricanes">Hurricanes</FooterLink>
              <FooterLink href="/tag/environment">Environment</FooterLink>
              <FooterLink href="https://www.foxweather.com">FOX Weather</FooterLink>
            </nav>
          </div>

          {/* Money Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Money</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/tag/money/us-economy">Economy</FooterLink>
              <FooterLink href="/tag/business">Business</FooterLink>
              <FooterLink href="/tag/business/personal-finance">Personal Finance</FooterLink>
              <FooterLink href="/tag/consumer">Consumer</FooterLink>
              <FooterLink href="/tag/consumer/real-estate">Real Estate</FooterLink>
            </nav>
          </div>

          {/* Science Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Science</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/tag/science/air-space">Air & Space</FooterLink>
              <FooterLink href="/tag/organization/spacex">SpaceX</FooterLink>
              <FooterLink href="/tag/technology">Technology</FooterLink>
              <FooterLink href="/tag/science/wild-nature">Wild Nature</FooterLink>
            </nav>
          </div>

          {/* Viral Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Viral</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/tag/heartwarming">Heartwarming News</FooterLink>
              <FooterLink href="/tag/unusual">Unusual</FooterLink>
              <FooterLink href="/tag/pets-animals">Pets & Animals</FooterLink>
            </nav>
          </div>

          {/* Other News Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Other News</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/sports">Sports</FooterLink>
              <FooterLink href="/tag/health">Health</FooterLink>
              <FooterLink href="/tag/lifestyle">Lifestyle</FooterLink>
              <FooterLink href="/tag/entertainment">Entertainment</FooterLink>
              <FooterLink href="/shows/fox-shows">FOX Shows</FooterLink>
            </nav>
          </div>

          {/* About LiveNOW Section */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">About LiveNOW</h6>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/where-to-watch">Distribution Partners</FooterLink>
              <FooterLink href="/team">LiveNOW Team</FooterLink>
              <FooterLink href="/newsletters">Email Newsletters</FooterLink>
            </nav>
          </div>
        </div>

        {/* Social Media & Bottom Links */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="https://www.youtube.com/livenowfox" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link href="https://www.facebook.com/livenowfox/" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/livenowfox" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="https://twitter.com/livenowfox" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link href="mailto:livenowcomments@FOX.COM" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="h-6">
                <Image
                  src="/logo.svg"
                  alt="LiveNOW from FOX"
                  width={100}
                  height={25}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:flex-wrap md:space-x-4 text-xs text-gray-400">
            <Link href="/terms-of-use" className="hover:text-white mb-2 md:mb-0">Updated Terms of Use</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/privacy-policy" className="hover:text-white mb-2 md:mb-0">New Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://privacy.livenowfox.com/main/web/main" className="hover:text-white mb-2 md:mb-0">Your Privacy Choices</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/closed-captioning" className="hover:text-white mb-2 md:mb-0">Closed Captioning</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/about-us" className="hover:text-white mb-2 md:mb-0">About Us</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/contact-us" className="hover:text-white mb-2 md:mb-0">Contact Us</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/where-to-watch" className="hover:text-white mb-2 md:mb-0">Partners</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/newsletters" className="hover:text-white mb-2 md:mb-0">Newsletters</Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            This material may not be published, broadcast, rewritten, or redistributed. ©2025 FOX Television Stations
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-xs text-gray-300 hover:text-white">
      {children}
    </Link>
  );
}

export default Footer;
