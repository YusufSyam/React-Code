import React from "react"
import {useNavigate} from 'react-router-dom'
import MeetUp from "../components/MeetUp"
import classes from './MeetUpList.module.css'

function MeetUpList (props) {
    let navigate = useNavigate ()

    return (
        <div className={classes.meetUpListContainer}>
            <div className='appContainer'>
                <h1>
                    {props.pageName}
                </h1>
                <div className={
                    classes.meetUpContainer
                }>
                    {
                    props.data.map ( (meetup) => {
                        return (
                            <MeetUp key={meetup.id} title={meetup.title} image={meetup.image} address={meetup.address} description={meetup.description}  />
                        )
                    })
                }
                </div>
            </div>
            <button onClick={
                () => {
                    navigate ('/new-meetup')
                }
            } className={classes.btn}>
                Make New Meet Up
            </button>
            {" "} </div>
    )
}

export default MeetUpList
