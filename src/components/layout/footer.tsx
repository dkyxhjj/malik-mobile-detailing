import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <Car className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">
                  Malik Mobile Detailing
                </h3>
                <p className="text-sm text-slate-300">Premium Car Care</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Professional mobile car detailing services brought directly to your location. 
              Quality you can trust, convenience you deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-slate-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold font-heading mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-slate-300">(555) 123-WASH</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-slate-300">info@malikmobiledetailing.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-slate-300">Serving Greater Metro Area</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold font-heading mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="hidden sm:inline">8:00 AM - 6:00 PM</span>
                <span className="sm:hidden">8AM-6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="hidden sm:inline">8:00 AM - 4:00 PM</span>
                <span className="sm:hidden">8AM-4PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-slate-300">
              © 2024 Malik Mobile Detailing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer