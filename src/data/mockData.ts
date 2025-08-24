import { Service, AddOn, Testimonial, TimeSlot } from '@/types'

export const services: Service[] = [
  {
    id: 'basic',
    name: 'The Quick Clean',
    description: 'Perfect for busy folks who need their car looking decent without breaking the bank',
    price: 35,
    duration: 60,
    features: [
      'Hand wash exterior (no drive-thru scratches)',
      'Vacuum interior & trunk',
      'Wipe down dashboard & cup holders',
      'Clean all windows inside & out',
      'Quick tire shine'
    ]
  },
  {
    id: 'deluxe',
    name: 'The Full Treatment',
    description: 'This is where I really get to show off - your car will look amazing',
    price: 65,
    duration: 120,
    features: [
      'Everything from Quick Clean',
      'Clay bar to get embedded dirt out',
      'Apply paint sealant for protection',
      'Condition leather & plastic trim',
      'Proper tire dressing that lasts',
      'Interior deodorizer',
      'Clean door jambs & gas cap area'
    ]
  },
  {
    id: 'premium',
    name: 'The Show Stopper',
    description: 'For people who want their car to look better than when they bought it',
    price: 95,
    duration: 180,
    features: [
      'Everything from Full Treatment',
      'Ceramic coating (lasts 3-6 months)',
      'Engine bay detail & dress',
      'Headlight restoration if needed',
      'Fabric protection spray',
      'Chrome & metal polishing',
      'I guarantee you\'ll love it'
    ]
  }
]

export const addOns: AddOn[] = [
  {
    id: 'interior-deep',
    name: 'Deep Interior Rescue',
    description: 'For when your car interior has... seen better days. I\'ll make it look respectable again.',
    price: 25,
    duration: 45
  },
  {
    id: 'waxing',
    name: 'Hand Wax Upgrade',
    description: 'Old school carnauba wax applied by hand. Takes longer but the shine is incredible.',
    price: 20,
    duration: 30
  },
  {
    id: 'headlight-restore',
    name: 'Headlight Revival',
    description: 'Those yellow cloudy headlights making you look like a grandpa? Let me fix that.',
    price: 30,
    duration: 30
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Clean Up',
    description: 'Make your engine bay look like you actually take care of your car (even if you don\'t).',
    price: 35,
    duration: 45
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair Extraction',
    description: 'Got a furry friend? I have special tools to get ALL the hair out. Trust me.',
    price: 15,
    duration: 20
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    rating: 5,
    comment: 'Holy cow, my Honda looks better than when I bought it! Malik spent like 3 hours on it and got every little spot. Worth every penny.',
    service: 'Deluxe Detail',
    date: '2024-01-15',
    location: 'Riverside'
  },
  {
    id: '2',
    name: 'Mike C.',
    rating: 5,
    comment: 'Finally found someone who actually cares about the work. Showed up on time, brought all his own stuff. My wife was impressed lol',
    service: 'Premium Protection',
    date: '2024-01-20',
    location: 'Westside'
  },
  {
    id: '3',
    name: 'Jessica',
    rating: 4,
    comment: 'Really good job on my Camry. The ceramic coating thing he did is pretty cool - water just rolls right off now. Took a bit longer than expected but I guess that\'s good?',
    service: 'Premium Protection',
    date: '2024-01-10',
    location: 'North Hills'
  },
  {
    id: '4',
    name: 'David T.',
    rating: 5,
    comment: 'Dude knows what he\'s doing. Got all the dog hair out of my truck seats (and there was A LOT). Even cleaned the cup holders I forgot existed.',
    service: 'Basic Wash',
    date: '2024-01-25',
    location: 'Eastside'
  },
  {
    id: '5',
    name: 'Jennifer M.',
    rating: 5,
    comment: 'Best $95 I\'ve spent in a while. My BMW looks showroom ready and I didn\'t have to drive anywhere or wait around. This is how car care should be done.',
    service: 'Premium Protection',
    date: '2024-01-18',
    location: 'Uptown'
  },
  {
    id: '6',
    name: 'Carlos R.',
    rating: 5,
    comment: 'Man brought his own water and everything to my apartment complex. Neighbors kept asking who was doing such a good job. Got his number from me 😄',
    service: 'Deluxe Detail',
    date: '2024-01-22',
    location: 'Midtown'
  }
]

// Generate available time slots for the next 30 days
export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const today = new Date()
  
  // Business hours: 8 AM to 6 PM, every 2 hours
  const businessHours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00']
  
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Skip Sundays (day 0)
    if (date.getDay() === 0) continue
    
    const dateString = date.toISOString().split('T')[0]
    
    businessHours.forEach(time => {
      // Randomly make some slots unavailable (simulate existing bookings)
      const available = Math.random() > 0.3
      
      slots.push({
        date: dateString,
        time,
        available
      })
    })
  }
  
  return slots
}

export const timeSlots = generateTimeSlots()