import React from "react"
import MeetUpList from "../components/MeetUpList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'First Meet Up at Munchen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    }
]

function FavoritePage() {
    let pageName= 'Favourite Meet Ups'

    return (
        <MeetUpList pageName={pageName} data={DUMMY_DATA} />
    )
}

export default FavoritePage