import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <h1>HOME PAGe</h1>
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
