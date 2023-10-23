import classes from'./BaseButton.module.css'
const BaseButton =({children, ...props})=>{
    return (
        <button{...props} className={classes.myBtn}>
    {children}
        </button>
    );

};
export default BaseButton;