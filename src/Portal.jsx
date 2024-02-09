import { Topbar } from "./Topbar";
import { Outlet } from "react-router-dom";
import React from 'react'

export function Portal() {
return(
    <div className="Portal">
    <Topbar/>
    <Outlet/>
    </div>
)
}