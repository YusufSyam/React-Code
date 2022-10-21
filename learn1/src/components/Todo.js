import {useState} from 'react'

import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);


    let cardClassName= 'card'
    let propsText= props.text

    if(propsText===true){
        propsText= 'TODO_NULL'
    }

    // if(props.text==='Todo1'){
    //     console.log('aw')
    // }

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
			<div className="actions">
				<button className="btn" onClick={deleteHandler}>Delete</button>
			</div>
            {modalIsOpen ? <Modal onClick={closeModal}/> : null}
            {modalIsOpen ? <Backdrop onClick={closeModal}/> : null}
		</div>
    );
}

export default Todo