import {useParams} from 'react-router-dom'

function NewMeetUpPage() {
    
    let {meet}= useParams()
    console.log(meet)
    return <h1>New Meet Up Page: {meet}</h1>
}

export default NewMeetUpPage
