-- Malik Mobile Detailing Supabase Database Schema
-- This schema defines the tables for storing bookings, inquiries, and related data

-- Services table (could be managed in admin panel)
CREATE TABLE services (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration INTEGER NOT NULL, -- duration in minutes
    features JSONB NOT NULL, -- array of feature strings
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add-ons table
CREATE TABLE add_ons (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration INTEGER NOT NULL, -- duration in minutes
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    service_id VARCHAR(50) NOT NULL REFERENCES services(id),
    add_on_ids JSONB DEFAULT '[]'::jsonb, -- array of add-on IDs
    service_date DATE NOT NULL,
    service_time TIME NOT NULL,
    vehicle_make VARCHAR(100) NOT NULL,
    vehicle_model VARCHAR(100) NOT NULL,
    vehicle_year VARCHAR(4) NOT NULL,
    vehicle_color VARCHAR(50) NOT NULL,
    special_requests TEXT,
    total_price INTEGER NOT NULL, -- price in cents
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
    notes TEXT, -- internal notes for staff
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'responded', 'closed')),
    response TEXT, -- staff response
    responded_at TIMESTAMP WITH TIME ZONE,
    responded_by VARCHAR(255), -- staff member who responded
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- File uploads table (for inquiry attachments)
CREATE TABLE file_uploads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    file_size INTEGER NOT NULL,
    storage_path VARCHAR(500) NOT NULL, -- path in Supabase storage
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table (for managing customer reviews)
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID REFERENCES bookings(id),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    service VARCHAR(255),
    location VARCHAR(255),
    is_approved BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Time slots table (for availability management)
CREATE TABLE time_slots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_date DATE NOT NULL,
    slot_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT true,
    booking_id UUID REFERENCES bookings(id), -- when booked
    notes TEXT, -- reason for unavailability
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(slot_date, slot_time)
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_date ON bookings(service_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_customer_email ON bookings(customer_email);
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX idx_time_slots_date ON time_slots(slot_date);
CREATE INDEX idx_file_uploads_inquiry_id ON file_uploads(inquiry_id);

-- Insert sample services
INSERT INTO services (id, name, description, price, duration, features) VALUES
('basic', 'Basic Wash', 'Essential exterior and interior cleaning for your vehicle', 3500, 60, '["Exterior hand wash", "Interior vacuuming", "Window cleaning (inside & out)", "Dashboard wipe down", "Door jamb cleaning"]'),
('deluxe', 'Deluxe Detail', 'Comprehensive cleaning and protection package', 6500, 120, '["Everything in Basic Wash", "Clay bar treatment", "Paint sealant application", "Tire shine & dressing", "Interior conditioning", "Leather treatment", "Air freshening"]'),
('premium', 'Premium Protection', 'Complete detailing with advanced protection', 9500, 180, '["Everything in Deluxe Detail", "Ceramic coating application", "Engine bay cleaning", "Headlight restoration", "Fabric protection", "Chrome polishing", "30-day protection guarantee"]');

-- Insert sample add-ons
INSERT INTO add_ons (id, name, description, price, duration) VALUES
('interior-deep', 'Deep Interior Clean', 'Thorough cleaning of carpets, seats, and hard-to-reach areas', 2500, 45),
('waxing', 'Premium Wax', 'High-quality carnauba wax for enhanced shine and protection', 2000, 30),
('headlight-restore', 'Headlight Restoration', 'Restore cloudy or yellowed headlights to like-new condition', 3000, 30),
('engine-bay', 'Engine Bay Detail', 'Complete cleaning and dressing of engine compartment', 3500, 45),
('pet-hair', 'Pet Hair Removal', 'Specialized removal of pet hair from upholstery', 1500, 20);

-- Enable Row Level Security (RLS) for data protection
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to services and add-ons
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE add_ons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Add-ons are viewable by everyone" ON add_ons FOR SELECT USING (is_active = true);
CREATE POLICY "Approved testimonials are viewable by everyone" ON testimonials FOR SELECT USING (is_approved = true);

-- Policies for bookings (customers can only see their own)
CREATE POLICY "Users can insert their own bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own bookings" ON bookings FOR SELECT USING (customer_email = auth.jwt() ->> 'email');

-- Policies for inquiries (customers can only see their own)
CREATE POLICY "Users can insert their own inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own inquiries" ON inquiries FOR SELECT USING (email = auth.jwt() ->> 'email');

-- File upload policies
CREATE POLICY "Users can upload files for their inquiries" ON file_uploads FOR INSERT WITH CHECK (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_add_ons_updated_at BEFORE UPDATE ON add_ons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create a view for booking details with service information
CREATE VIEW booking_details AS
SELECT 
    b.*,
    s.name as service_name,
    s.description as service_description,
    s.duration as service_duration
FROM bookings b
JOIN services s ON b.service_id = s.id;

-- Create a function to get available time slots for a date
CREATE OR REPLACE FUNCTION get_available_slots(slot_date DATE)
RETURNS TABLE(slot_time TIME, is_available BOOLEAN) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ts.slot_time,
        ts.is_available AND ts.booking_id IS NULL as is_available
    FROM time_slots ts
    WHERE ts.slot_date = slot_date
    ORDER BY ts.slot_time;
END;
$$ LANGUAGE plpgsql;