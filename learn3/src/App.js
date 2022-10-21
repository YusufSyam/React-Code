import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AllMeetUpsPage from './pages/AllMeetUps';
import Favorite from './pages/Favorite'
import NewMeetUp from './pages/NewMeetUp'
import ErrorPage from './pages/ErrorPage'
import MainNavigation from './layout/MainNavigation';

function App() {
	return (
		<Router>
			<MainNavigation/>
			<Routes>
				<Route path='/' element={<AllMeetUpsPage/>} />
				<Route path='/home' element={<AllMeetUpsPage/>} />
				<Route path='/all-meetup' element={<AllMeetUpsPage/>} />
				<Route path='/favorite' element={<Favorite/>} />
				<Route path='/new-meetup' element={<NewMeetUp/>} />
				<Route path='/new-meetup/:meet' element={<NewMeetUp/>} />
				<Route path='*' element={<ErrorPage/>} />
			</Routes>
		</Router>
	);
}

export default App;
