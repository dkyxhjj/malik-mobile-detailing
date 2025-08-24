'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BookingForm from '@/components/booking/booking-form'

function BookingContent() {
  const searchParams = useSearchParams()
  const initialServiceId = searchParams.get('service')

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold font-heading">
              Book Your Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule your mobile car detailing appointment
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm initialServiceId={initialServiceId || undefined} />

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
          <p>
            Questions? Call us at{' '}
            <a href="tel:(555)123-9274" className="text-primary hover:underline">
              (555) 123-WASH
            </a>{' '}
            or email{' '}
            <a href="mailto:info@malikmobiledetailing.com" className="text-primary hover:underline">
              info@malikmobiledetailing.com
            </a>
          </p>
          <p>
            We typically respond to booking requests within 24 hours. 
            Same-day service may be available based on availability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-muted/30 py-8 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  )
}