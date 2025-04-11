"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Nav from "@/app/components/_nav/page";

const Providers = ({ children }: PropsWithChildren<object>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });

  const pathname = usePathname();
  const hideNav = pathname.startsWith("/menu/") && pathname.split("/").length === 3;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        {!hideNav && (
          <nav>
            <Nav />
          </nav>
        )}
        <div className="flex-1 flex">{children}</div>
      </div>
    </QueryClientProvider>
  );
};

export default Providers;
