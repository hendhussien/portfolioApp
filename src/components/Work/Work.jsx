//import React from 'react'
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import "./Work.css";
export default function Work() {
  return (
    <>
      <section className="work-section mt-5 bg-white">
        <div className="container min-vh-100 work-caption">
          <h4>MY WORK</h4>
          <h2>RECENT WORK</h2>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-gd-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-gd"
                type="button"
                role="tab"
                aria-controls="pills-gd"
                aria-selected="true"
              >
                Graphic Design
              </button>
            </li>
            <li className="nav-item mx-3" role="presentation">
              <button
                className="nav-link"
                id="pills-app-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-app"
                type="button"
                role="tab"
                aria-controls="pills-app"
                aria-selected="false"
              >
                Apps
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-software-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-software"
                type="button"
                role="tab"
                aria-controls="pills-software"
                aria-selected="false"
              >
                Software
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-gd"
              role="tabpanel"
              aria-labelledby="pills-gd-tab"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img4} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img5} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img6} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img7} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary my-4 text-white">
                Show More
              </button>
            </div>
            <div
              className="tab-pane fade"
              id="pills-app"
              role="tabpanel"
              aria-labelledby="pills-app-tab"
            >
                <div className="row g-3">
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img4} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img5} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img6} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img7} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary my-4 text-white">
                Show More
              </button>
            </div>
            <div
              className="tab-pane fade"
              id="pills-software"
              role="tabpanel"
              aria-labelledby="pills-software-tab"
            >
                 <div className="row g-3">
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img4} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img5} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img6} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-captions-indside">
                  <div className="tab-inner m-2">
                    <img src={img7} alt="img" className="img-fluid " />
                    <div className="tab-inner-caption bg-primary  d-flex flex-column justify-content-around">
                      <div>
                      <h3 className=" ms-3">work 2</h3>
                      <p className=" ms-3 mb-5">Animation</p>
                      </div>
                      <div className="tab-inner-caption-icons text-dark d-flex mx-3">
                        <div className="tab-inner-caption-icon">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="tab-inner-caption-icon mx-2">
                          <i className="fa-regular fa-eye"><span className="ms-1">100</span></i>
                        </div>
                        <div className="tab-inner-caption-icon">
                          <i className="fa-regular fa-heart"><span className="ms-1">49</span></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary my-4 text-white">
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
