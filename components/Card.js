import { useRef, useEffect, useState } from "react";
import "../style.css";
export default function Card({ cardName, delayProp, durationProp, topProp, url }) {
  return (
    <div className="bubble">
      <div className="card m-2 pt-2">
        <div className="py-1">
          <div className="fs-5 mt-2"><img src={url} style={{padding:"2px", width:"220px", height:"240px"}}></img></div>
        </div>
      </div>
    </div>
  );
}
