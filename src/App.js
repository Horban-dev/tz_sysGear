import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom'
import Calculator from './Calculator';
import Sorting from './Sorting';
import Quiz from './Quiz';
function App() {
  return (
    <>
      <header className="home_page">
        <h1 className='header_h1'>Change project</h1>
        <div className='links'>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/sorting">Sorting</NavLink>
        </div>
      </header>
        <Routes>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/sorting" element={<Sorting/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
    </>
  );
}
export default App;