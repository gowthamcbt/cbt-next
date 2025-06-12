
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  avatarHint: string;
}

export default function TestimonialCard({ quote, name, role, avatarUrl, avatarHint }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg bg-card border-border h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <blockquote className="text-lg italic text-card-foreground/80 mb-6 flex-grow">"{quote}"</blockquote>
        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={avatarUrl || `https://placehold.co/100x100.png`} alt={name} data-ai-hint={avatarHint} />
            <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-sm text-card-foreground/70">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
