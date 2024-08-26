import React from "react";

const sliderImages = [
    {
        url:"/banner.png"
    }];
const Logo = () => {
    return (<img src={sliderImages[0].url} width="650px" height="50px" />);    
};
 
export default Logo;