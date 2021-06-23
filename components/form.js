import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import axios from 'axios'
import { store } from 'react-notifications-component';
const url_create = process.env.NEXT_PUBLIC_HOST_URL + "/api/addReceiver";

const useStyles = makeStyles({
  inputStyle: {
    color: '#0b7a75',
    paddingBottom: 5,
    width: '640px', 
    marginBottom: 10,
    '& .Mui-focused' : {
      color: "#ef672dff"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183f47',
    },
    ['@media (max-width:699px)']: {
      width: '90vw',
    },
    ['@media (max-width:499px)']: {
      marginBottom: 15,
    },
  },
  buttonStyle: {
    fontWeight: '900',
    borderColor: '#ef672dff',
    marginTop: 15,
    marginBottom: 10,
    ['@media (max-width:499px)']: {
      marginTop: 20,
    },
  },
  buttonAccept: {
    fontWeight: '600',
    fontSize: '0.75rem'
  },
  multilineColor:{
    color: '#0b7a75',
    fontWeight: 600,
    borderWidth: "4px",
  },
  potwierdzenie: {
    fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#ef672d',
  },
  dialogTitle: {
    background: '#111', 
    color: '#ef672d',
  }
});

export default function Emailinput() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [valuesEmail, setValuesEmail] = useState({
    name: ""
  });
  const [valuesWallet, setValuesWallet] = useState({
    name: ""
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeEmail = name => event => {
    setValuesEmail({ ...valuesEmail, [name]: event.target.value });
  };

  const handleChangeWallet = name => event => {
    setValuesWallet({ ...valuesWallet, [name]: event.target.value });
  };

  function isEmail(s) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(s);
  }
  function isWallet(s) {
    const regexp = /^[a-zA-Z0-9]*$/;
    return regexp.test(s);
  }
  const handleTokenButton = () => {
    emptyInputError ? addWarningNotofication() : null;
    if (!emailError && !walletError && valuesEmail.name.length !== 0 && valuesWallet.name.length !== 0) {
      setOpen(true);
      console.log(emptyInputError);
    }
  }

  function addSuccessNotification() {
    store.addNotification({
      title: "Sukces!",
      message: "Twoje zgłoszenie zostało przyjęte!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 4000,
        showIcon: true,
      }
    });
  }

  function addWarningNotofication() {
    store.addNotification({
      title: "Uwaga!",
      message: "Oba pola muszą być wypełnione!",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 4000,
        showIcon: true,
      }
    });
  }

  const handleDataBaseAddition = () => {
    console.log("dodawanie do bazy");
    if (!emailError && !walletError && valuesEmail.name.length !== 0 && valuesWallet.name.length !== 0) {
      console.log("email:", valuesEmail.name);
      console.log("wallet:", valuesWallet.name);
      const newUser = {
        email: valuesEmail.name,
        wallet_addres: valuesWallet.name,
        status: "Added"
      };
      console.log(url_create, newUser);
      axios.post(url_create, newUser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        res.status(200).end();
      })
      setValuesEmail({
        name: ""
      });
      setValuesWallet({
        name: ""
      });
      setOpen(false);
      addSuccessNotification();
    }
  };

  const emailError = isEmail(valuesEmail.name) !== true && valuesEmail.name.length !== 0;
  const walletError = isWallet(valuesWallet.name) !== true && valuesWallet.name.length !== 0;
  const emptyInputError = valuesEmail.name.length == 0 || valuesWallet.name.length == 0

  return (
    <div className="form-input">
      <div>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{backgroundColor: 'transparent'}}
        >
          <DialogContent style={{background: '#111'}}>
            <DialogContentText className={classes.potwierdzenie} component={'span'} id="alert-dialog-slide-description">
              Czy poniższe dane się zgadzają?
              <ul>
                <li><span>email: </span> {valuesEmail.name}</li>
                <li><span>adres portfela: </span> {valuesWallet.name}</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{background: '#111'}}>
            <Button className={classes.buttonAccept} onClick={handleClose} variant="contained" color="secondary">
              Popraw
            </Button>
            <Button className={classes.buttonAccept} onClick={handleDataBaseAddition} variant="contained" color="primary">
              Akceptuj
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <TextField
        InputProps={{
          classes: {
              input: classes.multilineColor
          }
        }}
        label="podaj email" 
        className={classes.inputStyle} 
        InputLabelProps={{style: {fontWeight: '400', color: '#ef672dff', letterSpacing: '1.2px'}}}
        value={valuesEmail.name}
        onChange={handleChangeEmail("name")}
        helperText={emailError ? "niepoprawny adres email" : null}
        error={emailError}
      />
      <TextField
        InputProps={{
          classes: {
              input: classes.multilineColor
          }
        }}
        label="podaj adres portfela TokenPow" 
        className={classes.inputStyle} 
        InputLabelProps={{style: {fontWeight: '400', color: '#ef672dff', letterSpacing: '1.2px'}}} 
        value={valuesWallet.name}
        onChange={handleChangeWallet("name")}
        helperText={walletError ? "niepoprawny adres portfela" : null}
        error={walletError}
      />
        <Button onClick={handleTokenButton} className={classes.buttonStyle} variant="outlined" style={{color: '#ef672d'}}>ZDOBĄDŹ TOKEN</Button>
      <style jsx>{`
        .form-input {
          display: flex;
          flex-direction: column;
          align-items: center; 
        }
        span {
          color: #bf5224;
          font-weight: 350;
        }
        li {
          margin-left: -10px;
        }
      `}</style>
    </div>
  )}
