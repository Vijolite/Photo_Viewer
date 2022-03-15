import React, { useState } from "react"; // import React (to provide access to JSX)
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.development";
import "./PhotoViewer.css";
import {getImageUrls} from "./GetImageUrls.jsx";


export function PhotoViewer() {    // declare and export new function called 'PhotoViewer' //"https://picsum.photos/200" - random pictures
  const src="https://picsum.photos/id/600/1600/900.jpg";
  const src2="https://picsum.photos/id/600/1600/901.jpg";

  const [currentUrl, setUrl]=useState (src);  
  const [currentUrl2, setUrl2]=useState (src2);  

  const imageUrls = getImageUrls();

  function viewUrl(a,f) {
      //alert(a);    
      f(a);
  }

  //onClick={function() {setUrl(props.src)}}></img></li>;
  function Pic(props) {
      return <><li className="pic_list">
      <img class={`img_choosen_left_${currentUrl===props.src ? "yes":"no"}`}
      src ={props.src} alt ={props.src} width ="50" height="50" 
      onClick={function() {viewUrl(props.src,setUrl)}}></img>
      <img class={`img_choosen_right_${currentUrl2===props.src2 ? "yes":"no"}`}
      src ={props.src2} alt ={props.src2} width ="50" height="50" 
      onClick={function() {viewUrl(props.src2,setUrl2)}}></img>
      </li></>
;
    }

  function PlacePictures() {
      return (
        <>
          <h1>All pictures:</h1>
          <ul className="pic_list">
            {imageUrls.map((im) =><Pic src={im} src2={im}/>   ) }
          </ul>
        </>
      );
    }

  return (                
        <div>               
            <p className="App">You can choose both: left and right pictures separately</p>           
            <img className="withFrameL" src={currentUrl} alt="random image" width="200" height="200"></img> 
            <img className="withFrameR" src={currentUrl2} alt="random image" width="200" height="200"></img> 
            <PlacePictures/>
        </div>
    );
}



