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
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#111',
    color: '#ef672dff'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    fontWeight: '900',
    borderColor: '#ef672dff',
    color: '#ef672dff',
  },
  kupBSV: {
    margin: 10,
    background: '#ef672dff', 
    color: 'white', 
    fontWeight: '900',
    '&:hover' : {
      color: 'white', 
      background: '#ef672dff', 
      transform: 'scale(1.02)',
      transition: '0.25s ease-in-out'
    }
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

  const handleBuy = (e) => {
    e.preventDefault()
      window.open('https://www.kupbsv.pl', '_blank')
  }

  return (
    <div>
      <Button variant="outlined"  className={classes.button} onClick={handleClickOpen} >
        JAK UZYSKAĆ TOKEN?
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
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
          <div className="info">
            <div className="box">
              <a className="title">1. Wchodzimy na MoneyButton.com</a>
              <img></img>
              <p className="description">Zakładamy konto potrzebne do odebrania tokena.</p>
            </div>
            <div className="box">
              <a className="title">2. Klikamy „sign up" i wypełniamy wszystkie potrzebne do rejestracji pola</a>
              <img></img>
              <p className="description">PAMIĘTAJ o potwierdzeniu mailowym, które przyjdzie do Ciebie na koniec rejestracji.</p>
            </div>
            <div className="box">
              <a className="title">3. Po potwierdzeniu maila: </a>
              <img></img>
              <p className="description">Wbijamy na Tokenpow.com, klikamy LogIn i wybieramy Money Button - chwila magii - jesteśmy w miejscu docelowym.</p>
            </div>
            <div className="box">
              <a className="title">4. Na portalu Tokenpow.com:</a>
              <img></img>
              <p className="description">W prawym górnym rogu ekranu kliknij na swój profil i wybierz zakładkę „my profile".</p>
            </div>
            <div className="box">
              <a className="title">5. Na stronie wieszczemumowi<br/>sietuszyfrem.pl</a>
              <img></img>
              <p className="description">Skopiuj adres portfela i wklej go w odpowieniej rybruce, razem z adresem e-mail na który zakupiony został pre-order.</p>
            </div>
          </div>
          <div>
            <Button 
              variant="outlined" 
              className={classes.button} 
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
          height: 100vh;
          color: #ef672dff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          background: #111;  
        }
        .logo {
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .info {
          font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          font-weight: 900;
          width: 50%;
          margin-bottom: 25px;
          margin-top: 25px;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 900;
        }
        .kupbsv {
          margin-top: 10px;
        }
        .box {
          flex: 1 1 30%;
          margin: 15px;
          border: 2px solid #ef672dff;
          border-radius: 5px;
          padding-left: 5px;
          padding-right: 5px;
        }
        .description {
          text-align: justify;
        }
        @media only screen and (max-width: 499px) {
          .main {
            height: 200vh;
          }
          .info {
            width: 80%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 15px;
            margin-top: 1vh;
          }
          .box {
            margin: 10px;
          }
          .logo {
            margin-top: 15px;
            font-size: 4.25rem;
          }
          .kupbsv {
            text-align: center;
          }
          .description {
            text-align: left;
          }
        }
        @media only screen and (min-width: 500px) {
          .box:last-child {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}