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
              <div className="logo">
                <img src="./pondemialogo.png" />
              </div>
              <div className="middle">
                <div className="psmall">E S A P Ǝ</div>
                <div className="psocials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/esapestore')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/esape.pl/')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCS5Z2X09GVTAlYx0b7RhKsg')}/></a>
                      <a className="website"><PublicIcon aria-label="Youtube.com" onClick={() => window.open('https://www.esape.pl/')}/></a>
                </div>
                <iframe width="640" height="320 "
                      src="https://www.youtube.com/embed/OBqCR41cDL0?autoplay=1&loop=1">
                </iframe> 
                <div className="bsocials">
                      <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                      <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                      <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                      <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
                      <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                </div>
                <div className="bsmall">Banach Group</div>
                
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
      top: 0;
      position: relative;
      box-sizing: border-box;
    }
    img {
      height: 24vh;
      width: 60vw;
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
    .bsmall, .psmall {
      font-size: 1.5rem;
      color: white;
      font-weight: 600;
      writing-mode: vertical-rl;
      text-orientation: upright; 
    }
    .psmall {
      padding-top: 45px;
    }
    .bsmall {
      padding-top: 10px;
    }
    .middle {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .bsocials, .psocials {
      display: flex;
      flex-direction: column;
      color: #ef672dff;
    }
    .bsocials {
      margin-right: 20px;
    }
    .psocials {
      margin-left: 20px;
    }
    .bsocials a, .psocials a {
      transition: 0.3s;

    }
    .bsocials a {
      padding-top: 30px;
      margin-left: 20px;
    }
    .psocials a {
      padding-top: 40px;
      margin-right: 20px;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.15);
      color: #fd7f3c;
    }
    @media only screen and (max-width: 999px) {
      img {
        height: 15vh;
        width: 90vw;
      }
      .middle {
        flex-direction: column;
        writing-mode: horizontal-tb;
        align-items: center;
      }
      legend {
        font-size: 0.75rem;
      }
      iframe {
        width: 90vw;
      }
      .psmall, .bsmall{
        text-orientation: mixed;
        writing-mode: horizontal-tb;
      }
      .bsmall {
        padding-bottom: 5px;
      }
      .psmall {
        padding-bottom: 5px;
      }
      .psocials, .bsocials{
        flex-direction: row;
      }
      .bsocials {
        padding-left: 50px
      }
      .psocials {
        padding-left: 10px
      }
      .psocials a, .bsocials a{
        margin: 0 30px 10px 0;
      }
      .psocials a {
        padding-top: 5px;
      }
      .bsocials a{
        padding-top: 15px;
      }
    }
    @media only screen and (max-width: 499px) {
      img {
        padding-top: 10px;
        height: 15vh;
        width: 90vw;
      }
      .middle {
        flex-direction: column;
        writing-mode: horizontal-tb;
        align-items: center;
      }
      legend {
        font-size: 0.75rem;
      }
      iframe {
        width: 90vw;
      }
      .psmall, .bsmall{
        text-orientation: mixed;
        writing-mode: horizontal-tb;
      }
      .bsmall {
        padding-bottom: 5px;
      }
      .psmall {
        padding-bottom: 5px;
      }
      .psocials, .bsocials{
        flex-direction: row;
      }
      .bsocials {
        padding-left: 50px
      }
      .psocials {
        padding-left: 10px
      }
      .psocials a, .bsocials a{
        margin: 0 30px 10px 0;
      }
      .psocials a {
        padding-top: 5px;
      }
      .bsocials a{
        padding-top: 15px;
      }
    }
  `}</style>
      </div>
    );
  }