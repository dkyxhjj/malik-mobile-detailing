'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/data/mockData'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            What people are saying about the service
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                      {/* Simple star rating */}
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      {/* Clean comment */}
                      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.comment}"
                      </blockquote>

                      {/* Simple author info */}
                      <div>
                        <div className="font-medium text-gray-900 mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.service} • {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 rounded-full z-10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 rounded-full z-10"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Cars Detailed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">5.0</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">98%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">24h</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection