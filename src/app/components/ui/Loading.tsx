import { Skeleton } from "@/components/ui/skeleton";

export default function MenuCardSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2 rounded" />
      </div>

      {/* Image */}
      <div className="relative h-44 sm:h-32 overflow-hidden rounded-lg mx-4 mb-4">
      <Skeleton className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-gray-200 to-gray-100" />
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-end">
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  );
}
