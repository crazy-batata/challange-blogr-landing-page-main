
import pc_illstratinoImg from "../../res/illustration-editor-desktop.svg"
import phone_illstratinoImg from "../../res/illustration-editor-mobile.svg"
import classes from "./Illustration.module.css";
function Illustration(){
    return(
        <div className={classes.Illustration_container}>
            <h1 className={classes.header}> Designed for the future</h1> 
            <div className={classes.grid_container}>
                <div className={classes.text_container}>

                    <div className={classes.text1}>
                        <div className={classes.main1}>Introducing an extensible editor</div>
                        <div className={classes.undermain1}>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </div>
                    </div>
                    <div className={classes.text2}>
                        <div className={classes.main2}>Robust content management</div>
                        <div className={classes.undermain2}>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </div>
                    </div>
                    
                </div>
                <div className={classes.img_container}>
                    <img className={classes.pc_img} src={pc_illstratinoImg}/>
                    <img className={classes.phone_img} src={phone_illstratinoImg}/>
                </div>
            </div>
        </div>
  );
}
export default Illustration;
/*
                    <div className={classes.part_1}>
                        <h3></h3>
                        <div>  

                        </div>
                    </div>
                    <div className={classes.part_2}>
                        <h3></h3>
                        <div>

                        </div>
*/