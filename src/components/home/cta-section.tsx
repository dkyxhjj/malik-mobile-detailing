import Link from 'next/link'
import { ArrowRight, Phone, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ready to book your service?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'll come to your location with everything needed to make your car look great. 
              Most appointments available same day or next day.
            </p>
            
            {/* Simple features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Same day booking available</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Service throughout metro area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Quick response to messages</span>
              </div>
            </div>

            {/* Simple buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/booking">
                  Book Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="tel:(555)123-9274">
                  Call (555) 123-WASH
                </Link>
              </Button>
            </div>
          </div>

          {/* Simple visual */}
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center py-4">
                <div className="text-3xl mb-2">🚗</div>
                <div className="text-sm font-medium text-white">Mobile Service</div>
                <div className="text-xs text-gray-400">I come to you</div>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-sm font-medium text-white">Great Reviews</div>
                <div className="text-xs text-gray-400">500+ customers</div>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-medium text-white">Fast Booking</div>
                <div className="text-xs text-gray-400">Quick response</div>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl mb-2">💯</div>
                <div className="text-sm font-medium text-white">From $35</div>
                <div className="text-xs text-gray-400">Fair pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection