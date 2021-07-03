import classes from "./Phones.module.css";
import phonesImg from "../../res/illustration-phones.svg"
import circleImg from "../../res/bg-pattern-circles.svg"
function Phones(){
    return(
        <div className={classes.Phones_container}>
            <div className={classes.background_container}></div>
            <div className={classes.grid_container}>
                <div className={classes.img_container}>
                    <img src={phonesImg}/>
                </div>
                <div className={classes.text_container}>
                    <h1 className={classes.main}>State of the Art Infrastructure</h1>
                    <div className={classes.undermain}>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </div>
                </div>
      
            </div>

        </div>
    );
}
export default Phones;