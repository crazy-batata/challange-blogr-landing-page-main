import { useState } from "react";
import PhoneDropdownTextBox from "./PhoneDropdownTextBox";

import classes from "./PhoneDropdown.module.css";
import openIcon from "../../../res/icon-hamburger.svg"
import closeIcon from "../../../res/icon-close.svg"
function PhoneDropdown(){
    const [dropdownState,setDropdownState] = useState(false);
    const [select,setSelect] = useState({
        Product:false,
        Company:false,
        Connect:false,
    });
    function onClick(e){
        let selectObj = {...select};
        selectObj[e.target.innerText] = !selectObj[e.target.innerText];
        setSelect(selectObj); 
    }

    return(
        <div className={classes.Dropdown_container}>
            <img onClick={()=>{setDropdownState(!dropdownState);}} src={dropdownState == false ? openIcon:closeIcon} />
            <div className={dropdownState == true ? classes.Dropdown_box:classes.display_none}>
                <div className={classes.dropdown}>
                    <PhoneDropdownTextBox onClick={onClick} state={select["Product"]} title={"Product"} items={["Overview","Pricing","Marketplace","Features","Integrations"]}/>
                    <PhoneDropdownTextBox onClick={onClick} state={select["Company"]} title={"Company"} items={["About","Team","Blog","Careers"]}/>
                    <PhoneDropdownTextBox onClick={onClick} state={select["Connect"]}  title={"Connect"} items={["Contact","Newsletter","LinkedIn"]}/>
                </div>
                <hr />
                <div className={classes.btn_container}>
                    <button className={classes.btn1}>Login</button>
                    <button className={classes.btn2}>Sign in</button>
                </div>
            </div>
           
        </div>
    );
}
export default PhoneDropdown;

