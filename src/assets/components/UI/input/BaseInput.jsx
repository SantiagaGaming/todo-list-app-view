import classes from'./BaseInput.module.css'
const BaseInput = ({onChange })=>{
    const handleNameChange =(event) =>{
        onChange(event.target.value)
    }
    return(
        <input  className={classes.baseInput} onChange={handleNameChange} />
    );
    }
    export default BaseInput;