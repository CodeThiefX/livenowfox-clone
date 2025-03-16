import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'About Us | LiveNOW from FOX',
  description: 'LiveNOW from FOX is a national news service powered by FOX Television Stations. It is focused on showing the most relevant and engaging live news coverage occurring right now across the country, and the world.',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>

        <div className="mb-12">
          <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/3113268320/236799961.jpeg"
              alt="LiveNOW from FOX"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>LiveNOW from FOX is a national news service powered by FOX Television Stations.</p>

            <p>It is focused on showing the most relevant and engaging live news coverage occurring right now across the country, and the world.</p>

            <p>Often called the "Red Zone" of news, the programming seamlessly moves between the biggest events and stories as they are happening.</p>

            <p>Coverage and content are supported by the local station group and the vast resources of FOX.</p>

            <p>LiveNOW is always raw, live and unfiltered, with limited commentary and no opinion.</p>
          </div>
        </div>

        {/* Latest Video Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-fox-navy">Latest Video from LiveNOW from FOX</h2>
            <Link href="/news" className="text-fox-red text-sm font-semibold hover:underline">
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video Card 1 */}
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

            {/* Video Card 2 */}
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

            {/* Video Card 3 */}
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
          </div>
        </section>

        {/* Trending Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-fox-navy mb-8">Trending</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
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
              </div>
              <div className="space-y-6">
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
                <div className="bg-fox-red text-white p-4 rounded-lg">
                  <p className="text-sm mb-4">Breaking news delivered fast</p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-2 rounded text-black text-sm"
                    />
                    <button className="w-full bg-fox-navy text-white py-2 rounded hover:bg-fox-navy/80 transition">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
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
