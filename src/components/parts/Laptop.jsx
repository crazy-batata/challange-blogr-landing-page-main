

import classes from "./Laptop.module.css";
import pc_laptopImg from "../../res/illustration-laptop-desktop.svg";
import phone_laptopImg from "../../res/illustration-laptop-mobile.svg";
function Laptop(){
    return(
        <div className={classes.Laptop_container}>


            <div className={classes.grid_container}>
                <img className={classes.pc_img} src={pc_laptopImg}/>
                <img className={classes.phone_img} src={phone_laptopImg}/>
                <div className={classes.text_container}>
                    <div className={classes.text1}>
                        <h1 className={classes.main1}>Free, open, simple</h1>
                        <div className={classes.undermain1}>
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </div>
                    </div>
                    <div className={classes.text2}>
                        <h1 className={classes.main2}>Powerful tooling</h1>
                        <div className={classes.undermain2}>
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                        </div>
                    </div>
                </div>             
            </div>

 
        </div>
    );
}
export default Laptop;