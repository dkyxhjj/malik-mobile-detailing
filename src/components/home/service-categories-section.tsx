'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Crown, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ServiceCategoriesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const categories = [
    {
      id: 'quick',
      title: 'Just Need It Clean?',
      subtitle: 'The "I Have a Date Tonight" Special',
      price: '35',
      time: '1 hour',
      icon: Zap,
      color: 'from-blue-500 to-cyan-400',
      description: 'Fast but thorough - your car will look respectable again',
      features: ['Hand wash', 'Interior vacuum', 'Windows done right', 'Quick tire shine'],
      popular: false
    },
    {
      id: 'full',
      title: 'Make It Look Amazing',
      subtitle: 'The "Wow, Your Car Looks New!" Package',
      price: '65',
      time: '2 hours',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-400',
      description: 'This is where I really get to show off my skills',
      features: ['Everything above', 'Clay bar treatment', 'Paint protection', 'Interior conditioning'],
      popular: true
    },
    {
      id: 'showstopper',
      title: 'Turn Heads Everywhere',
      subtitle: 'The "Is That Car New?" Experience',
      price: '95',
      time: '3 hours',
      icon: Crown,
      color: 'from-amber-500 to-orange-400',
      description: 'For when you want your car to look better than showroom',
      features: ['Everything above', 'Ceramic coating', 'Engine bay detail', 'Headlight restoration'],
      popular: false
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Simple service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className={`${category.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {category.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">${category.price}</div>
                  <div className="text-gray-600">{category.time}</div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-3">{category.title}</h3>
                <p className="text-gray-600 text-center mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" variant={category.popular ? 'default' : 'outline'}>
                  <Link href={`/booking?service=${category.id === 'quick' ? 'basic' : category.id === 'full' ? 'deluxe' : 'premium'}`}>
                    Choose {category.title.split(' ')[0]}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple bottom CTA */}
        <div className="text-center bg-white rounded-lg p-6 border">
          <p className="text-gray-900 font-medium mb-2">
            Not sure which service to pick?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Text me a photo of your car and I'll recommend the best option
          </p>
          <Button asChild>
            <Link href="/contact">
              Get Recommendation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategoriesSection