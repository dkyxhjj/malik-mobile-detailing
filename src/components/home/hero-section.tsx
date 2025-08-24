import Link from 'next/link'
import { ArrowRight, Star, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Business Name - Large and Prominent */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  MALIK
                </span>
                <br />
                <span className="text-white">
                  MOBILE DETAILING
                </span>
              </h1>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-2xl lg:text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Serving
                </span>
                <br />
                <span className="text-white">
                  Tracy, Stockton, Manteca, and Surrounding Areas
                </span>
              </h1>
            </div>



            {/* Simple buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/booking">
                  Book Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/services">
                  See Prices
                </Link>
              </Button>
            </div>
          </div>

          {/* Simple visual */}
          <div className="relative">
            {/* Clean image placeholder */}
            <div className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden">
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="text-6xl mb-4">🚗</div>
                  <div className="text-white font-medium mb-2">Before & After Photos</div>
                  <div className="text-gray-400 text-sm">Coming soon</div>
                </div>
              </div>
            </div>
            
            {/* Simple price badge */}
            <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
              From $35
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection