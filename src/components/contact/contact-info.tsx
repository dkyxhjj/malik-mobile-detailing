import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span>Contact Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <a 
                href="tel:(555)123-9274" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (555) 123-WASH
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a 
                href="mailto:info@malikmobiledetailing.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@malikmobiledetailing.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium">Service Area</p>
              <p className="text-muted-foreground">Greater Metro Area</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Business Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card>
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <div className="text-2xl">⚡</div>
            <p className="font-medium">Quick Response</p>
            <p className="text-sm text-muted-foreground">
              We typically respond to inquiries within 24 hours
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Services Note */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="space-y-2">
            <p className="font-medium text-primary">Mobile Service Available</p>
            <p className="text-sm text-muted-foreground">
              We bring our professional equipment directly to your location. 
              Perfect for homes, offices, or any convenient spot with water access.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactInfo