import '../styles/navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Navlinks from './navlinks'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const [hamburger, setHamburger] = useState(() => false);

    // const {username} = JSON.parse(localStorage.getItem("user"))
    // console.log(username)
    const username = "ronuit"

    const {dispatch} = useContext(Context)
    const handleLogout =() =>{
        dispatch({ type: "LOGOUT"} )
    }   

    useEffect(()=>{
        const navbar = document.querySelector(".navbar")
        function stickynavbar() {
            if (window.scrollY >= 200) {    
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');    
            }
        }
        window.addEventListener('scroll', stickynavbar);

        // function closeOpenMenus() {
        //     setDropDown(false)
        // }
        // document.addEventListener('mousedown',closeOpenMenus)
    })

    if(hamburger) {
        document.body.style.overflow = "hidden"
    }
    else{
        document.body.style.overflow = ""
    }


    return (
        <div>
            <nav className="navbar">

                <div className='navbar__left'>
                    <Link to="/" > Bloggers Den </Link>
                </div>

                <div className='navbar__center'>
                    <Navlinks />
                </div>

                <div className='navbar__right'>
                    <div className='dropdown'>
                        <img 
                            className='navbar__profile' src='/images/profile.jpg' alt='profile pic' 
                            // onClick={() => setDropDown(true)} 
                            />
                        <div className='dropdown__content'>
                            <ul>    
                                <li>Profile</li>
                                <li>Settings</li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    </div>
                    <div className='nav__logo' onClick={() => props.toggleTheme()}>
                        {props.theme === "dark" ? <BiSun /> : <BiMoon />}
                    </div>
                    <div className='nav__logo hamburger__logo' onClick={() => setHamburger((prevState) => !prevState)}>
                        {hamburger ? <RxCross2 /> : <GiHamburgerMenu />}
                    </div>
                </div>
            </nav>

            {hamburger && 
            <>
            <div className='sidenav__bgd' onClick={() => setHamburger(false)}></div>
            <div className='hamburger'>
                <div className='profile'>
                    <RxCross2 className="nav__logo" onClick={() => setHamburger((prevState) => !prevState)}/>
                    <img src='/images/profile.jpg' alt='profile pic' />
                    <h2>{username}</h2>
                </div>
                <Navlinks open={hamburger} />
                <div className="hamburger__buttons">
                    {/* <button className="hamburger__login">Login</button>
                    <button className="hamburger__register">Get Started</button> */}
                </div>
            </div>
            </>
            }

        </div>
    )
}