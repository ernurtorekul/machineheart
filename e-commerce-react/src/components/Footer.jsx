import React from 'react';
import {Button} from './Button';
import './Footer.css';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Sign up to receive updates
            </p>
            <p className="footer-subscription-text">
                By providing this information, you are opting to receive emails, promotions and you agree to the UMG/MachineHeart privacy policy and terms of use.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='your@email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Submit</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div class="footer-link-items">
                    <h2>Contact us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                    <Link to='/'>Other</Link>
                </div>
                <div class="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Spotify</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'> 
                        {/* mHeart <i className="fa-regular fa-heart fa-2xs heart-logo"/> */}
                        mHeart <img src="/images/logo1.png" className='heart-logo' alt=""/>
                    </Link>
                </div>
                <small className='website-rights'>mHeart © 2024</small>
                <div className="social-icons">
                    <a className="social-icon-link instagram" href='https://www.instagram.com/machineheart/' target='_blank' aria-label='Instagram'>  {/*that target='_blank' opens the link in another page */}
                        <i className='fab fa-instagram'/>
                    </a>
                    <a className="social-icon-link spotify" href='https://open.spotify.com/artist/4uethVhVpoyO3OhT40JH1o?si=iLv2TtzRTRSsQizSsw1UAg' target='_blank' aria-label='Spotify'>  {/*that target='_blank' opens the link in another page */}
                        <i className='fab fa-spotify'/>
                    </a>
                    <a className="social-icon-link youtube" href='https://www.youtube.com/@machineheart' target='_blank' aria-label='Youtube'>  {/*that target='_blank' opens the link in another page */}
                        <i className='fab fa-youtube'/>
                    </a>
                    <a className="social-icon-link twitter" href='https://x.com/machineheart?s=20' target='_blank' aria-label='Twitter'>  {/*that target='_blank' opens the link in another page */}
                        <i className='fab fa-twitter'/>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer