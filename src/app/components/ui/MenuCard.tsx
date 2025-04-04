import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { ArrowRight } from "lucide-react"
import Image from "next/image";
  
  type Props = {
    title: string;
    image: string;
  };

const MenuCard = ({ title, image }: Props) => (
    <Card className="overflow-hidden border-none shadow-lg transition-transform hover:scale-[1.02]">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold tracking-tight h-8 sm:h-14">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-44 sm:h-32 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10" />
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <Button size="sm" className="group">
          Explore
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )

  export default MenuCard;