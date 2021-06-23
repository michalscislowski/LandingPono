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
    fontSize: '1.1rem',
    fontWeight: '900',
    borderColor: '#ef672d',
    color: '#111',
    background: '#ef561c',
    transition: '0.25s',
    '&:hover' : {
      background: '#ef672d', 
      color: '#222',
      transform: 'scale(1.05)',
    }
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
        JAK ODEBRAĆ TOKEN?
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}  TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{fontWeight: '900'}}>
            JAK ODEBRAĆ TOKEN?
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main">
          <div className="box">
            <a className="title">1. Założenie konta moneybutton</a>
            <img></img>
            <p className="description">Wchodzimy na <a className="mb-button-clickable" onClick={() => window.open('https://www.moneybutton.com/')}>moneybutton.com</a>. 
              Klikamy <strong>sign up</strong> i wypełniamy wszystkie potrzebne do rejestracji pola. PAMIĘTAJ o potwierdzeniu emailowym, które przyjdzie do Ciebie na koniec rejestracji.</p>
          </div>
          <div className="box">
            <a className="title">2. Logowanie na tokenpow</a>
            <img></img>
            <p className="description">Wbijamy na <a className="mb-button-clickable" onClick={() => window.open('https://tokenpow.com/')}>tokenpow.com</a>, klikamy <strong>login</strong> i&nbsp;wybieramy Money Button - chwila magii i&nbsp;jesteśmy w miejscu docelowym.</p>
          </div>
          <div className="box">
            <a className="title">3. Zdobycie adresu portfela tokenpow</a>
            <img></img>
            <p className="description">W prawym, górnym rogu ekranu klikamy na swój profil i wybieramy zakładkę <strong>my profile</strong>. Kopiujemy adres portfela z pola <strong>Run Owner Address</strong>.</p>
          </div>
          <div className="box">
            <a className="title">4. Odebranie tokena</a>
            <img></img>
            <p className="description">Na <a className="mb-button-clickable" onClick={handleClose}>wieszczemumowisietuszyfrem.pl</a> wklejamy w odpowienie rubryki skopiowany adres portfela razem z&nbsp;adresem email, na który zakupiony został pre-order i klikamy <strong>ODBIERZ TOKEN!</strong></p>
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
        .mb-button-clickable {
          cursor: pointer;
          font-weight: 700;
          color: #0b7a75;
        }
        .mb-button-clickable:hover {
          color: #2c9c97;
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