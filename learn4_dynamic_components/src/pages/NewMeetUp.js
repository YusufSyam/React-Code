// import {useParams} from 'react-router-dom'
import {useRef} from 'react'

import Card from '../ui/Card'

import classes from './NewMeetUp.module.css'

function NewMeetUpPage (props) {

    // let {meet}= useParams()
    // console.log(meet)

    // return <h1>New Meet Up Page: {meet}</h1>

    const titleInputRef= useRef()
    const imageInputRef= useRef()
    const addressInputRef= useRef()
    const descriptionInputRef= useRef()

    function addMeetUpHandler(meetUpData){
        fetch(
            'https://react-learn4-default-rtdb.asia-southeast1.firebasedatabase.app/',
            {
                method: 'POST',
                body: JSON.stringify(meetUpData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
    }

    function submitHandler(event){
        event.preventDefault()

        const enteredTitle= titleInputRef.current.value
        // Kalau mau ubah
        // titleInputRef.current.value= blablabla

        const enteredImage= imageInputRef.current.value
        const enteredAddress= addressInputRef.current.value
        const enteredDescription= descriptionInputRef.current.value

        const meetUpData= {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        // console.log(meetUpData)
        // props.addMeetUpHandler(meetUpData)
        addMeetUpHandler(meetUpData)
    }


    return (
        <div>
            <h1>
                New Meet Up Page
            </h1>
            <Card>
                <form className={
                        classes.form
                    }
                    onSubmit={submitHandler}>
                    <div className={
                        classes.control
                    }>
                        <label htmlFor='title'>
                            Meetup Title
                        </label>
                        <input type='text' required id='title' ref={titleInputRef}/>
                    </div>
                    <div className={
                        classes.control
                    }>
                        <label htmlFor='image'>
                            Meetup Image
                        </label>
                        <input type='url' required id='image' ref={imageInputRef}/>
                    </div>
                    <div className={
                        classes.control
                    }>
                        <label htmlFor='address'>
                            Address
                        </label>
                        <input type='text' required id='address' ref={addressInputRef}/>
                    </div>
                    <div className={
                        classes.control
                    }>
                        <label htmlFor='description'>
                            Description
                        </label>
                        <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                    </div>
                    <div className={
                        classes.actions
                    }>
                        <button>
                            Add Meetup
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default NewMeetUpPage
