import React from 'react'

export default function Hero1() {
  return (
    <>
 {/* float text begin */}
 <div className="float-text">
                <div className="de_social-icons">
                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                    <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                </div>
                <span><a href="#">Book Now</a></span>
            </div>
            {/* float text close */} 

            <section className="no-top no-bottom jarallax vertical-center" data-video-src="mp4:video/local-video-1.mp4">
            
                <div className="de-overlay v-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>Enjoy Your<br/>Dream Vacation</h1>
                                <p className="lead">Lorem ipsum enim dolor ea anim reprehenderit laboris aliquip sed dolore.</p>
                                <a className="btn-main" href="#"><span>Choose Room</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    </>
  )
}
