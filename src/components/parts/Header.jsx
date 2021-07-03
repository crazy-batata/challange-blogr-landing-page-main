import Nav from "../ui/Nav";

import classes from "./Header.module.css";
function Header(){
    return(
        <div className={classes.Header_container}>
            <div className={classes.background_container}></div>
            <Nav />
            
            <div className={classes.grid_container}>
                <div className={classes.text_container}>
                    <div className={classes.text1}>A Modern Publishing Platform</div>
                    <div className={classes.text2}>Grow your audience and build your online brand</div>
                </div>
                <div className={classes.btn_container}>
                    <button className={classes.btn1}>Start for Free</button>
                    <button className={classes.btn2}>Learn More</button>
                </div>
            </div>

        </div>
    );
}
export default Header;