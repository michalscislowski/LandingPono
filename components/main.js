import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PublicIcon from '@material-ui/icons/Public';
import MyForm from './form'

export default function Main() {
    return (
      <div className="main">
              <fieldset className="logo">
                <div className="text">PONDEMIA</div>
                <legend>S Y N A L K A P O N O</legend>
              </fieldset>
              <div className="middle">
                <div className="bsmall">Banach Group</div>
                <div className="bsocials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                      <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                      <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                      <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
                </div>
                <iframe width="640" height="320 "
                      src="https://www.youtube.com/embed/OBqCR41cDL0?autoplay=1&loop=1">
                </iframe> 
                <div className="psocials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/esapestore')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/esape.pl/')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCS5Z2X09GVTAlYx0b7RhKsg')}/></a>
                      <a className="website"><PublicIcon aria-label="Youtube.com" onClick={() => window.open('https://www.esape.pl/')}/></a>
                </div>
                <div className="psmall">E S A P Ǝ</div>
              </div>
              <MyForm />
              <div className="bottom">
                
              </div>
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
    .logo {
      margin: 20px;
      position: relative;
      box-sizing: border-box;
      color: #ef672dff;
      border: 2px solid #ef672dff;
    }
    .youtube-pondemia {
      width: 640px;
      height: 320px;
    }
    .text {
      margin: 5px 30px;
      font-size: 5rem;
      font-weight: 900;
    }
    legend {
      position: absolute;
      bottom: 0;
      font-size: 1.5rem;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 0 5px;
      background-image: linear-gradient(180deg, rgba(35, 38, 60, 1), rgba(37, 39, 62, 1));
    }
    .bsmall {
      font-size: 1.5rem;
      color: white;
      font-weight: 600;
      writing-mode: vertical-rl;
      text-orientation: upright;
      padding: 13px;
    }
    .psmall {
      font-size: 1.5rem;
      color: white;
      font-weight: 600;
      padding: 60px 0 0 40px;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    .middle {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-right: 10px;

    }
    .bsocials {
      display: flex;
      flex-direction: column;
      color: #ef672dff;
      padding:5px;
    }
    .bsocials a {
      transition: 0.3s;
      margin: 12px 40px;
    }
    .psocials {
      display: flex;
      flex-direction: column;
      color: #ef672dff;
      padding: 0 0 0 5px;
    }
    .psocials a {
      margin: 45px 0 0 40px;
      transition: 0.3s;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.15);
      color: #fd7f3c;
    }
    .twetch {
      margin-top: 2px;
      width: 20px;
      height: 20px;
      background: url('/twetchlogoorange.png');
      background-size: 20px 20px;
    }
    @media only screen and (max-width: 699px) {
      .youtube-pondemia {
        width: 90vw;
        height: 45vw;
      }
      .text {
        font-size: 3.5rem;
      }
      legend {
        font-size: 1rem;
      }
    }
    @media only screen and (max-width: 499px) {
      .text {
        font-size: 2.5rem;
      }
      legend {
        font-size: 0.75rem;
      }
    }
  `}</style>
      </div>
    );
  }