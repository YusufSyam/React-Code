import {useState} from 'react'

import Modal from "./Modal"
import Backdrop from "./Backdrop"
import classes from './MeetUp.module.css'

function MeetUp (props) {
    const [modalIsOpen, setModalIsOpen] = useState (false);


    let cardClassName = classes.card
    let propsTitle = props.title

    // if(propsTitle===true){
    //     propsTitle= 'Unnamed Meet Up'
    // }

    function deleteHandler () {
        console.log (propsTitle + ' Clicked!')
        // console.log(props)

        setModalIsOpen (true)
    }

    function closeModal () {
        setModalIsOpen (false)
    }

    return (
        <div className={cardClassName}>
            <div className={
                classes.imageContainer
            }>
                <img src={
                        props.image
                    }
                    alt={propsTitle}/>

                <button className={
                        classes.btn+' '+
                        classes.deleteBtn
                    }
                    onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            <div className={
                classes.cardDetails
            }>
                    <h3>{propsTitle}</h3>
                    <p className={classes.thisP}>{props.description}</p>
                {
                modalIsOpen ? <Modal onClick={closeModal}/> : null
            }
                {
                modalIsOpen ? <Backdrop onClick={closeModal}/> : null
            } </div>
        </div>
    );
}

export default MeetUp
