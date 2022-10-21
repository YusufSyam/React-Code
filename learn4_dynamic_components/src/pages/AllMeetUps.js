import React from "react"
import MeetUpList from "../components/MeetUpList";


const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'First Meet Up at Munchen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    }, {
        id: 'm2',
        title: 'Second Meet Up at Tokyo',
        image: 'https://d20aeo683mqd6t.cloudfront.net/id/articles/title_images/000/038/800/original/tokyo-at-night-p36552332.jpg?2022&d=750x400',
        address: 'Akihabara 5, 12345 Tokyo City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm3',
        title: 'First Meet Up at Munchen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    }
];

function AllMeetUpsPage () {
    let pageName= 'All Meet Ups'
    return (
        <MeetUpList pageName={pageName} data={DUMMY_DATA} />
    )
}

export default AllMeetUpsPage
