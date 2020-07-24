import React, { useRef } from 'react';

import useWebAnimations, {bounce} from '@wellyshen/use-web-animations'
import '../src/imagesfile/bootstrap.min.css';
import firstimage from '../src/imagesfile/animation.svg'
import secondimage from '../src/imagesfile/custom_solution.svg'
import portfolio1 from './imagesfile/portfolio1.png'
import portfolio2 from './imagesfile/portfolio2.png'
import portfolio3 from './imagesfile/portfolio3.jpg'
import footericon from './imagesfile/footer-icon.svg'
import secondimg from './imagesfile/secondimg2.png'
import {useIntersection} from 'react-use'
import gsap from 'gsap'
import {SocialMediaIconsReact} from 'social-media-icons-react';

import './App.css'

function App() {
    const {keyframes, timing} = bounce;

    const {ref} = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 1000,
            iterations: Infinity,
            duration: 10000
        }
    })
    //first section
    const sectionfirst = useRef(null)
    const intersectionone = useIntersection(sectionfirst,{
        root:null,
        rootmargin:'0px',
        threshold: 1
    });
    const fadeinone = element =>
    {
        gsap.to(element,1,{
            opacity:1,
            y:40,
            ease: 'ease-in-out',
            stagger:{
                amount:2
            }
        });
    };
    const fadeoutone = element =>
    {
        gsap.to(
            element,1,{
                opacity:0,
                y:70,
                ease:'ease-in-out'
            }
        )
    }
    intersectionone && intersectionone.intersectionRatio< 1
    ? fadeoutone('.fadeInone')
    : fadeinone('.fadeInone');
    //

