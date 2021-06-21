import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PublicIcon from '@material-ui/icons/Public';

export default function MobileSocials() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="esape-mobile">
                    <img className="esape-logo" onClick={() => window.open('https://www.esape.pl/')} src="./esape-logo.png"></img>
                    <div className="psocials">
                        <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/esapestore')} /></a>
                        <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/esape.pl/')}/></a>
                        <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCS5Z2X09GVTAlYx0b7RhKsg')}/></a>
                        <a className="website"><PublicIcon aria-label="Youtube.com" onClick={() => window.open('https://www.esape.pl/')}/></a>
                    </div>
                </div>
                <div className="banach-mobile">
                    <img className="banach-logo" src="./banach-logo.png"></img>
                    <div className="socials">
                        <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                        <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                        <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                        <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    width: 80vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .banach-logo {
                    margin-left: 5px;
                    margin-bottom: 7.5px;
                    width: 155px;
                    height: 22px;
                    cursor: pointer;
                  }
                .esape-logo {
                    margin-left: 10px;
                    margin-bottom: -5px;
                    width: 150px;
                    height: 50px;
                    cursor: pointer;
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
                @media only screen and (max-width: 1100px) {
                    .esape-mobile {
                        margin-right: 30px;
                    }
                    .banach-mobile {
                        margin-top: 15.5px;
                    }
                }
                @media only screen and (max-width: 499px) {
                    .esape-mobile {
                        margin-right: 15px;
                    }
                }
            `}</style>
        </div>
    )
}