import React from "react"
import {useNavigate} from 'react-router-dom'

function AllMeetUpsPage () {
    let navigate = useNavigate ()

    return (
        <div>
            <h1>
                All Meet Ups Page
            </h1>
            <button onClick={()=>{navigate('/new-meetup')}}>Make New Meet Up</button>
            {" "}
        </div>
    )
}

export default AllMeetUpsPage
