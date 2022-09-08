import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from "next/script";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
 <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Three || Halpes || HTML Template For Donation Services</title>
  {/* favicons Icons */}
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png" />
  <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
  <meta name="description" content="Crsine HTML Template For Car Services" />
  {/* fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/vendors/animate/animate.min.css" />
  <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css" />
  <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" />
  <link rel="stylesheet" href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
  <link rel="stylesheet" href="assets/vendors/nouislider/nouislider.min.css" />
  <link rel="stylesheet" href="assets/vendors/nouislider/nouislider.pips.css" />
  <link rel="stylesheet" href="assets/vendors/odometer/odometer.min.css" />
  <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css" />
  <link rel="stylesheet" href="assets/vendors/halpes-icons/style.css" />
  <link rel="stylesheet" href="assets/vendors/tiny-slider/tiny-slider.min.css" />
  <link rel="stylesheet" href="assets/vendors/reey-font/stylesheet.css" />
  <link rel="stylesheet" href="assets/vendors/owl-carousel/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/vendors/owl-carousel/owl.theme.default.min.css" />
  {/* template styles */}
  <link rel="stylesheet" href="assets/css/halpes.css" />
  <link rel="stylesheet" href="assets/css/halpes-responsive.css" />
            </Head>
      <div>
 {/* <div className="preloader">
    <img className="preloader__image" width={60} src="assets/images/loader.png" alt="" />
  </div>*/}
  {/* /.preloader */}
  <div className="page-wrapper">
    <header className="main-header-three clearfix">
      <div className="main-header-three__menu-box clearfix">
        <nav className="main-menu main-menu-three clearfix">
          <div className="main-menu-three__container clearfix">
            <div className="main-menu-three__logo">
              <a href="index.html">
                <img src="assets/images/resources/logo-3.png" alt="" />
              </a>
            </div>
            <div className="main-menu-three__inner-upper clearfix">
              <div className="main-menu-three__btn">
                <a href="#" className="main-menu-three__donate-btn"><i className="fa fa-heart" />Donate </a>
              </div>
              <div className="main-menu-three__inner clearfix">
                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                <ul className="main-menu__list">
                  <li className="dropdown current">
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li><a href="index2.html">Home Two</a></li>
                      <li><a href="index3.html">Home Three</a></li>
                      <li className="dropdown">
                        <a href="#">Header Styles</a>
                        <ul>
                          <li><a href="index.html">Header One</a></li>
                          <li><a href="index.html">Header Two</a></li>
                          <li><a href="index.html">Header Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                      <li><a href="about.html">About</a></li>
                      <li><a href="volunteers.html">Volunteers</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="become-volunteer.html">Become a Volunteer</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Donations</a>
                    <ul>
                      <li><a href="causes.html">Causes</a></li>
                      <li><a href="causes-details.html">Causes Details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Events</a>
                    <ul>
                      <li><a href="events.html">Events</a></li>
                      <li><a href="event-details.html">Event Details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">News</a>
                    <ul>
                      <li><a href="news.html">News</a></li>
                      <li><a href="news-details.html">News Details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="main-menu__right main-menu__right-three">
              <div className="main-menu__right-social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
              <a href="#" className="main-menu__search search-toggler icon-magnifying-glass" />
              <a href="#" className="main-menu__cart icon-shopping-cart  " />
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div className="stricky-header stricked-menu main-menu main-menu-three">
      <div className="sticky-header__content" />{/* /.sticky-header__content */}
    </div>{/* /.stricky-header */}
    <section className="main-slider main-slider-three">
      <div className="swiper-container thm-swiper__slider" data-swiper-options="{&quot;slidesPerView&quot;: 1, &quot;loop&quot;: true,
    &quot;effect&quot;: &quot;fade&quot;,
     &quot;pagination&quot;: {
  &quot;el&quot;: &quot;#main-slider-pagination&quot;,
  &quot;type&quot;: &quot;bullets&quot;,
  &quot;clickable&quot;: true
},
    &quot;navigation&quot;: {
  &quot;nextEl&quot;: &quot;#main-slider__swiper-button-next&quot;,
  &quot;prevEl&quot;: &quot;#main-slider__swiper-button-prev&quot;
    },
    &quot;autoplay&quot;: {
  &quot;delay&quot;: 5000
    }}">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="image-layer" style={{backgroundImage: 'url(assets/images/backgrounds/main-slider-3-1.jpg)'}}>
            </div>
            <div className="image-layer-overlay" />
            {/* /.image-layer */}
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <p>Helping Them Today</p>
                    <h2>Help the Poor <br /> in Need</h2>
                    <a href="#" className="thm-btn"><i className="fas fa-arrow-circle-right" />Learn
                      More</a>
                    <div className="main-slider-three-shape">
                      <img src="assets/images/shapes/main-slider-3-shape-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="image-layer" style={{backgroundImage: 'url(assets/images/backgrounds/main-slider-3-2.png)'}}>
            </div>
            <div className="image-layer-overlay" />
            {/* /.image-layer */}
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <p>Helping Them Today</p>
                    <h2>Help the Poor <br /> in Need</h2>
                    <a href="#" className="thm-btn"><i className="fas fa-arrow-circle-right" />Learn
                      More</a>
                    <div className="main-slider-three-shape">
                      <img src="assets/images/shapes/main-slider-3-shape-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="icon-right-arrow icon-left-arrow" />
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="icon-right-arrow" />
          </div>
        </div>
      </div>
    </section>
    {/*Feature One Start*/}
    <section className="feature-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            {/*Feature One Single*/}
            <div className="feature-one__single feature-one__single-1">
              <div className="feature-one__icon">
                <span className="icon-heart" />
              </div>
              <div className="feature-one__content">
                <h3>Become a Volunteer</h3>
                <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            {/*Feature One Single*/}
            <div className="feature-one__single feature-one__single-2">
              <div className="feature-one__icon">
                <span className="icon-adoption" />
              </div>
              <div className="feature-one__content">
                <h3>Quick Fundraise</h3>
                <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            {/*Feature One Single*/}
            <div className="feature-one__single feature-one__single-3">
              <div className="feature-one__icon">
                <span className="icon-donation-1" />
              </div>
              <div className="feature-one__content">
                <h3>Donate Now</h3>
                <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Feature One End*/}
    {/*Help Them Two Start*/}
    <section className="help-them-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="help-them-two__left">
              <div className="help-them-two-bg" style={{backgroundImage: 'url(assets/images/resources/help-them-two-bg.jpg)'}} />
              <div className="help-them-two__img">
                <img src="assets/images/resources/help-them-two-img-1.jpg" alt="" />
                <a href="https://www.youtube.com/watch?v=i9E_Blai8vk" className="help-them-two__video-btn video-popup"><i className="fa fa-play" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="help-them-two__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">We Help Them</span>
                <h2 className="section-title__title">Trusted non profit <br /> donation center</h2>
              </div>
              <div className="help-them-two__list-box">
                <ul className="help-them-two__list list-unstyled">
                  <li>
                    <div className="help-them-two__icon-box">
                      <i className="fas fa-arrow-circle-right" />
                    </div>
                    <div className="help-them-two__text-box">
                      <h4>Best fundraising platform</h4>
                    </div>
                  </li>
                  <li>
                    <div className="help-them-two__icon-box">
                      <i className="fas fa-arrow-circle-right" />
                    </div>
                    <div className="help-them-two__text-box">
                      <h4>We can help to educate them</h4>
                    </div>
                  </li>
                </ul>
                <ul className="help-them-two__list help-them-two__list-two list-unstyled">
                  <li>
                    <div className="help-them-two__icon-box">
                      <i className="fas fa-arrow-circle-right" />
                    </div>
                    <div className="help-them-two__text-box">
                      <h4>Best fundraising platform</h4>
                    </div>
                  </li>
                  <li>
                    <div className="help-them-two__icon-box">
                      <i className="fas fa-arrow-circle-right" />
                    </div>
                    <div className="help-them-two__text-box">
                      <h4>We can help to educate them</h4>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="help-them-two__bottom">
                <h3 className="help-them-two__bottom-title">Halpes is the largest global crowdfunding.</h3>
                <p className="help-them-two__bottom-text">Lorem ipsum dolor sit am adipi we help you ensure
                  everyone is in the right jobs sicing elit, sed do consulting firms Et leggings
                  across the nation simply free text tempor.</p>
              </div>
              <div className="help-them-two__donation-text-box">
                <h2>Start&nbsp;&nbsp;Donating</h2>
                <div className="help-them-two__donation-icon">
                  <img src="assets/images/resources/help-them-two__donation-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Help Them Two End*/}
    {/*Causes Three Start*/}
    <section className="causes-three">
      <div className="container">
        <div className="causes-three__top">
          <div className="causes-three__top-title">
            <div className="section-title text-left">
              <span className="section-title__tagline">Latest Causes</span>
              <h2 className="section-title__title">Find the popular cause <br /> and donate them</h2>
            </div>
          </div>
          <div className="causes-three__top-btn-box">
            <a href="#" className="causes-three__top-btn thm-btn"><i className="fas fa-arrow-circle-right" />View
              More</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="causes-three__carousel owl-theme owl-carousel">
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-1.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Raise Fund for Clean &amp; Healthy Water</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-2.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Our donation is hope for poor childrens</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-3.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Education for Poor Children</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-4.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Promoting The Rights of Children</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-1.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Raise Fund for Clean &amp; Healthy Water</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-2.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Our donation is hope for poor childrens</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-3.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Education for Poor Children</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
              {/*Causes Three Single*/}
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                    <img src="assets/images/resources/causes-three-img-4.jpg" alt="" />
                    <a href="causes-details.html">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="causes-one__category">
                    <span>Medical</span>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href="causes-details.html">Promoting The Rights of Children</a>
                  </h3>
                  <p className="causes-one__text">There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form simply free.</p>
                </div>
                <div className="causes-one__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Causes Three End*/}
    {/*Brand Three Start*/}
    <section className="brand-one brand-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="brand-one__carousel owl-theme owl-carousel">
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </div>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/resources/brand-1-2.png" alt="" />
                </div>
              </div>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/resources/brand-1-3.png" alt="" />
                </div>
              </div>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/resources/brand-1-4.png" alt="" />
                </div>
              </div>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/resources/brand-1-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Brand Three End*/}
    {/*Testimonial Two Start*/}
    <section className="testimonial-two">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Our Testimonials</span>
          <h2 className="section-title__title">What they’re talking <br /> about charity</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
            {/*Testimonial One Single*/}
            <div className="testimonial-one__single testimonial-two__single">
              <p className="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="assets/images/testimonial/testimonial-2-img-1.png" alt="" />
                  <div className="testimonial-one__quote">
                  </div>
                </div>
                <div className="testimonial-one__client-name">
                  <h3>Kevin Martin</h3>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
            {/*Testimonial One Single*/}
            <div className="testimonial-one__single testimonial-two__single">
              <p className="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="assets/images/testimonial/testimonial-2-img-2.png" alt="" />
                  <div className="testimonial-one__quote">
                  </div>
                </div>
                <div className="testimonial-one__client-name">
                  <h3>Jessica Brown</h3>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">
            {/*Testimonial One Single*/}
            <div className="testimonial-one__single testimonial-two__single">
              <p className="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="assets/images/testimonial/testimonial-2-img-3.png" alt="" />
                  <div className="testimonial-one__quote">
                  </div>
                </div>
                <div className="testimonial-one__client-name">
                  <h3>Mike Hardson</h3>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Testimonial Two End*/}
    {/*Counters Two Start*/}
    <section className="counters-two">
      <div className="counters-two-bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{backgroundImage: 'url(assets/images/backgrounds/counters-two-bg.jpg)'}} />
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="counters-two__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Get Daily Updates</span>
                <h2 className="section-title__title">Check what make us different than others</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="counters-two__right">
              <ul className="counters-two__four-boxes list-unstyled">
                <li>
                  <div className="counters-two__four-boxes-icon">
                    <span className="icon-fast-food" />
                  </div>
                  <h4>Healthy <br /> Food</h4>
                </li>
                <li>
                  <div className="counters-two__four-boxes-icon">
                    <span className="icon-water" />
                  </div>
                  <h4>Clean <br /> Water</h4>
                </li>
                <li>
                  <div className="counters-two__four-boxes-icon">
                    <span className="icon-health-check" />
                  </div>
                  <h4>Medical <br /> Treatment</h4>
                </li>
                <li>
                  <div className="counters-two__four-boxes-icon">
                    <span className="icon-cheque" />
                  </div>
                  <h4>Child <br /> Education</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Counters Two End*/}
    {/*Need Help Start*/}
    <section className="need-help">
      <div className="container">
        <div className="need-help__inner">
          <div className="need-help__img">
            <img src="assets/images/resources/need-help-img-1.jpg" alt="" />
          </div>
          <div className="need-help__content">
            <h4 className="need-help__title">They need your help</h4>
            <p className="need-help__text">Lorem ipsum is are many variations of pass of norms and guide an
              effective simply free text majority.</p>
          </div>
        </div>
      </div>
    </section>
    {/*Need Help End*/}
    {/*Team One Start*/}
    <section className="team-one">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Professional Volunteers</span>
          <h2 className="section-title__title">Meet the best team behind <br /> our success story</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            {/*Team One Single*/}
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img src="assets/images/team/team-one-img-1.jpg" alt="" />
                </div>
                <div className="team-one__member-name">
                  <h2>Janne</h2>
                </div>
              </div>
              <div className="team-one__content">
                <h4 className="team-one__member-title">Volunteer</h4>
                <p className="team-one__text-box">There are many of lorem ipsum available but the have in
                  some form.</p>
              </div>
              <div className="team-one__social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            {/*Team One Single*/}
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img src="assets/images/team/team-one-img-2.jpg" alt="" />
                </div>
                <div className="team-one__member-name">
                  <h2>David</h2>
                </div>
              </div>
              <div className="team-one__content">
                <h4 className="team-one__member-title">Volunteer</h4>
                <p className="team-one__text-box">There are many of lorem ipsum available but the have in
                  some form.</p>
              </div>
              <div className="team-one__social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            {/*Team One Single*/}
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img src="assets/images/team/team-one-img-3.jpg" alt="" />
                </div>
                <div className="team-one__member-name">
                  <h2>Sarah</h2>
                </div>
              </div>
              <div className="team-one__content">
                <h4 className="team-one__member-title">Volunteer</h4>
                <p className="team-one__text-box">There are many of lorem ipsum available but the have in
                  some form.</p>
              </div>
              <div className="team-one__social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Team One End*/}
    {/*Why Choose Start*/}
    <section className="why-choose">
      <div className="why-choose-bg" style={{backgroundImage: 'url(assets/images/backgrounds/why-choose-bg.jpg)'}} />
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="why-choose__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Get Daily Updates</span>
                <h2 className="section-title__title">Why you should choose our <br /> charity foundation</h2>
              </div>
              <div className="why-choose__left-bottom">
                <div className="why-choose__left-text-box">
                  <p className="why-choose__left-text">There are many variations of passages of but the
                    majority have suffered alteration in some form by injected humour or which don't
                    look even slightly believe.</p>
                  <h2 className="why-choose__left-signature">Mike Hardson</h2>
                </div>
                <div className="why-choose__left-list-box">
                  <ul className="why-choose__left-list list-unstyled">
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>Making this first true generator</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>Many desktop publish packages</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>Lorem Ipsum is not simply</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>If you are going to passage</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>It has roots in a piece</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right" />
                      </div>
                      <div className="text">
                        <h5>The point of using</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="why-choose__right">
              <div className="why-choose__urgent">
                <h3 className="why-choose__urgent-title">Raise Fund for Save Animals</h3>
                <p className="why-choose__urgent-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit sed do eiusmod tempor incididunt.</p>
                <div className="why-choose__progress">
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="why-choose__goals">
                    <p><span>$25,270</span> Raised</p>
                    <p><span>$30,000</span> Goal</p>
                  </div>
                </div>
                <a href="#" className="why-choose__right-btn"><i className="fa fa-heart" />Donate</a>
                <div className="why-choose__right-category">
                  <span>Medical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Why Choose End*/}
    {/*News Three Start*/}
    <section className="news-two news-three">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Get Daily Updates</span>
          <h2 className="section-title__title">Latest news &amp; articles directly <br /> coming from the blog</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
            {/*News Two Single*/}
            <div className="news-two__single">
              <div className="news-two__img-box">
                <div className="news-two__img">
                  <img src="assets/images/blog/news-two-img-1.jpg" alt="" />
                  <a href="news-details.html">
                    <i className="fa fa-plus" />
                  </a>
                </div>
                <div className="news-two__date">
                  <p>20 Jan, 2021</p>
                </div>
              </div>
              <div className="news-two__content">
                <ul className="list-unstyled news-two__meta">
                  <li><a href="#"><i className="far fa-user-circle" /> Admin</a></li>
                  <li><span>/</span></li>
                  <li><a href="#"><i className="far fa-comments" /> 2 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">Donation is Hope for Poor Childrens in</a>
                </h3>
                <p className="news-two__text">There are many variations of but the majority have simply free
                  text available not suffered.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            {/*News Two Single*/}
            <div className="news-two__single">
              <div className="news-two__img-box">
                <div className="news-two__img">
                  <img src="assets/images/blog/news-two-img-2.jpg" alt="" />
                  <a href="news-details.html">
                    <i className="fa fa-plus" />
                  </a>
                </div>
                <div className="news-two__date">
                  <p>20 Jan, 2021</p>
                </div>
              </div>
              <div className="news-two__content">
                <ul className="list-unstyled news-two__meta">
                  <li><a href="#"><i className="far fa-user-circle" /> Admin</a></li>
                  <li><span>/</span></li>
                  <li><a href="#"><i className="far fa-comments" /> 2 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">Capitalize on low hanging to identify</a>
                </h3>
                <p className="news-two__text">There are many variations of but the majority have simply free
                  text available not suffered.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            {/*News Two Single*/}
            <div className="news-two__single">
              <div className="news-two__img-box">
                <div className="news-two__img">
                  <img src="assets/images/blog/news-two-img-3.jpg" alt="" />
                  <a href="news-details.html">
                    <i className="fa fa-plus" />
                  </a>
                </div>
                <div className="news-two__date">
                  <p>20 Jan, 2021</p>
                </div>
              </div>
              <div className="news-two__content">
                <ul className="list-unstyled news-two__meta">
                  <li><a href="#"><i className="far fa-user-circle" /> Admin</a></li>
                  <li><span>/</span></li>
                  <li><a href="#"><i className="far fa-comments" /> 2 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">How Malnutrition Affect Children?</a>
                </h3>
                <p className="news-two__text">There are many variations of but the majority have simply free
                  text available not suffered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*News Three End*/}
    {/*Become Volunteer Start*/}
    <section className="become-volunteer">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>Join your hand with us for <br /> a better life and future</h2>
                <div className="become-volunteer__big-text">
                  <h2>Become a Volunteers</h2>
                </div>
              </div>
              <div className="become-volunteer__btn-box">
                <a href="#" className="become-volunteer__btn thm-btn"><i className="fas fa-arrow-circle-right" />Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Become Volunteer End*/}
    {/*Site Footer One Start*/}
    <footer className="site-footer">
      <div className="site-footer-bg" style={{backgroundImage: 'url(assets/images/backgrounds/footer-bg.jpg)'}} />
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About</h3>
                <p className="footer-widget__text">Lorem ipsum dolor sit ame consect etur pisicing elit sed
                  do eiusmod tempor incididunt ut labore.</p>
                <a href="#" className="footer-widget__about-btn"><i className="fa fa-heart" />Donate </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Campaigns</a></li>
                  <li><a href="#">Fundraise</a></li>
                  <li><a href="#">Volunteers</a></li>
                  <li><a href="#">Sponsors</a></li>
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  <li><a href="#">Fundraising</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Faqs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat" />
                    </div>
                    <div className="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href="tel:92 666 888 0000">92 666 888 0000</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message" />
                    </div>
                    <div className="text">
                      <p>
                        <span>Send Email</span>
                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address" />
                    </div>
                    <div className="text">
                      <p><span>Visit Office</span>80 broklyn golden street</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p className="footer-widget__newsletter-text">Lorem ipsum dolor sit ame consect etur
                  pisicing elit sed do.</p>
                <form className="footer-widget__newsletter-form">
                  <input type="email" placeholder="Email address" name="email" />
                  <button type="submit" className="footer-widget__newsletter-btn"><i className="fas fa-arrow-circle-right" />Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-logo-social">
                  <div className="site-footer__bottom-logo">
                    <a href="index.html"><img src="assets/images/resources/footer-logo.jpg" alt="" /></a>
                  </div>
                  <div className="site-footer__bottom-social">
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-facebook-square" /></a>
                    <a href="#"><i className="fab fa-dribbble" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="site-footer__bottom-copy-right">
                  <p>© Copyright 2021 by <a href="#">Layerdrops.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*Site Footer One End*/}
  </div>{/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width={155} alt="" /></a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:needhelp@packageName__.com">needhelp@halpes.com</a>
        </li>
        <li>
          <i className="fa fa-phone-alt" />
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>{/* /.mobile-nav__contact */}
      <div className="mobile-nav__top">
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-facebook-square" />
          <a href="#" className="fab fa-pinterest-p" />
          <a href="#" className="fab fa-instagram" />
        </div>{/* /.mobile-nav__social */}
      </div>{/* /.mobile-nav__top */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form action="#">
        <label htmlFor="search" className="sr-only">search here</label>{/* /.sr-only */}
        <input type="text" id="search" placeholder="Search Here..." />
        <button type="submit" aria-label="search submit" className="thm-btn">
          <i className="icon-magnifying-glass" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up" /></a>
  {/* template js */}
</div>


    <Script strategy={'afterInteractive'} src="assets/vendors/jquery/jquery-3.5.1.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jarallax/jarallax.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jquery-appear/jquery.appear.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/jquery-validate/jquery.validate.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/nouislider/nouislider.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/odometer/odometer.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/swiper/swiper.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/tiny-slider/tiny-slider.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/wnumb/wNumb.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/wow/wow.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/isotope/isotope.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/countdown/countdown.min.js"></Script>
    <Script strategy={'afterInteractive'} src="assets/vendors/owl-carousel/owl.carousel.min.js"></Script>
    <Script strategy={'lazyOnload'} src="assets/js/halpes.js"></Script>
        </div>

)
}
