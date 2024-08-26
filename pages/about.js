import React,{useState} from "react";
import '../App.css';
import '../style.css';
import Footer from "./foot";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import { Divider } from "@material-ui/core";

const About = () => {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const [isExplore, setExplore] = useState(false);

    const buttonStyle = {
        backgroundColor: hover ? "green" : "blue",
        fontSize: "16px",
        cursor: "pointer",
      };
    
    const itemData = [
        {
          img: "/def1.jpg",
          title: 'Automobile',
          author: 'SeyalTek',
        },
        {
         img: "/def2.jpg",
         title: 'Aerospace',
         author: 'SeyalTek',
        },
        {
            img: "/def4.jpg",
            title: 'Aerospace',
            author: 'SeyalTek',
           },
           {
            img: "/def5.jpg",
            title: 'Aerospace',
            author: 'SeyalTek',
           },
           {
            img: "/def6.jpg",
            title: 'Aerospace',
            author: 'SeyalTek',
           },
           
      ];
      
    
    return (
        <div>
        <section id="root">
    
            <img src="/about.jpg" style={{height:"490px", alignContent:"center", marginTop:"1px", width:"100%"}} />
        </section>
        <div>
            <h3 class="headline">Welcome</h3>
                <span class="line" style={{marginBottom:0}}></span>
            </div>
        <section id="welcome">
   
            <br /><br />
            <br />
            <div>
                <span class="text-white">
                    <span class="text-white">SE
                        <span class="b-clr">Y</span>
                    AL </span> 
                    TECHNOLOGIES,</span>
                     is an
                        Engineering solutions
                        company specializes in efficient and cost effective results for Engineering
                        Industries. The company was established during 2012 (Known as Flair Technologies) at Coimbatore,
                        the
                        blooming industrial hub
                        of Southern India.
                        <br/>
                        <br/>
                        Started as a business consulting firm, <span class="text-white">SE<span class="b-clr">Y</span>AL</span>
                        has swiftly and organically expanded into a multi-faceted technological solution
                        provider. <span class="text-white"><span class="text-white">SE<span class="b-clr">Y</span>AL</span></span> team is
                        capable
                        of
                        rendering a
                        variety of services to the customers hailing from multiple backgrounds and
                        portfolio. Our strong technology expertise combined with speed and agility enables us to
                        consistently exceed
                        client expectations
                        and meet their business objectives.<br/>
                        <br/>Today, <span class="text-white"><span class="text-white">SE<span class="b-clr">Y</span>AL</span></span> is a
                        trusted
                        solution
                        provider for
                        End to End engineering solutions such as concepts to production, print to
                        part solutions, production to sourcing, manpower hiring to training, and much more. We also
                        provide
                        customized solutions to suit
                        our customer's changing needs.
            </div>                
                        <Fab variant="extended" style={{backgroundColor:"#93dede", position: "fixed", bottom: 60, right:0, color:"#293a80", }} onClick={
                                ()=>{
                                        if(isExplore){
                                            window.scrollTo({top:document.querySelector("#root").offsetTop,behavior: "smooth",});
                                        }else{
                                            window.scrollTo({top:document.querySelector("#welcome").offsetTop,behavior: "smooth",});
                                        }
                                        setExplore(!isExplore);

                                    }} onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                            {/* <NavigationIcon sx={{ mr: 1, }} /> */}
                            
                            {isExplore? "Top": "Explore"}
                            {isExplore ?<NavigationIcon sx={{ mr: 1, }} />:<ArrowForwardIos sx={{mr:1}}/> }
                        </Fab>
                    </section>
       
                  <section id="vision">
                    <Divider />
                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems:"center", alignContent:"space-between"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                        <div class="vision-card">
                        <div class="vision-top">
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center", alignContent:"space-between", justifyContent:"space-around"}}>
                                
                                <h3 style={{color:"#F5A962", fontWeight:"bolder", fontSize: "25px"}}>VISION</h3><br/>
                                
                                <img src="eye.png" style={{height:"40px", width:"50px",  paddingLeft: "15px"}}/>
                            </div>
                        </div>
                        
                        <p>WE WILL PROVIDE OUTSTANDING SOLUTIONS WITH PREMIUM VALUE TO OUR CUSTOMERS THROUGH CUTTING-EDGE TECHNOLOGY. WE WOULD ACHIEVE THIS BY RESPONSIVE LISTENING, EXECUTION, AND COST BY OUR BEST TALENTED TEAM</p>

                        </div>
                        
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"space-evenly", alignItems:"center", alignContent:"space-around"}}>
                        <div class="vision-card">
                        <div class="vision-top">
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center", alignContent:"space-between", justifyContent:"space-around"}}>
                                <h3 style={{color:"#F5A962", paddingLeft:"5px", fontWeight:"bolder", fontSize: "25px"}}>MISSION</h3><br/>
                                <img src="target.png" style={{height:"40px", width:"50px",  paddingLeft: "15px"}}/>
                            </div>
                        </div>
                        
                        <p>TO BECOME A VERSATILE TECHNOLOGICAL SOLUTION PROVIDER, CAPABLE OF RENDERING A VARIETY OF SERVICES TO OUR CUSTOMERS HAILING FROM DIVERSE BACKGROUNDS, DEMOGRAPHICS, AND PORTFOLIOS.</p>

                        </div>
                        
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                        <div class="vision-card">
                        <div class="vision-top">
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center", alignContent:"space-between", justifyContent:"space-around"}}>
                            
                            <h3 style={{color:"#F5A962", fontWeight:"bolder", fontSize: "25px"}}>CORE VALUES</h3><br/>
                            <img src="man.png" style={{height:"40px", width:"50px",  paddingRight:"15px"}}/>
                            </div>
                        </div>
                        
                        <p>WE CONDUCT OUR BUSINESS ACCORDING TO THE HIGHEST STANDARDS OF ETHICS, HONESTY, AND FAIRNESS. 
WE MAINTAIN THE INTEGRITY AND CONCERN FOR CUSTOMERS IN OUR PRODUCTS, SALES, AND SERVICES.
</p>

                        </div>
                        
                    </div>
                    </div>
                </div>
                </section>
        
        </div>
    );
};
 
export default About;
