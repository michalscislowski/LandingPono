import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Emailinput from './emailinput'
import Walletinput from './walletinput';


export default function Main() {
    return (
      <div className="main">
              <div className="logo">
                <div>PONDEMIA</div>
              </div>
                <iframe width="420" height="315 autoplay=1"
                    src="https://www.youtube.com/watch?v=OBqCR41cDL0">
                </iframe> 
              <Emailinput />
              <Walletinput />
              <div className="bottom">
                <div className="socials">
                    <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                    <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                    <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                    <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
                    <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
                    <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                </div>
                <div className="small">by BanachGroup</div>
              </div>
        <style jsx>{`
    .main {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center; 
      width: 100vw;
      background-image: radial-gradient(rgba(61, 107, 212, 1), rgba(22, 24, 45, 1));
    }
    .logo {
        font-size: 5rem;
        font-weight: 900;
        color: #ef672dff;
    }
    .small {
      font-size: 1rem;
      color: #ef672dff;
      position: relative;
      left: 4rem;
    }
    .linktext {
        min-width: 1091px;
        height: 40px;
    }
    .dialogs {
      display: flex;
    }
    .socials {
      display: flex;
      justify-content: center;
      padding-right: 15px;
      border-bottom: 1px solid #020202;
      color: #ef672dff;
    }
    .socials a {
      margin-left: 15px;
      transition: 0.3s;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.15);
      color: #020202;
    }
    .twetch {
      margin-top: 2px;
      width: 20px;
      height: 20px;
      background: url('/twetchlogoorange.png'), url('/twetchlogoblack.png');
      background-size: 20px 20px;
    }
    .twetch:hover {
    background: url('/twetchlogoblack.png');
    background-size: 20px 20px;
  }
    @media only screen and (max-width: 499px) {
      .logo {
        margin-bottom: -0.65rem; 
      }
    }
  `}</style>
      </div>
    );
  }