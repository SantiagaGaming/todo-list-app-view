import classes from'./BaseButton.module.css'
const BaseButton =({children, ...props})=>{
    return (
        <button{...props} className={classes.baseBtn}>
    {children}
        </button>
    );

};
export default BaseButton;