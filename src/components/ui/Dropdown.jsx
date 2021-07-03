import { uid } from "uid";


import classes from "./Dropdown.module.css";
import arrowIcon from "../../res/icon-arrow-light.svg";
function Dropdown({title,items,onClick,state}){
    return(
        <div onClick={onClick} className={classes.Dropdown_container}>
            
            <div className={classes.title_container}>
                <div className={classes.title}>{title}</div>
                <img src={arrowIcon} />
            </div>

            <div className={state==true ? classes.item_container:classes.display_none}>
                {items.map(item=>{
                    return(
                        <div key={uid()}className={classes.item}>{item}</div>                       
                    );
                })}
            </div>
        </div>
    );
}
export default  Dropdown;