import Link from 'next/link'
import { ArrowLeft, Star, Shield, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'About Us - Malik Mobile Detailing',
  description: 'Learn about Malik Mobile Detailing - your trusted partner for professional mobile car care services in the metro area.',
}

export default function AboutPage() {
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
              About Malik Mobile Detailing
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for premium mobile car care services
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading">
                  Hi, I'm Malik - And I'm Probably Too Obsessed With Clean Cars
                </h2>
                <p className="text-muted-foreground">
                  Started this whole thing because I got tired of seeing my friends and family get ripped off 
                  at those drive-through car washes that scratch your paint and barely clean anything. 
                  I figured if I'm going to spend 3 hours detailing my own car every weekend anyway, 
                  why not help other people too?
                </p>
                <p className="text-muted-foreground">
                  Been doing this for about 3 years now, and honestly, I still get excited when I see 
                  the look on people's faces when they see their car after I'm done with it. 
                  Plus, I bring everything to you, so you don't have to waste your Saturday sitting 
                  in some waiting room.
                </p>
              </div>
              <div className="space-y-6">
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-300 to-slate-500 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">👨‍🔧</div>
                      <div className="text-sm font-medium">Photo of Malik</div>
                      <div className="text-xs opacity-80">Coming Soon</div>
                    </div>
                  </div>
                  {/* Equipment in background */}
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🧽</span>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💧</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold font-heading text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Car Owners</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-heading mb-2">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground">
              Our commitment to quality, convenience, and customer satisfaction sets us apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">5-Star Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Professional-grade equipment and techniques for showroom results
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Convenient Service</h3>
                <p className="text-sm text-muted-foreground">
                  We come to you - at home, work, or any convenient location
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Complete insurance coverage for your peace of mind
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  100% satisfaction guaranteed on every service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Expertise</CardTitle>
            <CardDescription>
              Comprehensive mobile car care services for every vehicle type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Exterior Services</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Premium hand washing</li>
                  <li>• Clay bar treatment</li>
                  <li>• Paint correction and polishing</li>
                  <li>• Ceramic coating application</li>
                  <li>• Headlight restoration</li>
                  <li>• Chrome and trim polishing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Interior Services</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Deep vacuuming and cleaning</li>
                  <li>• Leather conditioning and treatment</li>
                  <li>• Fabric protection application</li>
                  <li>• Pet hair removal</li>
                  <li>• Odor elimination</li>
                  <li>• Dashboard and trim care</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">
                Experience the Malik Difference
              </h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us with their vehicles. 
                Schedule your mobile detailing service today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/booking">
                    Book Service Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">
                    Get In Touch
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