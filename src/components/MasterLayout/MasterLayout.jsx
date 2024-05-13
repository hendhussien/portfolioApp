//import React from 'react'
import './MasterLayout.css'
import { Outlet } from "react-router-dom";
//import Home from "../SideNavBar/SideNavBar";
import SideNavBar from "../SideNavBar/SideNavBar";

export default function MasterLayout() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2 sideBar ">
                <div className="sideContent d-flex justify-content-center">
                   <SideNavBar/>
                </div>
            </div>
            <div className="col-md-10">
                <div className="changeContent">
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
