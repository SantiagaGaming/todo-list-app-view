import classes from'./BaseInput.module.css'
const BaseInput = ({onChange,inputValue})=>{

    const handleNameChange =(event) =>{
        onChange(event.target.value)
    }
    return(
        <input  className={classes.baseInput} onChange={handleNameChange} value={inputValue} />
    );
    }
    export default BaseInput;