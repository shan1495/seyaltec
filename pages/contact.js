import { Fab } from "@material-ui/core";
import React from "react";
import { EmailRounded } from "@mui/icons-material";
import "../App.css"
const Contact = () => {
    return (
        <>
        <div>
            <section>
                <img src="/c1.png" style={{height:"490px", maxWidth:"200%", alignContent:"center", marginTop:"1px", width:"100%"}}>
        </img>
        
    </section>
        <Fab style={{position: "absolute", bottom: 60, right:0 }}>
            <EmailRounded  onClick={()=>window.scrollTo({top:document.querySelector("#contact").offsetTop,behavior: "smooth",})}/>
        </Fab>
        </div>
        <section id="contact">
            
        </section>
        </>
    );
};
 
export default Contact;