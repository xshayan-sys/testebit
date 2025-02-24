import React from 'react'
import "./style.css"

export default function Secton1Card() {
  return (
    <div className="cards">
        <img id='cake' src="/assets/menu1.jpg" alt="cake" />
        <div className="main-card">
            <p><svg id='svg1' data-name="feather-icon/trending-up" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)"></rect>
                <path d="M.244,11.423a.834.834,0,0,1,0-1.178L6.494,3.994a.834.834,0,0,1,1.178,0L11.25,7.571l5.9-5.9H14.167a.833.833,0,1,1,0-1.667h5A.833.833,0,0,1,20,.833v5a.834.834,0,0,1-1.667,0V2.845L11.839,9.339a.834.834,0,0,1-1.179,0L7.083,5.761l-5.66,5.661a.834.834,0,0,1-1.179,0Z" transform="translate(0 4.167)" fill="#ff642f"></path>
              </svg> <span id='span-p1'>85% would make this again</span></p>
              <h1>Mighty Super Cheesecake</h1>
              <p id='p'>Look no further for a creamy and ultra smooth classic cheesecake  recipe! no one can deny its simple decadence.</p>
              <button id='btn1'><svg id='span2' xmlns="http://www.w3.org/2000/svg" width="13.333" height="13.333" viewBox="0 0 13.333 13.333">
                <path d="M6.077,13.089a.833.833,0,0,1,0-1.178L10.488,7.5H.833a.833.833,0,0,1,0-1.667h9.655L6.077,1.423A.834.834,0,0,1,7.256.244l5.829,5.83a.833.833,0,0,1,0,1.186L7.256,13.089a.834.834,0,0,1-1.179,0Z" fill="#ff642f"></path>
              </svg></button>
        </div>
    </div>
  )
}
