# Malik Mobile Detailing Website

A modern, responsive website for a mobile car detailing business built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

### 🏠 Homepage
- **Hero Section**: Compelling headline, subheadline, and clear CTA
- **Services Overview**: Card-based layout showcasing Basic, Deluxe, and Premium packages
- **Testimonials Carousel**: Rotating customer reviews with auto-advance
- **Call-to-Action Banner**: Final conversion section

### 📅 Booking System
- **Service Selection**: Choose from predefined packages (Basic, Deluxe, Premium)
- **Add-on Services**: Optional extras like interior deep clean, waxing, etc.
- **Date & Time Picker**: Calendar integration with available time slots
- **Vehicle Information**: Capture make, model, year, and color
- **Contact Details**: Customer information with validation
- **Order Summary**: Real-time pricing calculation
- **Confirmation Flow**: Success page with booking details

### 📞 Contact Page
- **Contact Form**: Name, email, phone, and message fields with validation
- **File Upload**: Drag-and-drop photo uploads for car images
- **Contact Information**: Business hours, phone, email, and service area
- **FAQ Section**: Common questions and answers

### 🧭 Navigation & Pages
- **Responsive Header**: Mobile-friendly navigation with company branding
- **Services Page**: Detailed service descriptions and pricing
- **Gallery Page**: Before/after showcase (with placeholder content)
- **About Page**: Company story and values
- **Footer**: Complete contact info, hours, and social links

## Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Styling**: Tailwind CSS 4.x
- **Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Calendar**: react-day-picker
- **Icons**: Lucide React
- **Typography**: Inter (body text) + Poppins (headings)

## Design System

### Color Palette
- **Primary**: Navy blue (#1e3a8a)
- **Secondary**: Steel gray (#64748b)
- **Accent**: Lime green (#84cc16)
- **Background**: Clean whites and light grays
- **Text**: Slate gray tones

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family
- **Responsive**: Fluid typography scaling

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd malik-mobile-detailing
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Visit [http://localhost:3000](http://localhost:3000)

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── about/            # About page
│   ├── gallery/          # Gallery page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header, Footer
│   ├── home/             # Homepage sections
│   ├── booking/          # Booking form components
│   └── contact/          # Contact form components
├── data/
│   └── mockData.ts       # Sample data and mock database
├── types/
│   └── index.ts          # TypeScript type definitions
└── lib/
    └── utils.ts          # Utility functions
```

## Database Integration

### Mock Data (Current)
The app currently uses mock data stored in `src/data/mockData.ts` for:
- Service packages and pricing
- Add-on services
- Customer testimonials
- Available time slots

### Supabase Schema (Ready for Production)
A complete PostgreSQL schema is provided in `supabase-schema.sql` with tables for:
- **services**: Service packages and features
- **add_ons**: Additional service options
- **bookings**: Customer bookings with full details
- **inquiries**: Contact form submissions
- **file_uploads**: Photo attachments for inquiries
- **testimonials**: Customer reviews and ratings
- **time_slots**: Availability management

### Setting Up Supabase (Optional)

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the schema**:
   - Copy the contents of `supabase-schema.sql`
   - Execute in the Supabase SQL Editor

3. **Configure environment variables**:
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. **Install Supabase client**:
```bash
npm install @supabase/supabase-js
```

## Form Validation

All forms use **Zod** for schema validation:
- **Booking Form**: Validates service selection, date/time, vehicle info, and contact details
- **Contact Form**: Validates contact information and message requirements
- **File Uploads**: Validates image types and file sizes (10MB limit)

## Responsive Design

The website is fully responsive with:
- **Mobile-first approach**: Tailwind's responsive utilities
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Large tap targets and intuitive mobile navigation
- **Performance optimized**: Efficient component rendering

## Placeholder Content

### Images
- The gallery and some sections use placeholder content
- Replace with real before/after photos of detailed cars
- Hero section uses emoji car icon (🚗) - replace with professional photo

### Contact Information
Update the following placeholder information:
- **Phone**: (555) 123-WASH
- **Email**: info@malikmobiledetailing.com
- **Service area**: "Greater Metro Area"

## Customization

### Branding
- **Company name**: Update in header, footer, and metadata
- **Logo**: Replace car emoji with actual logo
- **Colors**: Modify CSS custom properties in `globals.css`

### Services & Pricing
- **Packages**: Edit `src/data/mockData.ts` to update services
- **Add-ons**: Modify add-on services and pricing
- **Features**: Update service feature lists

### Content
- **About page**: Customize company story and values  
- **Testimonials**: Replace with real customer reviews
- **FAQ**: Update with actual frequently asked questions

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel via GitHub integration
```

### Other Platforms
```bash
npm run build
npm start
```

## Future Enhancements

### Payment Integration
- Stripe integration for online payments
- Booking deposits and full payment options
- Invoice generation

### Admin Dashboard
- Booking management system
- Calendar availability management
- Customer communication tools

### Advanced Features  
- SMS notifications for booking confirmations
- Email automation for follow-ups
- Google Calendar integration
- Route optimization for mobile service

## Support

For questions about this codebase or customization needs, please refer to the inline code comments and component documentation.

## License

This project is created for Malik Mobile Detailing. All rights reserved.
