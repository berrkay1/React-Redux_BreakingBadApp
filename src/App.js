import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <> 
      <Router>
        <Home/>
        <Routes>
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
