import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { CharactersPage } from './pages/CharactersPage';

import PrivateRoute from './components/PrivateRoute';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/starships' element={<StarshipsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
