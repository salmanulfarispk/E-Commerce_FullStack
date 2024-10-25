"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
  </QueryClientProvider>
  )
}

export default QueryProvider