
import type { LucideProps } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border h-full">
      <CardHeader className="items-center">
        <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block border border-accent/20">
          <Icon className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="font-headline text-xl text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-card-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
