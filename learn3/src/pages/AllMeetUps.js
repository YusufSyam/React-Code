import React from "react"
import {useNavigate} from 'react-router-dom'
import MeetUp from "../components/MeetUp"
import classes from './AllMeetUps.module.css'

function AllMeetUpsPage () {
    let navigate = useNavigate ()

    return (
        <div>
            <div className='appContainer'>
                <h1>All MeetUps</h1>
                <div className={classes.meetUpContainer}>
                    <MeetUp text='MeetUp1'/>
                    <MeetUp text='MeetUp2'/>
                    <MeetUp text='MeetUp3'/>
                    <MeetUp text/>
                </div>
            </div>
            <button onClick={()=>{navigate('/new-meetup')}}>Make New Meet Up</button>
            {" "}
        </div>
    )
}

export default AllMeetUpsPage
