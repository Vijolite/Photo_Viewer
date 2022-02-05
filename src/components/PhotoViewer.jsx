import React, { useState } from "react"; // import React (to provide access to JSX)
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.development";
import "./PhotoViewer.css";
import {getImageUrls} from "./GetImageUrls.jsx";


export function PhotoViewer() {    // declare and export new function called 'PhotoViewer' //"https://picsum.photos/200" - random pictures
  const src="https://picsum.photos/id/600/1600/900.jpg";

  const [currentUrl, setUrl]=useState (src);  

  const imageUrls = getImageUrls();

  function viewUrl(a) {
      //alert(a);    
      setUrl(a);
  }

  //onClick={function() {setUrl(props.src)}}></img></li>;
  function Pic(props) {
      return <li className="pic_list">
      <img class={`img_choosen_${currentUrl===props.src ? "yes":"no"}`}
      src ={props.src} alt ={props.src} width ="50" height="50" 
      onClick={function() {viewUrl(props.src)}}></img>
      </li>;
    }


    

  function PlacePictures() {
      return (
        <>
          <h1>All pictures:</h1>
          <ul className="pic_list">
            {imageUrls.map((im) =><Pic src={im}/>   ) }
          </ul>
        </>
      );
    }

  return (                
        <div>               
            <p className="App">Hello World!</p>           
            <img className="withFrame" src={currentUrl} alt="random image" width="200" height="200"></img> 
            <PlacePictures/>
        </div>
    );
}



