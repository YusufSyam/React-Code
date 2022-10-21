import {useState} from 'react'

import Modal from "./Modal"
import Backdrop from "./Backdrop"
import classes from './MeetUp.module.css'

function MeetUp(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);


    let cardClassName= classes.card
    let propsText= props.text

    if(propsText===true){
        propsText= 'Meet Up'
    }

    function deleteHandler(){
        console.log(propsText+' Clicked!')
        // console.log(props)

        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div className={cardClassName}>
			<h2>{propsText}</h2>
			<div className={classes.action}>
				<button className={classes.btn} onClick={deleteHandler}>Delete</button>
			</div>
            {modalIsOpen ? <Modal onClick={closeModal} /> : null}
            {modalIsOpen ? <Backdrop onClick={closeModal} /> : null}
		</div>
    );
}

export default MeetUp