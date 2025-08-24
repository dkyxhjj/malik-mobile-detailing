'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Clock, Plus, Minus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { services, addOns, timeSlots } from '@/data/mockData'
import { cn } from '@/lib/utils'

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Invalid email address'),
  customerPhone: z.string().optional(),
  serviceId: z.string().min(1, 'Please select a service'),
  addOnIds: z.array(z.string()).default([]),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string().min(1, 'Please select a time'),
  vehicleMake: z.string().min(1, 'Vehicle make is required'),
  vehicleModel: z.string().min(1, 'Vehicle model is required'),
  vehicleYear: z.string().min(4, 'Please enter a valid year'),
  vehicleColor: z.string().min(1, 'Vehicle color is required'),
  specialRequests: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingFormProps {
  initialServiceId?: string
}

const BookingForm = ({ initialServiceId }: BookingFormProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: initialServiceId || '',
      addOnIds: [],
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleColor: '',
      specialRequests: '',
    },
  })

  const selectedService = services.find(s => s.id === form.watch('serviceId'))
  const availableTimeSlots = selectedDate 
    ? timeSlots.filter(slot => 
        slot.date === format(selectedDate, 'yyyy-MM-dd') && slot.available
      )
    : []

  const calculateTotal = () => {
    const servicePrice = selectedService?.price || 0
    const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId)
      return total + (addOn?.price || 0)
    }, 0)
    return servicePrice + addOnPrice
  }

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns(prev => [...prev, addOnId])
    } else {
      setSelectedAddOns(prev => prev.filter(id => id !== addOnId))
    }
    form.setValue('addOnIds', checked 
      ? [...selectedAddOns, addOnId] 
      : selectedAddOns.filter(id => id !== addOnId)
    )
  }

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const booking = {
        ...data,
        id: Date.now().toString(),
        totalPrice: calculateTotal(),
        status: 'pending' as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      
      // Log the booking details
      console.log('🎉 New Booking Received!', {
        customer: `${data.customerName} (${data.customerEmail})`,
        service: selectedService?.name,
        addOns: selectedAddOns.map(id => addOns.find(a => a.id === id)?.name),
        vehicle: `${data.vehicleYear} ${data.vehicleMake} ${data.vehicleModel}`,
        appointment: `${format(data.date, 'PPP')} at ${data.time}`,
        total: `$${calculateTotal()}`,
        specialRequests: data.specialRequests || 'None'
      })
      
      // In a real app, you would:
      // 1. Send to your database/API
      // 2. Send confirmation email
      // 3. Block the time slot
      // 4. Send SMS notification
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Booking submission failed:', error)
      alert('Sorry, something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-6xl">✅</div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">
                Booking Received
              </h2>
              <p className="text-muted-foreground">
                Thanks for booking! I'll contact you within a few hours to confirm the details and schedule your appointment.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={() => setIsSubmitted(false)}>
                Book Another Service
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Service Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Service</CardTitle>
          <CardDescription>
            Select the detailing package that best fits your needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="serviceId">Service Package *</Label>
              <Select
                value={form.watch('serviceId')}
                onValueChange={(value) => form.setValue('serviceId', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service package" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div className="flex justify-between w-full">
                        <span>{service.name}</span>
                        <span className="font-medium">${service.price}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.serviceId && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.serviceId.message}
                </p>
              )}
            </div>

            {selectedService && (
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{selectedService.name} - ${selectedService.price}</h4>
                <p className="text-sm text-muted-foreground mb-2">{selectedService.description}</p>
                <ul className="text-sm space-y-1">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Add-ons */}
      <Card>
        <CardHeader>
          <CardTitle>Add-On Services</CardTitle>
          <CardDescription>
            Enhance your detailing package with additional services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {addOns.map((addOn) => (
              <div key={addOn.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <Checkbox
                  id={addOn.id}
                  checked={selectedAddOns.includes(addOn.id)}
                  onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor={addOn.id} className="font-medium cursor-pointer">
                    {addOn.name} - ${addOn.price}
                  </Label>
                  <p className="text-sm text-muted-foreground">{addOn.description}</p>
                  <p className="text-xs text-muted-foreground">~{addOn.duration} minutes</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Date & Time Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Schedule Your Service</CardTitle>
          <CardDescription>
            Choose your preferred date and time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Select Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date)
                      form.setValue('date', date!)
                    }}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {form.formState.errors.date && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.date.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time *</Label>
              <Select
                value={form.watch('time')}
                onValueChange={(value) => form.setValue('time', value)}
                disabled={!selectedDate || availableTimeSlots.length === 0}
              >
                <SelectTrigger>
                  <SelectValue placeholder={
                    !selectedDate 
                      ? "Select a date first" 
                      : availableTimeSlots.length === 0
                      ? "No slots available"
                      : "Select time"
                  } />
                </SelectTrigger>
                <SelectContent>
                  {availableTimeSlots.map((slot) => (
                    <SelectItem key={slot.time} value={slot.time}>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {slot.time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.time && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.time.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Information */}
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Information</CardTitle>
          <CardDescription>
            Tell us about your vehicle
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicleMake">Make *</Label>
              <Input
                id="vehicleMake"
                placeholder="Toyota, Honda, BMW, etc."
                {...form.register('vehicleMake')}
              />
              {form.formState.errors.vehicleMake && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.vehicleMake.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleModel">Model *</Label>
              <Input
                id="vehicleModel"
                placeholder="Camry, Civic, X5, etc."
                {...form.register('vehicleModel')}
              />
              {form.formState.errors.vehicleModel && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.vehicleModel.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleYear">Year *</Label>
              <Input
                id="vehicleYear"
                placeholder="2020"
                {...form.register('vehicleYear')}
              />
              {form.formState.errors.vehicleYear && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.vehicleYear.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleColor">Color *</Label>
              <Input
                id="vehicleColor"
                placeholder="Black, White, Red, etc."
                {...form.register('vehicleColor')}
              />
              {form.formState.errors.vehicleColor && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.vehicleColor.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            How can we reach you?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                placeholder="John Doe"
                {...form.register('customerName')}
              />
              {form.formState.errors.customerName && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.customerName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="customerEmail">Email *</Label>
              <Input
                id="customerEmail"
                type="email"
                placeholder="john@example.com"
                {...form.register('customerEmail')}
              />
              {form.formState.errors.customerEmail && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.customerEmail.message}
                </p>
              )}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="customerPhone">Phone Number (Optional)</Label>
              <Input
                id="customerPhone"
                type="tel"
                placeholder="(555) 123-4567"
                {...form.register('customerPhone')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              placeholder="Any special instructions or requests?"
              {...form.register('specialRequests')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedService && (
              <div className="flex justify-between">
                <span>{selectedService.name}</span>
                <span>${selectedService.price}</span>
              </div>
            )}
            {selectedAddOns.map(addOnId => {
              const addOn = addOns.find(a => a.id === addOnId)
              return addOn && (
                <div key={addOnId} className="flex justify-between text-sm">
                  <span>{addOn.name}</span>
                  <span>+${addOn.price}</span>
                </div>
              )
            })}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Submitting...</span>
          </div>
        ) : (
          'Book Service'
        )}
      </Button>
    </form>
  )
}

export default BookingForm