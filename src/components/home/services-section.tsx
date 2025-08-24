import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/mockData'

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of mobile detailing packages, each designed to meet your specific needs and budget.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.id} className={`relative ${index === 1 ? 'scale-105 border-primary shadow-lg' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular ⭐
                  </span>
                </div>
              )}
              
              {/* Service icon/image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {index === 0 ? '🚗' : index === 1 ? '✨' : '🏆'}
                    </div>
                    <div className="text-sm font-medium text-primary bg-white/80 px-2 py-1 rounded">
                      {service.name}
                    </div>
                  </div>
                </div>
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm font-bold">
                  ${service.price}
                </div>
              </div>
              
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
                    ~{service.duration} minutes
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
                    Select Package
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-left">
              <div className="font-semibold text-foreground">
                Need a custom package?
              </div>
              <div className="text-sm text-muted-foreground">
                We can create a tailored solution for your specific needs
              </div>
            </div>
            <Button asChild>
              <Link href="/contact" className="inline-flex items-center">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection