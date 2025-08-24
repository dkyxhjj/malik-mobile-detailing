export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number
  features: string[]
}

export interface AddOn {
  id: string
  name: string
  description: string
  price: number
  duration: number
}

export interface Booking {
  id: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  serviceId: string
  addOnIds: string[]
  date: string
  time: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleColor: string
  specialRequests?: string
  totalPrice: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  files?: FileUpload[]
  status: 'new' | 'responded' | 'closed'
  createdAt: string
  updatedAt: string
}

export interface FileUpload {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  service: string
  date: string
  location?: string
}

export interface TimeSlot {
  date: string
  time: string
  available: boolean
}