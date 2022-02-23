import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

interface QueryProviderProps {
  children?: ReactNode;
}

function QueryProvider({ children = null }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
       {children}
    </QueryClientProvider>    
  );
}

export default QueryProvider;
