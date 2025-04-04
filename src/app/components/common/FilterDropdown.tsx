import React from 'react'
import { cn } from "@/lib/utils"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type Props<T> = {
    label: string;
    items: T[];
    getTitle: (item: T) => string;
    getHref: (item: T) => string;
  };
  
  export function FilterDropdown<T>({ label, items, getTitle, getHref }: Props<T>) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
        <NavigationMenuContent className="rounded-xl shadow-lg bg-white">
          <ul className="grid gap-4 p-4 w-[300px] sm:w-[600px] sm:grid-cols-5 grid-cols-3">
            {items.map((item) => (
              <ListItem key={getTitle(item)} title={getTitle(item)} href={getHref(item)} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"