//second comp
    const sectionref = useRef(null)
    const intersection = useIntersection(sectionref,{
        root:null,
        rootmargin:'0px',
        threshold:0.5
    });
    const fadein = element =>
    {
        gsap.to(element,1,{
            opacity:1,
            y:30,
            ease: 'ease-in-out',
            stagger:{
                amount:3
            }
        });
    };
    const fadeout = element =>
    {
        gsap.to(
            element,1,{
                opacity:0,
                y:-60,
                ease:'ease-in-out',
               
            }
        )
    }
    intersection && intersection.intersectionRatio < 0.5
    ? fadeout('.fadeIn')
    : fadein('.fadeIn');
    //
    //third comp
    const sectionthird = useRef(null)
    const intersectionthird = useIntersection(sectionthird,{
        root:null,
        rootmargin:'0px',
        threshold:0.5
    });
    const fadeinthird = element =>
    {
        gsap.to(element,1,{
            opacity:1,
            y:10,
            ease: 'ease-in-out',
            stagger:{
                amount:3
            }
        });
    };
    const fadeouthird = element =>
    {
        gsap.to(
            element,1,{
                opacity:0,
                y:-40,
                ease:'ease-in-out'
            }
        )
    }
    intersectionthird && intersectionthird.intersectionRatio<0.5
    ? fadeouthird('.fadeInthird')
    : fadeinthird('.fadeInthird');

     //fourth comp
     const sectionfor = useRef(null)
     const intersectionfor = useIntersection(sectionfor,{
         root:null,
         rootmargin:'0px',
         threshold:0.8
     });
     const fadeinfor = element =>
     {
         gsap.to(element,1,{
             opacity:1,
             y:-10,
             ease: 'ease-in-out',
             stagger:{
                 amount:3
             }
         });
     };
     const fadeoutfor = element =>
     {
         gsap.to(
             element,1,{
                 opacity:0,
                 // y:-20,
                 ease:'ease-in-out'
             }
         )
     }
     intersectionfor && intersectionfor.intersectionRatio<0.8
     ? fadeoutfor('.fadeInfor')
     : fadeinfor('.fadeInfor');
    
    return (
        
        <>
             <div className='color-bg'>
                <nav className="navbar  fixed-top   navbar-expand-lg navbar-light ">
                     <span className="navbar-brand fontt pl-4 brand-width icon text-white">CAMO</span>
                    <button
                        className="navbar-toggler txt-white "
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon icon"></span>
                    </button>

                    <div className="collapse  navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item ">
                                 <span
                                    className="nav-link text-white a-margin particular animate__animated    "
                                     >SERVICES
                                </span>
                            </li>
                            <li className="nav-item">
                                 <span
                                    className="nav-link navlink-color a-margin text-white animate__animated particular"
                                     >ABOUT US</span>
                            </li>
                            <li className="nav-item">
                                 <span
                                    className="nav-link navlink-color a-margin text-white animate__animated particular"
                                     >PROJECTS</span>
                            </li>
                            <li className="nav-item">
                                 <span
                                    className="nav-link  navlink-color text-white a-margin animate__animated particular"
                                     >BLOGS</span>
                            </li>
                            <li className="nav-item ml-5 dropdown">
                                 <span
                                    className="nav-link a-margin text-white dropdown-toggle"
                                     
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"></span>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                     <span className="dropdown-item "  >EST</span>
                                </div>

                            </li>
                            <li className='nav-item mr-4'>
                                 <span    className='btn a-margin btn-outline-info text-white'>GET IN TOUCH</span>
                            </li>

                        </ul>

                    </div>
                </nav>
                <div className='container mt-15' ref={sectionfirst}>
                    <div className='row text-center'>
                        <div className='col-md-8 text-white top-comp text-left'>
                            <h2 className='fadeInone'>Your web presence just got so much better</h2>
                            <p className='font-style fadeInone mt-2'>Your company’s website isn’t just a digital business
                                card or a few brush strokes here and there. It’s an essential sales channel, and
                                it has rules. You need it to survive in the jungle of business.</p>
                            <button className='btn bg-primaryy fadeInone text-white btn-outline-info mr-2'>WORK WITH US</button>
                            <button className='btn text-white fadeInone  bg-primaryy btn-outline-info'>VIEW OUR PROJECTS</button>

                        </div>
                        <div className='col-md-4 mt-5 pt-5'>
                            <img src={secondimg}  ref={ref} className='animeimage fadeInone' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={sectionref} className='container mb-5 sectionsecond cont1'>
                <div className='row mt-5 '>
                    <div className='col-md-5  '>
                        <div className='ht'>
                            <h2 className='fadeIn'>What we're great at</h2>
                            <p className='font-style fadeIn'>Fourteen years and 400+ finished web projects have
                                gifted us a unique experience on how to create something that is easy to use,
                                looks great and earns a profit for your company.</p>
                            <button className='btn fadeIn bg-primaryy btn-outline-info'>EXPLORE FULL SERVICES</button>
                        </div>
                    </div>
                    <div className='col-md-7 mt-3 '>
                        <div className='row '>
                            <div className='col-md-3'>
                                <img src={firstimage} className='side-img fadeIn' alt=""/>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h5 className='font-weight-bold fadeIn'>DESGIN AND UI/UX</h5>
                                <h6 className='font-style fadeIn'>Your website has three(!) seconds to make a lasting
                                    impression. we all know first impressions are the ones that count. So, if the
                                    visitor isn't engaged by then, you've lost them. Straight to you competitros
                                    site.</h6>
                            </div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-md-3 '>
                                <img src={secondimage} className='side-img fadeIn' alt=""/>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h5 className='font-weight-bold fadeIn'>WEB DESIGN AND DEVELOPMENT</h5>
                                <h6 className='font-style fadeIn'>Your website has to look delightful to the eye. it
                                    must be handsome. it's your virtual business card and your sales channel.</h6>
                            </div>
                        </div>
                        <div className='row  mt-3 '>
                            <div className='col-md-3'>
                                <img src={firstimage} className='side-img fadeIn' alt=""/>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h5 className='font-weight-bold fadeIn'>CUSTOM SOLUTIONS</h5>
                                <h6 className='font-style fadeIn'>You're special, and so is your business. You need
                                    special features(an interactive order form, ad portal or somethings unique) for
                                    your site.</h6>
                            </div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-md-3'>
                                <img src={secondimage} className='side-img fadeIn' alt=""/>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h5 className='font-weight-bold fadeIn'>WEBSHOPS</h5>
                                <h6 className='font-style fadeIn'>open 4/7, your products or services only one search
                                    away from billions of people. When done right, a webshop gives you, quite
                                    literally, an opportunity to conquer the world</h6>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-3'>
                                <img src={firstimage} className='side-img fadeIn' alt=""/>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h5 className='font-weight-bold fadeIn'>VIDEO ANIMATIONS ADS</h5>
                                <p className='font-style fadeIn'>A video is the thing of today and tomorrow. it is,
                                    without a doubt, the most popluar media form. it's used in entertainment, social
                                    media, and marketing. A Video will help you steop up your game</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bg-port  mb-5' ref={sectionthird}>
                <div className='row text-center  '>
                    <div className='col-md-12 pt-2 pb-2  text-center mt-5 mb-5'>
                        <h2 className='fadeInthird'>Our portfolio</h2>
                        <h6
                            className='font-style col-md-6  fadeInthird'
                            style={{
                            margin: '0 auto'
                        }}>User-friendly
                            web pages are our thing. We’ve also helped some awesome businesses with branding
                            and custom solutions</h6>
                    </div>
                </div>
                <div className='row text-center '>
                    <div className='col-md-6 h  '>
                        <img src={portfolio1} className=' fadeInthird portfoli-img rounded ' alt=""/>
                        <h5 className='mt-3 fadeInthird'>Printerirent</h5>
                        <h6 className='fadeInthird'>Copier and printer macine rental</h6>
                    </div>
                    <div className='col-md-6 '>
                        <img src={portfolio2} alt="" className='portfoli-img fadeInthird rounded '/>
                        <h5 className='mt-3 fadeInthird'>Borg</h5>
                        <h6 className='fadeInthird'>Profit from Quality</h6>
                    </div>
                </div>
                <div className='row text-center '>
                    <div className='col-md-12'>
                        <img className='portfoli-img rounded fadeInthird' src={portfolio3} alt=""/>
                        <h5 className='mt-3 fadeInthird'>Digistudio</h5>
                        <h6 className='fadeInthird'>Radio and Tv commercials</h6>
                        <button className='btn fadeInthird bg-primaryy btn-outline-info mt-5 mb-4 '>VIEW MORE CASE STUDIES</button>
                    </div>
                </div>

            </div>
            <div className='container mt-5 mb-5 text-center' ref={sectionfor}>
                <div className='row text-center shadow '>
                    <div className='col-md-8 text-left mt-5 pl-5 '>
                        <h2 className='fadeInfor'>Need a website or a webshop but don't have a clear vision?</h2>
                        <h6 className='mt-3 fadeInfor font-style'>No worries, that’s fine. We are excellent at
                            giving advice, too. Let’s join forces and create an engaging concept that aligns
                            with your business needs. Let’s make you seen and heard.</h6>
                        <button className='btn fadeInfor bg-primaryy btn-outline-info mt-3'>Start A New Project</button>
                    </div>
                    <div className='col-md-4'>
                        <img
                            className='fadeInfor'
                            src={footericon}
                            style={{
                            height: '280px'
                        }}
                            alt=""/>
                    </div>
                </div>
            </div>
            <footer class="page-footer font-small mb-5 cyan darken-3">

                <div class="container">

                    <div class="row">
                        <div class="col-md-12 text-center">
                            
                                 <span class="fb-ic fadeInfor">
                                    <SocialMediaIconsReact borderColor="rgba(240,238,238,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="36%"  size="49" />
                                </span>
                                 <span class="tw-ic fadeInfor">
                                    <SocialMediaIconsReact borderColor="rgba(240,238,238,1)" borderWidth="2" borderStyle="solid" icon="twitter" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="36%"  size="49" />
                                </span>
                                 <span class="gplus-ic fadeInfor">
                                    <SocialMediaIconsReact borderColor="rgba(240,238,238,1)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="36%" size="49" />
                                </span>
                                 <span class="li-ic fadeInfor">
                                    <SocialMediaIconsReact borderColor="rgba(240,238,238,1)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="36%"  size="49" />
                                </span>
                               
                        </div>

                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright: 
                     <span className='ml-2'   >
                        Syed Sabtain</span>
                </div>

                    </footer> 
         </>
    )}

    export default App