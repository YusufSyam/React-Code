import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritePage from './pages/Favorite';
import ErrorPage from './pages/ErrorPage';

function App () {
    return (
        <Router>
            <nav>
              <Link to='/'>All Meet Ups</Link>
              <br />
              <Link to='/new-meetup' >New Meet Up</Link>
              <br />
              <Link to='/favorite'>Favorite</Link>
            </nav>
            <h1>Hello World</h1>
            <Routes>
                {/* <div className="App"> */}
                    <Route path='/' element={<AllMeetUpsPage/>} />
                    <Route path='/home' element={<AllMeetUpsPage/>} />
                    <Route path='/new-meetup/' element={<NewMeetUpPage/>} />
                    <Route path='/new-meetup/:meet' element={<NewMeetUpPage/>} />
                    <Route path='/favorite' element={<FavoritePage/>} />
                    <Route path='*' element={<ErrorPage/>}/>
                {/* </div> */}
            </Routes>
        </Router>
    );
}

export default App;
