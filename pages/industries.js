import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import '../App.css';
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { ArrowUpward } from "@material-ui/icons";
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import ImageSliderAuto from "../components/ImageSlider";
import MovingComponent from "react-moving-text";
import Ticker from "react-ticker";
import Products from "./products";
import { Divider } from "@material-ui/core";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import  { motion, Variants } from "framer-motion";
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../style.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const data = [{
  img: "/med1.jpg",
  title: 'Healthcare',
  author: 'SeyalTek',
 },
 {
  img: "/med2.jpg",
  title: 'Healthcare',
  author: 'SeyalTek',
 },
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

     {
      img: "/prd1.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },

     {
      img: "/prd2.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },

     {
      img: "/prd3.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },
     {
      img: "/prd4.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },

     {
      img: "/prd5.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },

     {
      img: "/prd6.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },
     {
      img: "/prd7.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },
     {
      img: "/prd8.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },
     {
      img: "/prd9.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },
     {
      img: "/prd10.jpg",
      title: 'Autmobile',
      author: 'SeyalTek',
     },

     
];

const sliderImages = [
  {
    url:"/ac.png",
    name:"AEROSPACE"
},  
  {
        url:"/am1.jpg",
        name:"AUTOMOTIVE"
    },
    
    {
        url:"/mec.jpg",
        name:"ENGINEERING SERVICES"
    },
    {
        url:"/m1.png",
        name:"HEALTHCARE"
    },
    {
        url:"/tag.png",
        name:"ITeS SERVICES"
    }
];

const set2 = [
  {
    url:"/flight.jpg",
    name:"AEROSPACE"
  },  
  {
        url:"/newcar.jpg",
        name:"AUTOMOTIVE"
    },
    
    {
        url:"/gear.jpg",
        name:"ENGINEERING SERVICES"
    },
    {
        url:"/health.jpg",
        name:"HEALTHCARE"
    },
    {
        url:"/software.jpg",
        name:"ITeS SERVICES"
    }
];



  
const Industries = () => {

const [x, setX] = useState(0);
const [interval, setInterval] = useState(0);
const timeoutRef = useRef(null);

const [hover, setHover] = useState(false);
const [activeImageNum, setCurrent] = useState(0);
const [isOpen, setIsOpen] = useState(false);
const [selectedInd, setSelectedInd] = useState("");
const length = set2.length;
const delay = 10000;
const [isExplore, setExplore] = useState(false);

/*
Code for animation
*/
const ref =useRef(null);
const [containerWidth, setWidth] = useState(100 + "%");
const [animationState, setPlay] = useState("paused");

/* side animation */
const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

const headers= {
    position: "relative",
    textAlign: "center",
    paddingTop: "25px"
  }
  const headerimg ={
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
      setCurrent((activeImageNum) =>
      activeImageNum === set2.length - 1 ? 0 : activeImageNum + 1
        ),
      delay
    );
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
      // setPlay("paused");
    }
    return () => {
      resetTimeout();
    };

    

  }, [activeImageNum]);


const nextSlide = () => {
    
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1); 
};
const prevSlide = () => {
   
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);

};
if (!Array.isArray(set2) || set2.length <= 0) {
    return null;
};

function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const buttonStyle = {
    backgroundColor: hover ? "green" : "blue",
    fontSize: "16px",
    cursor: "pointer",
  };
  const renderCards = data.map((el, index) => {
    return <swiper-slide lazy="true"><img key={index} src={el.img} loading="lazy" alt="/t.png" 
    style={{height:"250px", width:"250px", borderRadius:"10px"}} /></swiper-slide>
    //return ;
  });
    
function toggle() {
    setIsOpen((isOpen) => !isOpen);
}

        return (
            <>
           <div id="root">
              <h2>
                 {" "}
                
              </h2>
              
              <section className = "image-slider">
                 <div class = "left">
                    <ArrowBackIosIcon onClick = {prevSlide} />
                 </div>
                 <div class="right"> 
                    <ArrowForwardIosIcon onClick = {nextSlide} />
                 </div>
                 
                 {set2.map((currentSlide, ind) => {
                    return (
                        <>
                       
                       <div
                          className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                          key={ind}
                           id="slide">

                          {ind === activeImageNum && <img src={currentSlide.url} className="image" />}

                          {/* {isOpen && <section id="about" onClick={() => window.location.replace("/#indust")}>
                            This is about section about {currentSlide.name} 
                          </section>} */}
                          
                          <div class="d-flex" ref={ref} style={{position: "absolute",
                             top: "45%",
                                left: "10%",
                                color: "#F5A962", width: `${containerWidth}`,
                                  animationPlayState: animationState, fontSize: "20px", fontWeight: "bolder"}}>
              
                                {currentSlide.name}                                
                         </div>

                         <div class="d-flex" ref={ref} style={{position: "absolute",
                             top: "55%",
                                left: "10%",
                                color: "#F5A962", width: `${containerWidth}`,
                                  animationPlayState: animationState, fontSize: "10px",}}>
                                We serve the global markets by the best in precision engineering ...! We deliver they way you want and when you wanted it exactly.                                  
                         </div>
                         <div class="d-flex" ref={ref} style={{position: "absolute",
                             top: "50%",
                                left: "10%",
                                color: "#F5A962", width: `${containerWidth}`,
                                  animationPlayState: animationState, fontSize: "17px",fontWeight: "bolder"}}>                      
                                Seyal Technologies
                         </div>                         
                       </div>
                       </>

                    );
                 })}
              </section>
              <br />
              <div>
              <section id="wc">
                <h3 class="headline">Welcome</h3>
                <br/>
                <span class="line" style={{marginBottom:1}}></span>
                <p>
                Founded by industry veterans, more than two decades of expertise in Mechanical System engineering solutions across global clientele. Our passion for Engineering and Manufacturing is the key differentiator of SEYAL Technologies. Excellence in everything, we do is the philosophy on which we have built our company.
                Complete Engineering solutions with design, manufacturing, and process engineering capabilities powered by cutting edge systems, Industry best types of machinery, proven process engineering capabilities, and excellent system knowledge.
                More than two decades of seasoned experience in industrial engineering, machine design, procurement, vendor development, TQC, sourcing strategies, cost reduction, and design optimization has given the edge to our team to serve a variety of industries, enabling us to tackle the challenges and deliver the optimized solution to our prestigious clients.
                
                </p>
                </section>

                  <div >
                      <section id="products" >
                      <h3 class="headline">Products</h3>
                      <br/>
                          <span class="line" style={{marginBottom:1}}></span>
                          <br/>
                          <div style={{backgroundColor:"#1453"}}>
                            {/* <swiper-container slides-per-view="3" space-between="-480" scrollbar-clickable="true" mousewheel-invert="true" style={{"--swiper-navigation-color": "#F5A962", 
        "--swiper-pagination-color": "#F5A962", backgroundColor:"#1453"}} pagination-clickable="true" 
    navigation="true"  grab-cursor="true" >

                              
                              {renderCards}
                            </swiper-container> */}
                            
                            <Swiper spaceBetween={-1000} centeredSlides={true}
        autoplay={{   
          delay: 2500,   
          disableOnInteraction: false,
        }}        pagination={{
          clickable: true,
        }}      navigation={true}     modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft} >
        
        <SwiperSlide ><img src="/med1.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/med2.jpg" style={{height:"240px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd1.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd2.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd3.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd4.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd5.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd6.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd7.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd8.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd9.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd10.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd11.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd12.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <SwiperSlide style={{backgroundColor:"#1453"}}><img src="/prd13.jpg" style={{height:"250px", width:"250px", borderRadius:"10px"}}/></SwiperSlide>
      <span className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </span>
      </Swiper>
                          </div>
                          
                          </section>      
                      <br/>
                  </div>
                  <Divider />
                  <Fab variant="extended" style={{backgroundColor:"#93dede", position: "fixed", bottom: 60, right:0, color:"#293a80", }} onClick={
                        ()=>{
                                if(isExplore){
                                    window.scrollTo({top:document.querySelector("#root").offsetTop,behavior: "smooth",});
                                }else{
                                    window.scrollTo({top:document.querySelector("#wc").offsetTop,behavior: "smooth",});
                                }
                                setExplore(!isExplore);  }} onMouseEnter={handleMouseEnter}    onMouseLeave={handleMouseLeave}>
                    {/* <NavigationIcon sx={{ mr: 1, }} /> */}
                    
                    {isExplore? "Top": "Explore"}
                    {isExplore ?<NavigationIcon sx={{ mr: 1, }} />:<ArrowForwardIos sx={{mr:1}}/> }
                  </Fab>
              
              </div>
              <br />
              
           </div>
           </>
    );
};
 
export default Industries;