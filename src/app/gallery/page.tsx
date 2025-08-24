import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Gallery - Malik Mobile Detailing',
  description: 'View our gallery of professional car detailing work. See the transformation and quality of our mobile car care services.',
}

// Real work examples - these would be actual photos
const galleryItems = [
  {
    id: '1',
    title: 'Sarah\'s Honda Accord - The Full Treatment',
    description: 'Hadn\'t been detailed in 2 years, kids had done some damage',
    beforeText: 'Before: Cheerios in every crevice, mystery stains',
    afterText: 'After: She actually teared up when she saw it',
    category: 'Deluxe'
  },
  {
    id: '2',
    title: 'Mike\'s F-150 Work Truck - Show Stopper',
    description: 'Construction worker wanted to surprise his wife',
    beforeText: 'Before: Mud, dust, and years of neglect',
    afterText: 'After: "My wife thought I bought a new truck"',
    category: 'Premium'
  },
  {
    id: '3',
    title: 'College Student\'s Civic - Quick Clean',
    description: 'Budget-friendly option that still made a huge difference',
    beforeText: 'Before: Typical college car disaster',
    afterText: 'After: Parents were actually impressed',
    category: 'Basic'
  },
  {
    id: '4',
    title: 'Jennifer\'s BMW - Headlight Revival',
    description: 'Headlights were so yellow she was embarrassed to drive it',
    beforeText: 'Before: Looked like old plastic',
    afterText: 'After: Crystal clear, like new',
    category: 'Add-on'
  },
  {
    id: '5',
    title: 'Dog Owner\'s Subaru - Pet Hair Nightmare',
    description: 'Three golden retrievers, need I say more?',
    beforeText: 'Before: More hair than car interior',
    afterText: 'After: You\'d never know they had pets',
    category: 'Deluxe'
  },
  {
    id: '6',
    title: 'Carlos\'s Camry - Engine Bay Detail',
    description: 'Wanted to impress his nephew who\'s into cars',
    beforeText: 'Before: Typical 5-year-old engine mess',
    afterText: 'After: Nephew was genuinely impressed',
    category: 'Add-on'
  },
  {
    id: '7',
    title: 'Weekend Warrior\'s Jeep - Mud to Mint',
    description: 'Off-road enthusiast needed it clean for Monday work',
    beforeText: 'Before: Looked like it lived in a swamp',
    afterText: 'After: Office parking lot ready',
    category: 'Premium'
  },
  {
    id: '8',
    title: 'New Mom\'s Minivan - Interior Rescue',
    description: 'Baby spit-up, toddler snacks, the whole nine yards',
    beforeText: 'Before: Biohazard level mess',
    afterText: 'After: She can have adult friends in it again',
    category: 'Deluxe'
  }
]

const categories = ['All', 'Basic', 'Deluxe', 'Premium', 'Add-on']

export default function GalleryPage() {
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
              Our Work Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              See the quality and transformation of our mobile detailing services
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Before/After Placeholder */}
                <div className="aspect-video bg-gradient-to-r from-slate-200 to-slate-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before Side - Dirty/messy look */}
                    <div className="w-1/2 bg-gradient-to-br from-amber-800 to-slate-600 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="text-center text-white relative z-10">
                        <div className="text-3xl mb-2">🚗</div>
                        <div className="text-xs font-bold bg-red-600 px-2 py-1 rounded">BEFORE</div>
                      </div>
                      {/* Dirt spots */}
                      <div className="absolute top-2 left-3 w-6 h-6 bg-amber-900 rounded-full opacity-60"></div>
                      <div className="absolute bottom-4 right-3 w-4 h-4 bg-slate-800 rounded-full opacity-40"></div>
                    </div>
                    {/* After Side - Clean/shiny look */}
                    <div className="w-1/2 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-white/10"></div>
                      <div className="text-center text-white relative z-10">
                        <div className="text-3xl mb-2">✨</div>
                        <div className="text-xs font-bold bg-green-600 px-2 py-1 rounded">AFTER</div>
                      </div>
                      {/* Shine effects */}
                      <div className="absolute top-3 right-4 w-3 h-3 bg-white rounded-full opacity-80"></div>
                      <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full opacity-60"></div>
                      <div className="absolute bottom-5 left-4 w-4 h-4 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-medium">
                      {item.category}
                    </span>
                  </div>
                  {/* Divider line */}
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-white/80 transform -translate-x-1/2"></div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div>{item.beforeText}</div>
                    <div>{item.afterText}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl">⭐</div>
              <blockquote className="text-lg italic">
                "The before and after photos speak for themselves. Malik transformed 
                my car from looking tired to absolutely stunning. The ceramic coating 
                still looks perfect after 6 months!"
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">BMW X5 Owner</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">
                Ready for Your Own Transformation?
              </h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Experience the same quality and attention to detail shown in our gallery. 
                Book your mobile detailing service and see the difference we can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/booking" className="inline-flex items-center">
                    Book Your Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/services">
                    View All Services
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