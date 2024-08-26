import { Copyright } from "@material-ui/icons";
import { width } from "@mui/system";
import React from "react";
import "../style.css"


const Footer =()=>{
    return (<div style={{ backgroundColor:"#1453", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"row", padding:"0px",}}>
            <div class="pamplet" style={{backgroundColor:"#1453",}}>
                <div class="headline">Reg Office</div>
                <span class="line" />
                <div  style={{display:"flex", flexDirection: "column"}}>
                    <div>SEYAL Technologies Pvt Ltd.</div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}} /> 
                    <div>123,Nanjappa Nagar,Sulur,</div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}} />
                    <div>Coimbatore </div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}} ></div>
                    <div>Tamilnadu - 641 402</div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}} />
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/><div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                </div>
            </div>
            <div class="pamplet" style={{backgroundColor:"#1453",}}>
                <div class="headline">Factory</div>
                <span className="line"/>
            
                <div  style={{display:"flex", flexDirection: "column"}}>
                    <div>
                        S.F# 330/2 C3, Site# 4
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div>Cheran Industrial Estate,</div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div>Sharp Nagar, Kalapatti,</div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div>Coimbatore</div><div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div> 
                    <div>Tamil Nadu - 641 048</div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                    
                </div>
        
            </div>
            <div class="pamplet" style={{backgroundColor:"#1453",}}>
                <div class="headline">Contact Us</div>
                <span className="line"/>
                <div  style={{display:"flex", flexDirection: "column"}}>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <img src="/phone.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{paddingLeft:"3px"}}>+91 9790615959</span>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <img src="/tp1.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{paddingLeft:"3px"}}>0422 2596979</span>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <img src="/at.png" style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <span style={{paddingLeft:"3px"}}>info@seyaltek.com</span>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px", width:"100%"}}> </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/><div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/><div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/><div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                        <div style={{height:"20px", width:"20px", borderRadius:"2px", marginTop:"1.5px"}}/>
                    </div>
                    
                </div>
            </div>
            <div class="pamplet" style={{backgroundColor:"#1453",}}>
                <div>
                <div class="headline">Locate Us</div>
                <span className="line"/>
                    <img src="maps.png" style={{height:"auto", width:"auto"}} onClick={()=>window.open('https://maps.app.goo.gl/YSRpeTsTQ1fXno4a8')}/>
                </div>
        
            </div>
        </div>
        <div style={{alignContent:"center", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"row"}}>
            <img src="/iso.png" style={{width:"60px", height:"60px", padding:"5px"} }/>
            <img src="/dqs.png" style={{width:"60px", height:"60px",padding:"5px"} }/>
            <img src="/zed.jpg" style={{width:"60px", height:"60px", padding:"5px"} }/>
            <span> </span>
            <img src="/ff.png" style={{width:"60px", height:"60px", padding:"5px"} }/>
            <img src="/ins.png" style={{width:"60px", height:"60px", padding:"5px",} }/>
            <img src="/in.png" style={{width:"60px", height:"60px", padding:"5px", } }/>
            <img src="/wa.png" style={{width:"60px", height:"60px", padding:"5px", } }/>
            <img src="/x.png" style={{width:"60px", height:"60px", padding:"5px", } }/>
            <img src="/mail.png" style={{width:"60px", height:"60px", padding:"5px", } } />
            <p>&copy; Seyal Technologies 2024</p></div>
    </div>)
}




export default Footer;