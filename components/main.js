import React, { useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyForm from './form'
import PublicIcon from '@material-ui/icons/Public';
import MobileSocials from './mobileSocials';


export default function Main() {
    return (
      <div className="main">
              <div className="logo">
                <img src="./pondemialogo.png" />
              </div>
              <div className="wrapper">
                <div className="esape">
                  <div className="psmall">E S A P Ǝ</div>
                    <div className="psocials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/esapestore')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/esape.pl/')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCS5Z2X09GVTAlYx0b7RhKsg')}/></a>
                      <a className="website"><PublicIcon aria-label="Youtube.com" onClick={() => window.open('https://www.esape.pl/')}/></a>
                    </div>
                </div>

                <div className="youtube-embeded">
                  <iframe className="youtube-pondemia"
                      src="https://www.youtube.com/embed/OBqCR41cDL0?autoplay=0&loop=1">
                  </iframe> 
                </div>

                <div className="banach">
                  <div className="psmall-banach">BANACH</div>
                  <div className="socials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                      <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                  </div>
                </div>
              </div>
              <div className="formularz"><MyForm /></div>
              <div className="mobile-socials">
                <MobileSocials />
              </div>
              <div className="small">&copy; 2021 BanachGroup</div>
        <style jsx>{`
    .main {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center; 
      width: 100vw;
      background-image: radial-gradient(rgba(45, 48, 71, 1), rgba(22, 24, 45, 1));    
    }
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .youtube-embeded {
      margin-bottom: 5px;
    }
    .esape, .banach {
      margin: 50px;
    }
    .esape-mobile, .banach-mobile {
      display: none;
    }
    .logo {
      position: relative;
      box-sizing: border-box;
      max-width: 900px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
    .youtube-pondemia {
      width: 640px;
      height: 320px;
    }
    .psmall, .psmall-banach {
      text-align: center;
      font-size: 2rem;
      color: white;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .psmall-banach {
      letter-spacing: 3px;
    }
    .small{
      font-size: 1rem;
      color: #ef672dff;
      width: 100%;
      text-align: center;
      padding: 5px;
      font-weight: 400;
      color: white;
    }
    .socials, .psocials {
      display: flex;
      justify-content: center;
      padding-right: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid #0b7a75;
      color: #ef672dff;
    }
    .psocials {
      margin-bottom: 15px;
    }
    .socials a, .psocials a {
      margin-left: 15px;
      transition: 0.3s;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.15);
      color: #fd7f3c;
      margin-left: 15px;
      transition: 0.3s;
    }
    .twetch {
      margin-top: 2px;
      width: 20px;
      height: 20px;
      background: url('/twetchlogoorange.png');
      background-size: 20px 20px;
    }
    .mobile-socials{
      display: none;
    }
    @media only screen and (max-width: 1100px) {
      .banach, .esape {
        display: none;
      }
      .mobile-socials{
        display: block;
        margin-bottom: 15px;
      }
    }
    @media only screen and (max-width: 699px) {
      .youtube-pondemia {
        width: 90vw;
        height: 45vw;
      }
      legend {
        font-size: 1.25rem;
      }
    }
    @media only screen and (max-width: 499px) {
      legend {
        font-size: 0.75rem;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 0;
      }
      .esape, .banach {
        margin: 5px;
      }
      .logo {
        margin-bottom: 10px;
      }
      .mobile-socials {
        margin-bottom: 0;
      }
    }
  `}</style>
      </div>
    );
  }