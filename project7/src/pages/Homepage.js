import React from 'react'
import {Link} from 'react-router-dom';

export default function Homepage() {
  return (
    <div id="content" className="no-bottom no-top">

    {/* float text begin */}
    <div className="float-text">
      <div className="de_social-icons">
        <Link to={"#"}><i className="fa fa-facebook fa-lg"></i></Link>
        <Link to={"#"}><i className="fa fa-twitter fa-lg"></i></Link>
        <Link to={"#"}><i className="fa fa-instagram fa-lg"></i></Link>
      </div>
      <span><Link to={"#"}>Book Now</Link></span>
    </div>
    {/* float text close */}

    <section className="no-top no-bottom jarallax vertical-center" data-video-src="mp4:video/local-video-1.mp4">
      <div className="de-overlay v-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Enjoy Your<br/>Dream Vacation</h1>
              <p className="lead">Lorem ipsum enim dolor ea anim reprehenderit laboris aliquip sed dolore.</p>
              <Link  className="btn-main" to={"#"}><span>Choose Room</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="no-top no-bottom bg-color text-light">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-4 p-3" data-bgcolor="rgba(0, 0, 0, .2)">
            <div className="info-box padding20">
              <i className="icon_clock_alt"></i>
              <div className="info-box_text">
                <div className="info-box_title">Opening Times</div>
                <div className="info-box_subtite">Monday - Friday: 09:00 - 18:00</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-3" data-bgcolor="rgba(0, 0, 0, .4)">
            <div className="info-box padding20">
              <i className="icon_house_alt"></i>
              <div className="info-box_text">
                <div className="info-box_title">Our Location</div>
                <div className="info-box_subtite">100 S Main St, Los Angeles, CA</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-3" data-bgcolor="rgba(0, 0, 0, .6)">
            <div className="info-box padding20">
              <i className="icon_headphones"></i>
              <div className="info-box_text">
                <div className="info-box_title">Customer Support</div>
                <div className="info-box_subtite">+208 333 9296</div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>

    <section className="jarallax">
      <img src="images/background/7.jpg" className="jarallax-img" alt=""/>
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-12 text-center">
              <h2 className="title center">Our Rooms
                <span className="small-border"></span>
              </h2>
            </div>
            <div className="col-lg-4">
              <div className="de-room">
                <div className="d-image">
                  <div className="d-label">only 2 room left</div>
                  <div className="d-details">
                    <span className="d-meta-1">
                      <img src="images/ui/user.svg" alt=""/>2 Guests
                    </span>
                    <span className="d-meta-2">
                      <img src="images/ui/floorplan.svg" alt=""/>30 ft
                    </span>
                  </div>
                  <Link to={"02-room-single.html"}>
                    <img src="images/room/1.jpg" className="img-fluid" alt=""/>
                      <img src="images/room/1-alt.jpg" className="d-img-hover img-fluid" alt=""/>
                      </Link>
                    </div>

                    <div className="d-text">
                      <h3>Standard Room</h3>
                      <p>Most hotels and major hospitality companies have set industry standards to classNameify hotel types. An upscale full-service hotel facility offers luxury...</p>
                      <Link to={"02-room-single.html"} className="btn-line"><span>Book Now For $29</span></Link>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="de-room">
                  <div className="d-image">
                    <div className="d-label">only 1 room left</div>
                    <div className="d-details">
                      <span className="d-meta-1">
                        <img src="images/ui/user.svg" alt=""/>2 Guests
                      </span>
                      <span className="d-meta-2">
                        <img src="images/ui/floorplan.svg" alt=""/>35 ft
                      </span>
                    </div>
                    <Link to={"02-room-single.html"}>
                      <img src="images/room/2.jpg" className="img-fluid" alt=""/>
                        <img src="images/room/2-alt.jpg" className="d-img-hover img-fluid" alt=""/>
                        </Link>
                      </div>

                      <div className="d-text">
                        <h3>Deluxe Room</h3>
                        <p>Most hotels and major hospitality companies have set industry standards to classNameify hotel types. An upscale full-service hotel facility offers luxury...</p>
                        <Link to={"02-room-single.html"} className="btn-line"><span>Book Now For $39</span></Link>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="de-room">
                    <div className="d-image">
                      <div className="d-label">only 3 room left</div>
                      <div className="d-details">
                        <span className="d-meta-1">
                          <img src="images/ui/user.svg" alt=""/>2 Guests
                        </span>
                        <span className="d-meta-2">
                          <img src="images/ui/floorplan.svg" alt=""/>40 ft
                        </span>
                      </div>
                      <Link to={"02-room-single.html"}>
                        <img src="images/room/3.jpg" className="img-fluid" alt=""/>
                          <img src="images/room/3-alt.jpg" className="d-img-hover img-fluid" alt=""/>
                          </Link>
                        </div>

                        <div className="d-text">
                          <h3>Premier Room</h3>
                          <p>Most hotels and major hospitality companies have set industry standards to classNameify hotel types. An upscale full-service hotel facility offers luxury...</p>
                          <Link to={"02-room-single.html"} className="btn-line"><span>Book Now For $49</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-intro" className="pt60" data-bgcolor="#79552A">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-6">
                    <div className="spacer-double sm-hide"></div>
                    <img src="images/misc/1.jpg" alt="" className="img-responsive wow fadeInUp" data-wow-duration="1s"/>
                  </div>

                  <div className="col-lg-3 col-6">
                    <img src="images/misc/2.jpg" alt="" className="img-responsive wow fadeInUp" data-wow-duration="1.5s"/>
                  </div>

                  <div className="col-lg-6 wow fadeIn">
                    <div className="padding20">
                      <h2 className="title mb10">The Luxury Experience<br/>You'll Remember
                        <span className="small-border"></span>
                      </h2>

                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                      <Link to={"#"} className="btn-line"><span>Book Now</span>s</Link>

                    </div>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </div>
            </section>

            <section className="jarallax">
              <img src="images/background/4.jpg" className="jarallax-img" alt=""/>
                <div className="container">
                  <div className="row gx-4">
                    <div className="col-lg-12 text-center">
                      <h2 className="title center">Testimonials
                        <span className="small-border"></span>
                      </h2>
                    </div>

                    <div className="col-md-8 offset-md-2 wow fadeInUp">

                      <div id="testimonial-carousel-single" className="owl-carousel owl-theme wow fadeInUp">
                        <blockquote className="testimonial-big">
                          <span className="d-testi">The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown</span>
                          <span className="name">Benedict Mervine, Customer</span>
                        </blockquote>

                        <blockquote className="testimonial-big">
                          <span className="d-testi">They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there.</span>
                          <span className="name">Doretta Mccourtney, Customer</span>
                        </blockquote>

                        <blockquote className="testimonial-big">
                          <span className="d-testi">I had a wonderful experience at the hotel. Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!</span>
                          <span className="name">Carole Hunckler, Customer</span>
                        </blockquote>
                      </div>

                    </div>
                  </div>
                </div>
            </section>

            <footer className="no-top pl20 pr20">
              <div className="subfooter">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">&copy; Copyright 2023 - Seaside Hotel by <span className="id-color">Designesia</span></div>
                    <div className="col-md-6 text-right">
                      <div className="social-icons">
                        <Link to={"#"}><i className="fa fa-facebook fa-lg"></i></Link>
                        <Link to={"#"}><i className="fa fa-twitter fa-lg"></i></Link>
                        <Link to={"#"}><i className="fa fa-rss fa-lg"></i></Link>
                        <Link to={"#"}><i className="fa fa-google-plus fa-lg"></i></Link>
                        <Link to={"#"}><i className="fa fa-skype fa-lg"></i></Link>
                        <Link to={"#"}><i className="fa fa-dribbble fa-lg"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"#"} id="back-to-top"></Link>
            </footer>

          </div>
  )
}
