import Link from 'next/link'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { services, addOns } from '@/data/mockData'

export const metadata = {
  title: 'Our Services - Malik Mobile Detailing',
  description: 'Explore our comprehensive mobile car detailing services. From basic wash to premium protection packages with ceramic coating.',
}

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional mobile car detailing packages designed for every need and budget
            </p>
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.id} className={`relative ${index === 1 ? 'scale-105 border-primary shadow-lg' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl">
                  {service.name}
                </CardTitle>
                <CardDescription>
                  {service.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="text-3xl font-bold font-heading text-primary">
                    ${service.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Approximately {service.duration} minutes
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                  <Link href={`/booking?service=${service.id}`}>
                    Select {service.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-On Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-heading mb-2">
              Add-On Services
            </h2>
            <p className="text-muted-foreground">
              Enhance any package with these additional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn) => (
              <Card key={addOn.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {addOn.name}
                  </CardTitle>
                  <div className="text-xl font-bold text-primary">
                    +${addOn.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {addOn.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Duration: ~{addOn.duration} minutes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">
                Ready to Book Your Service?
              </h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Choose your package and schedule your mobile car detailing service today. 
                We'll bring the showroom quality to your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/booking" className="inline-flex items-center">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}