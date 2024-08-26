import React from "react";
import "../style.css";
import { Tooltip } from "@material-ui/core";
const Services = () => {
    return (
        <div>
            <section id="root">
            <img src="/abt.jpg" style={{height:"400px", alignContent:"center", marginTop:"1px", width:"100%"}} />
            </section>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div class="pamplet">
                    <h3 class="headline" style={{marginTop:"5px"}}>Production capabilities</h3>
                    <span class="line" />
                    <div style={{width:"100%", flexDirection:"row",}}>
                        <Tooltip title="We Provide Good engineering solutions...">
                            <div style={{display:"flex", flexDirection:"row", backgroundColor:"#125D98",padding:"1px", borderRadius:"4px"}}>
                                <img src="/t.png" style={{height:"20px", width:"20px"}}/> 
                                <span style={{color:"#F5A962", }}>Product Development</span>
                            </div>
                        </Tooltip>
                        <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}} />

                        <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", padding:"1px", borderRadius:"4px"}}>
                            <span style={{color:"#F5A962"}}>VA/VE, Cost Optimization</span>
                            <img src="/t.png" style={{height:"20px", width:"20px", marginLeft:"40%"}}/>
                        </div>
                        <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                        
                        <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", padding:"1px", borderRadius:"4px"}}>
                            <img src="/t.png" style={{height:"20px", width:"20px"}}/>
                            <span style={{color:"#F5A962"}}>Sustenance Engineering</span>
                        </div>
                        <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                        <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", borderRadius:"-4px" }}>
                            <span style={{color:"#F5A962"}}>Drawing conversions</span>
                            <img src="/t.png" style={{height:"20px", width:"20px", marginLeft:"50%"}}/>
                        </div>
                        <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                        <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px" }}>
                            <img src="/t.png" style={{height:"20px", width:"20px"}}/>
                            <span style={{color:"#F5A962"}}>Benchmarking </span>
                        </div>
                        <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    </div>
                </div>
                <div class="pamplet">
                    <h3 class="headline" style={{marginTop:"5px"}}>Engineering capabilities</h3>
                    <span class="line" />
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/g.png" style={{height:"20px", width:"20px"}}/> 
                        <span style={{color:"#F5A962", marginLeft:"5px"}}>Parts Manufacturing & Service</span>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <span style={{color:"#F5A962", marginLeft:"5px"}}>CAM (NC) Programming</span>
                        <img src="/g.png" style={{height:"20px", width:"20px", marginLeft:"40%"}}/>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                     
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/g.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{color:"#F5A962",marginLeft:"5px"}}>3D Printing & Scanning</span>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <span style={{color:"#F5A962", marginLeft:"5px"}}>Prototyping & Production</span>
                        <img src="/g.png" style={{height:"20px", width:"20px",  marginLeft:"37%"}}/>
                        
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/g.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{color:"#F5A962",marginLeft:"5px"}}>Production Engineering</span></div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                </div>
                <div class="pamplet">
                    <h3 class="headline" style={{marginTop:"5px"}}>Consulting</h3>
                    <span class="line" />
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/i.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{color:"#F5A962",marginLeft:"5px"}}>Talent Management</span></div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <span style={{color:"#F5A962", marginLeft:"5px"}}>Sourcing Strategy</span>
                        <img src="/i.png" style={{height:"20px", width:"20px",  marginLeft:"50%"}}/>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/i.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{color:"#F5A962",marginLeft:"5px"}}>LCP Sourcing</span></div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <span style={{color:"#F5A962", marginLeft:"5px"}}>Resource Empowerment</span>
                        <img src="/i.png" style={{height:"20px", width:"20px",  marginLeft:"37%"}}/>
                    </div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    <div style={{display:"flex", flexDirection:"row",backgroundColor:"#125D98", width:"100%", borderRadius:"4px", }}>
                        <img src="/i.png" style={{height:"20px", width:"20px"}}/>
                        <span style={{color:"#F5A962",marginLeft:"5px"}}>Staffing deployment</span></div>
                    <div style={{height:"2px", backgroundColor:"#ffff", margin:"1px"}}> </div>
                    


                </div>
            </div>
        </div>
    );
};
 
export default Services;