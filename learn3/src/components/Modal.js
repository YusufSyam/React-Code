import classes from './MeetUp.module.css'

function Modal(props){
    return(
        <div className={classes.modal}>
            <p>Are you sure?</p>
            <button className={classes.btn+' '+classes.btn_alt} onClick={props.onClick}>Cancel</button>
            <button className={classes.btn} onClick={props.onClick}>Yes</button>

        </div>
    )
}

export default Modal