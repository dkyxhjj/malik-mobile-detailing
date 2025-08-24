import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'

export const metadata = {
  title: 'Contact Us - Malik Mobile Detailing',
  description: 'Get in touch with Malik Mobile Detailing for questions, quotes, or to schedule your car detailing service. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch for questions, quotes, or to schedule your service
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-heading mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Do you provide water and electricity?</h3>
                  <p className="text-sm text-muted-foreground">
                    We bring our own water and equipment. We only need access to a power outlet for our professional equipment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How long does a typical service take?</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic wash: ~1 hour, Deluxe detail: ~2 hours, Premium protection: ~3 hours. Times may vary based on vehicle size and condition.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What's your service area?</h3>
                  <p className="text-sm text-muted-foreground">
                    We serve the greater metro area. Contact us to confirm service availability in your specific location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer same-day service?</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day service is available based on our schedule. Book early in the day for the best chance of same-day availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}