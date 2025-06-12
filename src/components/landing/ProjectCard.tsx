
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  category: string;
}

export default function ProjectCard({ imageUrl, imageHint, title, category }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card border-border">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-headline text-lg mb-1 text-card-foreground">{title}</CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">{category}</Badge>
      </CardFooter>
    </Card>
  );
}
