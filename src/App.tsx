import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

// const animal = {
//   avian: true,
//   canine: false,
//   earthAnimal: false,
//   earthInsect: false,
//   feline: false,
//   name: 'Dunghill bird',
//   uid: 'ANMA0000079699',
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
