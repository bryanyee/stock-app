import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
       {children}
    </QueryClientProvider>    
  );
}

export default QueryProvider;
