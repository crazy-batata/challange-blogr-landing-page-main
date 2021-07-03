import { useState } from "react";
import Dropdown from "./Dropdown";
import PhoneDropdown from "./phone/PhoneDropown";

import classes from "./Nav.module.css";
import logo from "../../res/logo.svg";
function Nav(){
    const [states,setState] = useState({
        Product:false,
        Company:false,
        Connect:false});
    
        function onClick(e){
            let stateObj = {...states};
            for(const[key,val] of Object.entries(stateObj)){
                if(key == e.target.innerText){
                    stateObj[e.target.innerText] = !stateObj[e.target.innerText];
                }else{
                    stateObj[key] = false;
                }
            }
        
            setState(stateObj); 
        }

    return(
        <div className={classes.Nav_container}>
            <img className={classes.logo} src={logo} />
            <div className={classes.pc_dropdown_container}>
                <Dropdown onClick={onClick} state={states["Product"]} setState={setState} title={"Product"} items={["Overview","Pricing","Marketplace","Features","Integrations"]}/>
                <Dropdown onClick={onClick} state={states["Company"]} setState={setState} title={"Company"} items={["About","Team","Blog","Careers"]}/>
                <Dropdown onClick={onClick} state={states["Connect"]} setState={setState} title={"Connect"} items={["Contact","Newsletter","LinkedIn"]}/>                  

            </div>
            <PhoneDropdown />
            <div className={classes.btn_container}>
                <button className={classes.btn1}>Login</button>
                <button className={classes.btn2}>Sign Up</button>
            </div>
        </div>
    );
}
export default Nav;
/*

*/