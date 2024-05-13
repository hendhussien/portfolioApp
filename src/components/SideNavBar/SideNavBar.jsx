//import React from 'react'
import { Link } from "react-router-dom";
import imgProfile from "../../assets/images/img1.jpg";
import "./SideNavBar.css";
export default function SideNavBar() {
  return (
    <section className="sideBar-section text-center ">
      <div className="profile ">
        <img
          src={imgProfile}
          alt="profile img"
          className="rounded-circle profile-img"
        />
        <h1 className="mt-4 mb-2">Jackson Ford</h1>
        <p>
          <span className="text-primary">UI/UX/Designer</span> in <br /> Philippines
        </p>
        <ul className="nav d-flex flex-column">
          <li className="nav-item">
            <Link to='home' className="nav-link active " >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to='about' className="nav-link" >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to='skills' className="nav-link">
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link to='experience' className="nav-link" >
              EXPERIENCE
            </Link>
          </li>
          <li className="nav-item">
            <Link to='work' className="nav-link">
              WORK
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
