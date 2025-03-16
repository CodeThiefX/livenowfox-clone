import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Live | LiveNOW from FOX',
  description: 'Watch LiveNOW from FOX streaming live - Breaking news, top stories and major news events unfolding in real time, raw and unfiltered.',
};

export default function LivePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Watch LiveNOW from FOX</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black mb-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-fox-red/80 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h2 className="text-white text-lg font-bold">Click to watch LiveNOW from FOX</h2>
                  <p className="text-gray-300 text-sm mt-2">Streaming 24/7 - Breaking news and major events</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold">LIVE: Breaking News Coverage</h2>
                <p className="text-gray-600 text-sm">March 16, 2025 - Streaming continuously since 6:00am EDT</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-fox-navy text-white py-1 px-3 rounded-full text-xs hover:bg-opacity-80 transition">Full Screen</button>
                <button className="bg-fox-navy text-white py-1 px-3 rounded-full text-xs hover:bg-opacity-80 transition">Share</button>
              </div>
            </div>

            {/* Live Updates */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">Live Updates</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-fox-red pl-4">
                  <span className="text-xs text-gray-500 block">10:04 AM EDT</span>
                  <p className="font-semibold">Expert discusses recent aviation incidents and safety considerations</p>
                </div>
                <div className="border-l-4 border-fox-red pl-4">
                  <span className="text-xs text-gray-500 block">9:32 AM EDT</span>
                  <p className="font-semibold">Tornado damage assessment continues in Missouri as death toll rises to 18</p>
                </div>
                <div className="border-l-4 border-fox-red pl-4">
                  <span className="text-xs text-gray-500 block">8:48 AM EDT</span>
                  <p className="font-semibold">Weather update: 33 people killed by severe storms across the US</p>
                </div>
                <div className="border-l-4 border-fox-red pl-4">
                  <span className="text-xs text-gray-500 block">8:21 AM EDT</span>
                  <p className="font-semibold">Breaking: At least 51 dead and more than 100 injured in nightclub fire</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Where to Watch */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold mb-4">Where to Watch</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                <WatchOption image="https://ext.same-assets.com/1922104300/1863537088.jpeg" name="FOX Local" />
                <WatchOption image="https://ext.same-assets.com/2179486798/745821480.jpeg" name="FOX.com" />
                <WatchOption image="https://ext.same-assets.com/1040759998/3378556739.jpeg" name="Amazon Freevee" />
                <WatchOption image="https://ext.same-assets.com/1800748821/2192632809.jpeg" name="Amazon News" />
                <WatchOption image="https://ext.same-assets.com/1674540700/3573057374.jpeg" name="fuboTV" />
                <WatchOption image="https://ext.same-assets.com/3087048457/3564063769.jpeg" name="LG Channels" />
              </div>
              <div className="mt-4">
                <Link href="/where-to-watch" className="text-fox-red text-sm font-semibold hover:underline">
                  View all providers →
                </Link>
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-lg font-bold mb-4">Latest News</h3>
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
              <div className="mt-4">
                <Link href="/news" className="text-fox-red text-sm font-semibold hover:underline">
                  More news →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function WatchOption({ image, name }: { image: string; name: string }) {
  return (
    <div className="bg-white p-2 rounded border hover:shadow-md transition">
      <div className="h-10 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
