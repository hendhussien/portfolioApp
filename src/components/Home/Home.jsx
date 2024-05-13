//import React from 'react'
import img1 from "../../assets/images/img2.jpg";
import img2 from "../../assets/images/img3.jpg";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">

        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img src={img1} className="d-block w-100" alt="img" />

            <div className="carousel-caption position-absolute top-50 start-25">
              <div className="caption-inside p-3 ">
                <h1>
                  Hi! <br /> I am Jackson
                </h1>
                <p className="my-4">
                  100% html5 bootstrap templates Made <br />
                  By Colorlib.com
                </p>
                <button className="btn btn-lg btn-outline-dark">Download CV <i className="fa-solid fa-download"></i></button>
              </div>
            </div>

          </div>
          <div className="carousel-item position-relative">
            <img src={img2} className="d-block w-100" alt="img" />
            <div className="carousel-caption position-absolute top-50 start-25">
              <h1>
                I am <br /> a Designer
              </h1>
              <p>
                100% html5 bootstrap templates Made <br />
                By Colorlib.com
              </p>
              <button className="btn btn-lg btn-outline-dark">View Portfolio <i className="fa-solid fa-suitcase"></i></button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
