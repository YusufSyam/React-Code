import classes from './MeetUp.module.css'

function Backdrop(props){
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

export default Backdrop