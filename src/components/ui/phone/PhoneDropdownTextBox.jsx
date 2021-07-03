import {uid} from "uid"

import classes from "./PhoneDropdownTextBox.module.css";
import arrowIcon from "../../../res/icon-arrow-dark.svg";
function phoneDropdownTextBox({title,items,onClick,state}){
    return(
        <div onClick={onClick} className={classes.phoneDropdownTextBox_container}>
            <div className={classes.header_container}>
                <div className={classes.title}>{title}</div>
                <img className={state == true ? classes.rotate_arrow : ""} src={arrowIcon}/>
            </div>
            <div className={state == true ? classes.text_container : classes.display_none}>
                {items.map((item)=>{
                    return(
                        <div key={uid()}>{item}</div>
                    );
                })}
            </div>
        </div>
    );
}
export default phoneDropdownTextBox;