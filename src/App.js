import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (
    <div className='app'>
      
      <Router>
        <nav className='navbar'>
        <li className='nav-link' >
            <Link style={{textDecoration:'none'}} to='/'>characters</Link>
          </li>
          <li className='nav-link'>
            <Link style={{textDecoration:'none'}} to='quotes'>quotes</Link>
          </li>
        </nav>
       
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='char/:char_id' element={<Detail/>} />
            <Route path='quotes' element={<Quotes/>}/>
            <Route path='quotes/:quote_id' element={<QuotesDetail/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
