import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ToDoDashboard from './pages/ToDoDashboard';
// import ListOfWors from './components/ListOfWors';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ToDoDashboard />} />
 

      
    </Routes>
  )
}

export default App