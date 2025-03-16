import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'News | LiveNOW from FOX',
  description: 'Articles and videos about News on LiveNOW from FOX | Breaking News, Live Events.',
};

export default function NewsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">News</h1>

        {/* National News Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-fox-navy mb-4">National News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News Video Card 1 */}
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
              <h3 className="mt-2 font-semibold text-sm">Expert weighs in on spate of aviation accidents | LiveNOW from FOX</h3>
            </div>

            {/* News Video Card 2 */}
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
              <h3 className="mt-2 font-semibold text-sm">At least 33 people have been killed by severe storms moving across the US</h3>
            </div>

            {/* News Video Card 3 */}
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
              <h3 className="mt-2 font-semibold text-sm">At least 51 dead and more than 100 injured in nightclub fire</h3>
            </div>

            {/* News Article Card */}
            <div className="group">
              <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://ext.same-assets.com/3658088967/2035103829.jpeg"
                  alt="Oklahoma wildfires"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-2 font-semibold text-sm group-hover:text-fox-red transition-colors">Oklahoma wildfires fueled by high winds, dry weather; 3 killed in Texas dust storm</h3>
            </div>
          </div>
        </section>

        {/* World News Section */}
        <section className="mb-12">
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

        {/* Health Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-fox-navy">Health</h2>
            <Link href="/tag/health" className="text-fox-red text-sm font-semibold hover:underline">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/879192543/1707635293.jpeg"
                  alt="Bird flu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Bird flu solution: Vaccinate chickens or slaughter every infected flock?</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/2156132082/1946424938.jpeg"
                  alt="COVID-19 impact on kindergarteners"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Study reveals impacts of COVID-19 pandemic on kindergarteners' development</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/74315039/2495322710.jpeg"
                  alt="Oregon dysentery outbreak"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Oregon dysentery outbreak: 7 new cases reported in February so far</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/4005123797/4119387659.jpeg"
                  alt="RFK Jr FDA"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">RFK Jr. seeks to eliminate FDA's GRAS 'loophole' to improve food ingredient safety</h3>
            </div>
          </div>
        </section>

        {/* Consumer & Money Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-fox-navy">Consumer & Money</h2>
            <Link href="/money" className="text-fox-red text-sm font-semibold hover:underline">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/2268654821/59566117.jpeg"
                  alt="Costco gas station"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Costco customers get more hours to fill up their cars with gas</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/3277063718/455073197.jpeg"
                  alt="Senate budget vote"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Senate passes Trump's budget plan with help from some Dems</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/3405248561/679568168.jpeg"
                  alt="Property tax"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Several states seek end to property taxes: Shouldn't have to 'rent from the government'</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/427215287/863169245.jpeg"
                  alt="Tesla"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Thinking of selling your Tesla? The values are dropping</h3>
            </div>
          </div>
        </section>

        {/* Entertainment Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-fox-navy">Entertainment</h2>
            <Link href="/tag/entertainment" className="text-fox-red text-sm font-semibold hover:underline">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/1572871299/3085528783.jpeg"
                  alt="What to watch"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">What to watch this weekend: "Black Bag," The Substance" and more</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/2541936538/1029235591.jpeg"
                  alt="Jack Ruby verdict"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Before OJ and Casey Anthony, this was the 1st courtroom verdict to be televised</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/4247110839/392301283.jpeg"
                  alt="Ted Lasso"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Believe: 'Ted Lasso' fourth season confirmed by Apple</h3>
            </div>

            <div>
              <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100 mb-2">
                <Image
                  src="https://ext.same-assets.com/2398029377/2331975773.jpeg"
                  alt="Roller coasters"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm">Best states for roller coasters in 2025</h3>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
