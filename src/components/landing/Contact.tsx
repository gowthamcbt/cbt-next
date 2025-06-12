
import SectionWrapper from './SectionWrapper';
import ContactForm from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <SectionWrapper id="contact-us" className="bg-background">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">Get In Touch</h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <Card className="shadow-xl bg-card border-border">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-card-foreground">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        <Card className="shadow-xl bg-card border-border">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-card-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-foreground/80">1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-foreground/80">+1 (650) 253-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-foreground/80">info@cloverbridgetech.dev</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
