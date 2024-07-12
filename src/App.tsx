import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
