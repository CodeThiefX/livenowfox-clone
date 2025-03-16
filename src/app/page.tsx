import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Featured News Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative group overflow-hidden rounded-lg bg-gray-100">
                <div className="relative h-96 w-full">
                  <Image
                    src="https://ext.same-assets.com/631282470/348951668.jpeg"
                    alt="Tornado damage in Missouri"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h1 className="text-2xl font-bold mb-2">At least 18 dead after violent tornadoes rip across Missouri, South</h1>
                    <p className="text-sm">At least 18 people are dead across three states following a widespread and dangerous severe weather outbreak.</p>
                  </div>
                  <div className="absolute top-4 left-4 bg-fox-red px-2 py-1 text-white text-xs font-bold">
                    BREAKING
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Secondary Stories */}
              <div className="relative group overflow-hidden rounded-lg bg-gray-100">
                <div className="relative h-44 w-full">
                  <Image
                    src="https://ext.same-assets.com/3658088967/2035103829.jpeg"
                    alt="Oklahoma wildfires"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-lg font-bold">Oklahoma wildfires fueled by high winds, dry weather; 3 killed in Texas dust storm</h2>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg bg-gray-100">
                <div className="relative h-44 w-full">
                  <Image
                    src="https://ext.same-assets.com/3154472308/2020103578.jpeg"
                    alt="Senate passes Trump's budget plan"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-lg font-bold">Senate passes Trump's budget plan with help from some Dems</h2>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg bg-gray-100">
                <div className="relative h-44 w-full">
                  <Image
                    src="https://ext.same-assets.com/1533150841/1165170443.jpeg"
                    alt="DOGE closures timeline"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h2 className="text-lg font-bold">DOGE closures: List, timeline of government offices that may close this year</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Videos & Trending */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-fox-navy">Latest Video</h2>
                <Link href="/news" className="text-fox-red text-sm font-semibold hover:underline">
                  View More
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="https://ext.same-assets.com/589185290/1568683609.jpeg"
                      alt="Expert weighs in on spate of aviation accidents"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-fox-red/80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 font-semibold">Expert weighs in on spate of aviation accidents | LiveNOW from FOX</h3>
                  <p className="text-gray-500 text-sm">March 16, 2025 10:04am EDT</p>
                </div>

                <div className="relative group">
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="https://ext.same-assets.com/1789901769/1957543617.jpeg"
                      alt="At least 33 people have been killed by severe storms"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-fox-red/80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 font-semibold">At least 33 people have been killed by severe storms moving across the US</h3>
                  <p className="text-gray-500 text-sm">March 16, 2025 8:48am EDT</p>
                </div>

                <div className="relative group">
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="https://ext.same-assets.com/2041271948/2715549784.jpeg"
                      alt="At least 51 dead in nightclub fire"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-fox-red/80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 font-semibold">At least 51 dead and more than 100 injured in nightclub fire</h3>
                  <p className="text-gray-500 text-sm">March 16, 2025 8:21am EDT</p>
                </div>

                <div className="relative group">
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="https://ext.same-assets.com/1743193933/4131136400.jpeg"
                      alt="Huge power outage in Cuba"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-fox-red/80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 font-semibold">Huge power outage in Cuba leaves millions in darkness</h3>
                  <p className="text-gray-500 text-sm">March 15, 2025 8:35pm EDT</p>
                </div>
              </div>
            </section>

            {/* World News Section */}
            <section className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-fox-navy">World News</h2>
                <Link href="/tag/world" className="text-fox-red text-sm font-semibold hover:underline">
                  View More
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                    <Image
                      src="https://ext.same-assets.com/4011672767/1578793582.jpeg"
                      alt="US strikes Yemen's Houthi rebels"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm">US strikes Yemen's Houthi rebels</h3>
                </div>

                <div>
                  <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                    <Image
                      src="https://ext.same-assets.com/1192093339/2647449312.jpeg"
                      alt="Huge power outage in Cuba"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-fox-red/80 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm">Huge power outage in Cuba leaves millions in darkness</h3>
                </div>

                <div>
                  <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                    <Image
                      src="https://ext.same-assets.com/2735898446/1318789289.jpeg"
                      alt="Notre Dame Cathedral"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm">Here's how you could own a piece of the original Notre Dame Cathedral</h3>
                </div>
              </div>
            </section>
          </div>

          {/* Trending Section */}
          <div>
            <section>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-fox-navy mb-4">Trending</h2>
                <div className="space-y-4">
                  <TrendingItem
                    number={1}
                    image="https://ext.same-assets.com/336599444/972398482.jpeg"
                    title="'The Masked Singer' sends home Space Ranger: Here's who was under the costume"
                  />
                  <TrendingItem
                    number={2}
                    image="https://ext.same-assets.com/1843173260/939849402.jpeg"
                    title="Trump has said he'll use the Alien Enemies Act of 1798 for mass deportations: Here's what it is"
                  />
                  <TrendingItem
                    number={3}
                    image="https://ext.same-assets.com/3863231268/2868895502.jpeg"
                    title="Spirit Airlines exits bankruptcy with new financial plan and premium rebrand"
                  />
                  <TrendingItem
                    number={4}
                    image="https://ext.same-assets.com/99572899/4146153592.jpeg"
                    title="Judge blocks Trump's use of 1798 law to deport Venezuelan migrants"
                  />
                  <TrendingItem
                    number={5}
                    image="https://ext.same-assets.com/1005895742/992937190.jpeg"
                    title="Oklahoma wildfires fueled by high winds, dry weather; 3 killed in Texas dust storm"
                  />
                </div>
              </div>

              {/* Breaking News Section */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-fox-navy mb-4">BREAKING NEWS</h2>
                <div className="bg-fox-red text-white p-4 rounded-lg">
                  <p className="text-sm mb-4">Breaking news delivered fast</p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-2 rounded text-black text-sm"
                    />
                    <Button className="w-full bg-fox-navy hover:bg-fox-navy/80">
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>

              {/* Latest News Section */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-fox-navy">Latest News</h2>
                  <Link href="/news" className="text-fox-red text-sm font-semibold hover:underline">
                    View More
                  </Link>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="relative h-16 w-24 min-w-24 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="https://ext.same-assets.com/880870067/78641383.jpeg"
                        alt="Missing toddler"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Missing Oregon toddler found dead in river died from drowning, authorities say</h3>
                      <p className="text-xs text-gray-500 mt-1">March 15, 2025</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="relative h-16 w-24 min-w-24 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="https://ext.same-assets.com/3277063718/455073197.jpeg"
                        alt="Senate passes budget plan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Senate passes Trump's budget plan with help from some Dems</h3>
                      <p className="text-xs text-gray-500 mt-1">March 15, 2025</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="relative h-16 w-24 min-w-24 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="https://ext.same-assets.com/4247110839/392301283.jpeg"
                        alt="Ted Lasso"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Believe: 'Ted Lasso' fourth season confirmed by Apple</h3>
                      <p className="text-xs text-gray-500 mt-1">March 14, 2025</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function TrendingItem({ number, image, title }: { number: number; image: string; title: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 flex items-start">
        <span className="text-3xl font-bold text-fox-navy">{number}</span>
      </div>
      <div className="flex gap-3 flex-grow">
        <Link href="#" className="flex gap-3 group">
          <div className="relative h-16 w-24 min-w-24 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-sm font-semibold group-hover:text-fox-red transition-colors">{title}</h3>
        </Link>
      </div>
    </div>
  );
}
