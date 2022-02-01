import AppRoutes from './AppRoutes';
import QueryProvider from './QueryProvider';

function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
