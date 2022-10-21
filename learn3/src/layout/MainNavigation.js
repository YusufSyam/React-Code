import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation () {
    return (
        <header className={
            classes.header
        }>
            <div className={
                classes.logo
            }>
                MyMeetUpApps
            </div>
            <nav className={
                classes.nav
            }>
                <ul>
                    <li>
                        <Link to='/'>
                            All Meet Ups
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorite'>
                            Favorite
                        </Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>
                            New Meet Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
