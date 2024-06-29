import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Loading from 'components/loading';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const DefaultLayout = React.lazy(() => import('./layout/defaultLayout'));
const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
