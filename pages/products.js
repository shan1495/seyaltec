import { useRef, useEffect, useState } from "react";
import Card from "../components/Card";
import "../style.css";

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
        img: "/def3.jpg",
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
        img: "/def6.jpg",
        title: 'Autmobile',
        author: 'SeyalTek',
       },
       {
        img: "/def7.jpg",
        title: 'Autmobile',
        author: 'SeyalTek',
       },

       
  ];
  


let SCROLL_SPEED = 6;

const CANVAS_WIDTH = window.innerWidth;
export default function Products() {
  console.log(data);
  const renderCards = data.map((el, index) => {
    return <Card key={index} cardName={el.title} url={el.img}/>;
  });

  return (
    <div>
      <div className="pr-flex" >{renderCards}</div>
    </div>
  );
}
