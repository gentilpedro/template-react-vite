import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
