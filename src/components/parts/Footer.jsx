
import classes from "./Footer.module.css"
import logo from "../../res/logo.svg"
function Footer(){
    return(
        <div className={classes.Footer_container}>
            <div className={classes.grid_container}>
                <img src={logo} className={classes.logo}/>
                <div className={classes.text_container}>
                    <div className={classes.main}>Product</div>
                    <br />
                    <div className={classes.undermain}>Overview</div>
                    <br />
                    <div className={classes.undermain}>Pricing</div>
                    <br />
                    <div className={classes.undermain}>Marketplace</div>
                    <br />
                    <div className={classes.undermain}>Features</div>
                    <br />
                    <div className={classes.undermain}>Integrations</div>
                </div>
                <div className={classes.text_container}>
                    <div className={classes.main}>Company</div>
                    <br />
                    <div className={classes.undermain}>About</div>
                    <br />
                    <div className={classes.undermain}>Team</div>
                    <br />
                    <div className={classes.undermain}>Blog</div>
                    <br />
                    <div className={classes.undermain}>Careers</div>
                </div>
                <div className={classes.text_container}>
                    <div className={classes.main}>Connect</div>
                    <br />
                    <div className={classes.undermain}>Contact</div>
                    <br />
                    <div className={classes.undermain}>Newsletter</div>
                    <br />
                    <div className={classes.undermain}>LinkedIn</div>
                </div>
            </div>

        </div>
    );
}
export default Footer;



