//import React from 'react'
import "./About.css";
export default function About() {
  return (
    <>
      <section className="bg-white about-section mt-5">
        <div className="container about-caption min-vh-100 ">
          <h4>ABOUT US</h4>
          <h2>WHO AM I?</h2>
          <p>
            <span className="fw-bold">Hi Im Jackson Ford</span> On her way she
            met a copy. The copy warned the Little Blind Text, that where it
            came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word (and) and
            the Little Blind Text should turn around and return to its own, safe
            country.
          </p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <div className="cards">
            <div className="row ">
              <div className="col-md-3">
                <div className="about-card ">
                  <div className="card-inner me-4 p-3">
                    <i className="fa-regular fa-lightbulb mb-3 fa-2x "></i>
                    <h3>Graphic Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-card">
                  <div className="card-inner me-4 p-3 brd-red">
                    <i className="fa-solid fa-earth-africa mb-3 fa-2x "></i>
                    <h3>Web Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-card">
                  <div className="card-inner me-4 p-3 brd-yellow">
                    <i className="fa-solid fa-database mb-3 fa-2x "></i>
                    <h3>Software</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-card">
                  <div className="card-inner me-4 p-3 brd-purple">
                    <i className="fa-solid fa-mobile-screen-button mb-3 fa-2x "></i>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
