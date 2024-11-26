import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Welcome Home</h1>} />
        <Route path='about' element={<h1>About Project</h1>} />
      </Routes>
    </>
  );
}

export default App;
