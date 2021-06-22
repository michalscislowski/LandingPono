import React from 'react';
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined"  className={classes.button} onClick={handleClickOpen} >
        JAK UZYSKAĆ TOKEN?
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
          <div className="child">
            <div className="box">
              <a className="title">1. Wchodzimy na <a className="mb-button" onClick={() => window.open('https://www.moneybutton.com/')}>moneybutton.com</a></a>
              <img></img>
              <p className="description">Zakładamy konto na platformie moneybutton potrzebne do odebrania tokena.</p>
            </div>
            <div className="box">
              <a className="title">2. Klikamy „sign up" i wypełniamy wszystkie potrzebne do rejestracji pola</a>
              <img></img>
              <p className="description">PAMIĘTAJ o potwierdzeniu mailowym, które przyjdzie do Ciebie na koniec rejestracji.</p>
            </div>
            <div className="box">
              <a className="title">3. Logoujemy się na <a className="mb-button" onClick={() => window.open('https://tokenpow.com/')}>tokenpow.com</a></a>
              <img></img>
              <p className="description">Wbijamy na tokenpow.com, klikamy LogIn i&nbsp;wybieramy Money Button - chwila magii - jesteśmy w miejscu docelowym.</p>
            </div>
            <div className="box">
              <a className="title">4. Na portalu <a className="mb-button" onClick={() => window.open('https://tokenpow.com/')}>tokenpow.com</a>:</a>
              <img></img>
              <p className="description">W prawym górnym rogu ekranu kliknij na swój profil i wybierz zakładkę „my profile".</p>
            </div>
            <div className="box">
              <a className="title">5. Na stronie <a className="mb-button" onClick={handleClose}>wieszczemumowisietuszyfrem.pl</a></a>
              <img></img>
              <p className="description">Skopiuj adres portfela i wklej go w odpowieniej rybruce razem z adresem e-mail na który zakupiony został pre-order.</p>
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
          overflow: hidden;
          position: relative;
        }
        .child {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: -17px;
          overflow: scroll;
        }
        .box {
          width: 60%;
          max-width: 750px;
          min-width: 400px;
          border-bottom: 1px solid #0b7a75;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 700;
        }
        .description {
          padding-bottom: 15px;
        }
        .mb-button {
          cursor: pointer;
        }
        @media only screen and (max-width: 499px) {
          .box {
            margin: auto;
            min-width: 300px;
            width: 90%;
            margin-top: 15px;
            margin-left: 3vw;
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