import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Globe } from "lucide-react";

type Props = {
  title: string;
  category: string;
  area: string;
  tags?: string;
};

export default function MealHeader({ title, category, area, tags }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex flex-wrap gap-3">
        <Badge variant="secondary" className="flex items-center gap-2">
          <UtensilsCrossed className="h-4 w-4" />
          {category}
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {area} Cuisine
        </Badge>
        {tags && <Badge variant="secondary">{tags}</Badge>}
      </div>
    </div>
  );
}