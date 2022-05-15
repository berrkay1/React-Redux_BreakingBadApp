import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Router>
        <Home/>
        <Routes>
            
        </Routes>
      </Router>
      </div>
  );
}

export default App;
