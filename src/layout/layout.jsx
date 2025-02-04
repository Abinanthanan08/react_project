import { Outlet}from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

import React from 'react'

function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        {/* <Footer/> */}

    </div>
  )
}

export default Layout