//import React from 'react'
import "./Skills.css";
export default function Skills() {
  return (
    <>
      <section className="skills-section mt-5 bg-white">
        <div className="container skills-caption min-vh-100">
          <h4>MY SPECIALTY</h4>
          <h2>MY SKILLS</h2>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <div className="skills-bars m-auto">
            <div className="row m-auto">
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner pe-4">
                  <p className="d-flex justify-content-between">Photoshop <span className="text-primary fw-semibold ">75%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-75"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner">
                  <p className="d-flex justify-content-between">JQuery <span className="text-danger fw-semibold">60%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-danger w-60"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner pe-4">
                  <p className="d-flex justify-content-between">HTML5 <span className="text-warning fw-semibold">80%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-warning w-80"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner">
                  <p className="d-flex justify-content-between">CSS3 <span className="text-purple fw-semibold">90%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-purple w-90"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner pe-4">
                  <p className="d-flex justify-content-between">WordPress <span className="text-success fw-semibold">70%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-70 bg-success"></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="skill">
                  <div className="skills-inner">
                  <p className="d-flex justify-content-between">SEO <span className="text-darkBlue fw-semibold">80%</span></p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-darkBlue w-80"></div>
                  </div>
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
