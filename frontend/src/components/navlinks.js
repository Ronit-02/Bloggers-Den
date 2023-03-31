import React from 'react'
import '../styles/navbar.css'

import {NavLink} from 'react-router-dom'

export default function Navlinks(props) {
  return (
    <>
        <NavLink 
            to="/" 
            className={ ({isActive}) => (isActive ? "activeLink" : "")}
            onClick={() => props.setOpen(false)}
            >
            Home
        </NavLink>
        <NavLink 
            to="/about"
            className={ ({isActive}) => (isActive ? "activeLink" : "")}
            onClick={() => props.setOpen(false)}
            >
            About
        </NavLink>
        <NavLink 
            to="/contact"
            className={ ({isActive}) => (isActive ? "activeLink" : "")}
            onClick={() => props.setOpen(false)}
            >
            Contact
        </NavLink>
        <NavLink 
            to="/write"
            className={ ({isActive}) => (isActive ? "activeLink" : "")}
            onClick={() => props.setOpen(false)}
            >
            Write
        </NavLink>
        <NavLink 
            to="/news"
            className={ ({isActive}) => (isActive ? "activeLink" : "")}
            onClick={() => props.setOpen(false)}
            >
            News
        </NavLink>
    </>
  )
}