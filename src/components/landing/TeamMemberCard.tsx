
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Using Avatar for a consistent look

interface TeamMemberCardProps {
  imageUrl: string;
  imageHint: string;
  name: string;
  role: string;
}

export default function TeamMemberCard({ imageUrl, imageHint, name, role }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card border-border h-full text-center">
      <CardHeader className="p-0 items-center pt-6">
        <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-md">
          <AvatarImage src={imageUrl || `https://placehold.co/128x128.png`} alt={name} data-ai-hint={imageHint} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-headline text-xl font-semibold mt-4 mb-1 text-card-foreground">{name}</h3>
        <p className="text-sm text-primary">{role}</p>
      </CardContent>
    </Card>
  );
}
