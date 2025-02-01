import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sessions from './pages/Sessions';
import Batches from './pages/Batches';
import Layout from './components/Layout';
import {QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Batch from './pages/Batch';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans';
import Session from './pages/Session';
import {RoutePath} from './configuration/consts';
import {ChakraProvider, createSystem, defaultConfig} from '@chakra-ui/react';

const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      colorPalette: 'purple',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {value: 'Open Sans'},
        body: {value: 'Open Sans'},
      },
    },
  },
});

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 120000,
    },
  },
});

function App() {
  return (
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <Router basename={import.meta.env.BASE_URL}>
          <Layout>
            <Routes>
              <Route path={RoutePath.SESSION} element={<Session />} />
              <Route path={RoutePath.SESSIONS} element={<Sessions />} />
              <Route path={RoutePath.BATCH} element={<Batch />} />
              <Route path={RoutePath.BATCHES} element={<Batches />} />
              <Route path="/" element={<Batches />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
