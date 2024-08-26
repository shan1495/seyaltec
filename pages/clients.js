import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import "../App.css";
import "../flip.css"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 1000,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 */
 const itemData = [
    {
      img: "/client1.jpg",
      title: '',
      author: 'author',
    },
    {
        img: "/client2.png",
        title: '',
        author: 'author',
      },
      {
        img: "/client3.jpg",
        title: '',
        author: 'author',
      },
      
  ];

const imageData2 = [{
    img: "/client4.jpg",
    title: '',
    author: 'author',
  },
  {
    img: "/client5.png",
    title: '',
    author: 'author',
  },
  {
    img: "/client6.jpg",
    title: '',
    author: 'author',
  },];
 
export default function Contact() {
  const classes = useStyles();
  const [isRotated, setIsRotated] = React.useState(false);
  const onRotate = () => setIsRotated((rotated) => !rotated);

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems:"center", alignContent:"space-between"}}>
                    
                            
                            <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >                  
                              <div class='front'>
                                  <img src="rr.png" style={{height:"200px", width:"200px", }} />
                              </div>
                              <div class='back'>
                                  <img src="rr.png" style={{height:"200px", width:"200px", }} />
                              </div>
                            </div>
        
                    
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"space-evenly", alignItems:"center", alignContent:"space-around"}}>
                        <div>
                        <div>
                            <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate}>
                            <div class="front">
                            <img src="client2.png" style={{height:"200px", width:"225px",}}/>
                            </div> 
                            <div class="back">
                            <img src="client2.png" style={{height:"200px", width:"225px",}}/>
                            </div>          
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                     
                        <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >
                            <div class="front">
                             
                              <img src="ge1.png" style={{height:"200px", width:"200px",}}/>
                            </div>
                            <div class="back">
                             
                              <img src="ge1.png" style={{height:"200px", width:"200px",}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                     
                     <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >
                         <div class="front">
                          
                           <img src="cms.png" style={{height:"90px", width:"200px",}}/>
                         </div>
                         <div class="back">
                          
                           <img src="cms.png" style={{height:"90px", width:"200px",}}/>
                         </div>
                     </div>
                     
                 </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems:"center", alignContent:"space-between"}}>
                    
                            
                            <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >                  
                              <div class='front'>
                                  <img src="client4.jpg" style={{height:"200px", width:"200px", }} />
                              </div>
                              <div class='back'>
                                  <img src="client4.jpg" style={{height:"200px", width:"200px", }} />
                              </div>
                            </div>
        
                    
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"space-evenly", alignItems:"center", alignContent:"space-around"}}>
                        <div>
                        <div>
                            <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate}>
                            <div class="front">
                            <img src="client5.png" style={{height:"200px", width:"225px",}}/>
                            </div> 
                            <div class="back">
                            <img src="client5.png" style={{height:"200px", width:"225px",}}/>
                            </div>          
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                     
                        <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >
                            <div class="front">
                             
                              <img src="ust.jpg" style={{height:"200px", width:"200px",}}/>
                            </div>
                            <div class="back">
                             
                              <img src="ust.jpg" style={{height:"200px", width:"200px",}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems:"center", alignContent:"space-between"}}>
                     
                     <div className={`card ${isRotated ? 'rotated' : ''}`} onMouseEnter={onRotate} onMouseLeave={onRotate} >
                         <div class="front">
                          
                           <img src="client7.png" style={{height:"90px", width:"200px",}}/>
                         </div>
                         <div class="back">
                          
                           <img src="client7.png" style={{height:"90px", width:"200px",}}/>
                         </div>
                     </div>
                     
                 </div>
                    </div>
                </div>

    </div>
  );
}
