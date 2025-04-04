import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { ArrowRight } from "lucide-react"

const MenuCard = ({ title, description, image }: { title: string, description: string, image: string }) => (
    <Card className="overflow-hidden border-none shadow-lg transition-transform hover:scale-[1.02]">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10" />
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
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