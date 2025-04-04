"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PropsWithChildren} from "react";

const Providers = ({children}: PropsWithChildren<object>) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
          }
        }
    });
    return <QueryClientProvider client={queryClient}>
        <div>
            {children}
        </div>
    </QueryClientProvider>
}

export default Providers