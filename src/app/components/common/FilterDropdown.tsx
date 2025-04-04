import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props<T> = {
  label: string;
  items: T[];
  getTitle: (item: T) => string;
  onSelect?: (item: T) => void;
  selected?: T | null;
};

export function FilterDropdown<T>({
  label,
  items,
  getTitle,
  onSelect,
  selected,
}: Props<T>) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent className="rounded-xl shadow-lg bg-white">
        <ul className="grid gap-4 p-2 w-[300px] sm:w-[600px] sm:grid-cols-5 grid-cols-3">
          {items.map((item) => {
            const isActive =
              selected !== null &&
              selected !== undefined &&
              getTitle(item) === getTitle(selected);
            return (
              <ListItem
                key={getTitle(item)}
                title={getTitle(item)}
                onClick={() => onSelect?.(item)}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  {
    title: string;
    onClick?: () => void;
    className?: string;
    isActive?: boolean;
  }
>(({ title, onClick, className, isActive }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "w-full text-left block select-none space-y-1 rounded-sm p-2 leading-none outline-none transition-colors",
          isActive
            ? "bg-green-400 text-white font-semibold ring-1 ring-accent"
            : "hover:bg-green-400 hover:text-white",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </button>
    </li>
  );
});
ListItem.displayName = "ListItem";
