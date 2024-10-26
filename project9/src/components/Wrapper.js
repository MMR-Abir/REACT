import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Footer from './Footer'

export default function Wrapper() {
  return (

    <>

<div id="wrapper">
            {/* header begin */}
            <header className="header-fullwidth transparent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <Link to="02-index.html">
                                            <img className="logo" src="images/logo.png" alt=""/>
                                        </Link>
                                    </div>
                                    {/* logo close */}
                                </div>

                                <div className="de-flex-col">

                                    <ul id="mainmenu">
                                        <li>
                                            <Link to="/">Home</Link>
                                            <ul>
                                                <li><Link to="02-index.html">Fullscreen Slider</Link></li>
                                                <li><Link to="02-index-slider-2.html">Fullscreen Slider 2</Link></li>
                                                <li><Link to="02-index-slider-3.html">Fullscreen Slider 3</Link></li>
                                                <li><Link to="02-index-full-page.html">Full Page</Link></li>
                                                <li><Link to="02-index-video-background.html">Fullsreen Video</Link></li>
                                                <li><Link to="02-index-room-slider-1.html">New: Room Slider 1</Link></li>
                                                <li><Link to="02-index-snowy.html">New: Slider + Snow</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="about">About</Link></li>
                                        <li>
                                            <Link to="#">Rooms</Link>
                                            <ul>
                                                <li><Link to="02-room-2-cols.html">2 Columns</Link></li>
                                                <li><Link to="02-room.html">3 Columns</Link></li>
                                                <li><Link to="02-room-single.html">Room Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="02-booking.html">Booking</Link></li>
                                        <li><Link to="02-offer.html">Offers</Link></li>
                                        <li><Link to="02-blog.html">Blog</Link></li>
                                        <li><Link to="02-gallery.html">Gallery</Link></li>
                                        <li><Link to="02-contact.html">Contact</Link></li>
                                    </ul>
                                </div>

                                <div className="de-flex-col">
                                    <div className="d-extra">
                                        <a className="btn-main" href="02-booking.html">Booking</a>
                                    </div>
                                    <div id="menu-btn"></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
            {/* header close */}

            {/* menu overlay begin */}
            <div id="menu-overlay" className="slideDown">
                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="col-md-12">
                            <div id="mo-button-close">
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                            </div>

                            <div className="pt80 pb80">
                                <div className="mo-nav text-center">
                                    <Link to="02-index.html">
                                        <img className="logo" src="images/logo.png" alt=""/>
                                    </Link>

                                    <div className="spacer-single"></div>

                                    {/* mainmenu begin */}
                                    <ul id="mo-menu">
                                        <li>
                                            Home
                                            <ul>
                                                <li><Link to="02-index.html">Fullscreen Slider</Link></li>
                                                <li><Link to="02-index-slider-2.html">Fullscreen Slider 2</Link></li>
                                                <li><Link to="02-index-slider-3.html">Fullscreen Slider 3</Link></li>
                                                <li><Link to="02-index-full-page.html">Full Page</Link></li>
                                                <li><Link to="02-index-video-background.html">Fullsreen Video</Link></li>
                                                <li><Link to="02-index-room-slider-1.html">New: Room Slider 1</Link></li>
                                                <li><Link to="02-index-snowy.html">New: Slider + Snow</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="02-about.html">About</Link></li>
                                        <li>
                                            Rooms
                                            <ul>
                                                <li><Link to="02-room-2-cols.html">2 Columns</Link></li>
                                                <li><Link to="02-room.html">3 Columns</Link></li>
                                                <li><Link to="02-room-single.html">Room Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="02-booking.html">Booking</Link></li>
                                        <li><Link to="offer.html">Offers</Link></li>
                                        <li><Link to="02-blog.html">Blog</Link></li>
                                        <li><Link to="02-gallery.html">Gallery</Link></li>
                                        <li><Link to="02-contact.html">Contact</Link></li>
                                    </ul>
                                    {/* mainmenu close */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Outlet/>
        <Footer Company="Seaside" Establish="1905"/>

    </>
    
  )
}
