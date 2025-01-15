import { Routes, Route } from 'react-router-dom';

import ToDoDashboard from './pages/ToDoDashboard';
// import ListOfWors from './components/ListOfWors';
const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<ToDoDashboard />} />
 

      
    </Routes>
  )
}

export default App