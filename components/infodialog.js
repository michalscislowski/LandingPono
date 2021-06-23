import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#111',
    color: '#ef672d'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonLetsGo: {
    fontWeight: '900',
    color: '#111',
    background: '#ef672d',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '900',
    '&:hover' : {
      background: '#ef561c', 
      color: '#222',
    }
  },
  button: {
    fontWeight: '900',
    borderColor: '#ef672d',
    color: '#ef672d',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    (function(w,d,v3){
      w.chaportConfig = {
      appId : '60d2750e9efe047a215af02e',
    };
        
    if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
        
  },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined"  className={classes.button} onClick={handleClickOpen} >
        JAK ZDOBYĆ TOKEN?
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}  TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{fontWeight: '900'}}>
            JAK UZYSKAĆ TOKEN?
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main">
          <div className="box">
            <a className="title">1. Założenie konta <a className="mb-button" onClick={() => window.open('https://www.moneybutton.com/')}>moneybutton</a></a>
            <img></img>
            <p className="description">Wchodzimy na <a className="mb-button" onClick={() => window.open('https://www.moneybutton.com/')}>moneybutton.com</a>. 
              Klikamy „sign up" i wypełniamy wszystkie potrzebne do rejestracji pola. PAMIĘTAJ o potwierdzeniu emailowym, które przyjdzie do Ciebie na koniec rejestracji.</p>
          </div>
          <div className="box">
            <a className="title">2. Logowanie na <a className="mb-button" onClick={() => window.open('https://tokenpow.com/')}>tokenpow.com</a></a>
            <img></img>
            <p className="description">Wbijamy na <a className="mb-button" onClick={() => window.open('https://tokenpow.com/')}>tokenpow.com</a>, klikamy Login i&nbsp;wybieramy Money Button - chwila magii i&nbsp;jesteśmy w miejscu docelowym.</p>
          </div>
          <div className="box">
            <a className="title">3. Zdobycie adresu portfela <a className="mb-button" onClick={() => window.open('https://tokenpow.com/')}>tokenpow</a></a>
            <img></img>
            <p className="description">W prawym, górnym rogu ekranu kliknij na swój profil i wybierz zakładkę 'my profile'. Skopiuj adres portfela z pola 'Run Owner Address'.</p>
          </div>
          <div className="box">
            <a className="title">4. Odebranie tokena na <a className="mb-button" onClick={handleClose}>wieszczemumowisietuszyfrem.pl</a></a>
            <img></img>
            <p className="description">Skopiowany adres portfela wklejamy w odpowieniej rubryce razem z adresem e-mail, na który zakupiony został pre-order i klikamy ZDOBĄDŹ TOKEN!</p>
          </div>
          <div>
            <Button 
              variant="outlined" 
              className={classes.buttonLetsGo} 
              startIcon={<KeyboardArrowRightIcon />} 
              onClick={handleClose}
            >
              ZACZYNAJMY
            </Button>
          </div>
        </div>
      </Dialog>
      <style jsx>{`
        .main {
          color: #ef672d;
          background: #111; 
          display: flex;
          flex: 1;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-around;
          align-items: center;
        }
        .box {
          width: 60%;
          max-width: 750px;
          min-width: 400px;
          padding-top: 15px;
          border-bottom: 1px solid #0b7a75;
        }
        .title {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .description {
          padding-bottom: 15px;
          line-height: 1.75rem;
          text-align: justify;
        }
        .mb-button {
          cursor: pointer;
          font-weight: 700;
        }
        .mb-button:hover {
          color: #ff893f;
        }
        @media only screen and (max-width: 499px) {
          .box {
            margin: auto;
            min-width: 300px;
            width: 90%;
            margin-top: 15px;
          }
          .description {
            padding-bottom: 15px;
            text-align: justify;
          }
          .title {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}