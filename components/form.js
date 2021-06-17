import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  inputStyle: {
    color: '#0b7a75',
    padding: 5,
    paddingLeft: 0,
    width: '700px', 
    marginBottom: 10,
    '& .Mui-focused' : {
      color: "#ef672dff"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#183f47',
    },
    ['@media (max-width:840px)']: {
      width: '80vw',
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
  multilineColor:{
    color: '#0b7a75',
    fontWeight: 600,
    borderWidth: "4px",
    borderBottomColor: "yellow !important",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
      borderColor: 'yellow',
      }
    },
  }
});

export default function Emailinput() {
  const classes = useStyles();
  const [valuesEmail, setValuesEmail] = useState({
    name: ""
  });
  const [valuesWallet, setValuesWallet] = useState({
    name: ""
  });

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

  const handleDataBaseSet = () => {
    console.log("email:", valuesEmail.name);
    console.log("wallet:", valuesWallet.name);
  };

  const error = isEmail(valuesEmail.name) !== true && valuesEmail.name.length !== 0;
  const errorWallet = false;

  return (
    <div className="form-input">
      <TextField
        InputProps={{
          classes: {
              input: classes.multilineColor
          }
        }}
        label="podaj email" 
        className={classes.inputStyle} 
        InputLabelProps={{style: {fontWeight: '700', color: '#ef672dff', letterSpacing: '1.2px'}}}
        value={valuesEmail.name}
        onChange={handleChangeEmail("name")}
        helperText={error ? "niepoprawny adres email" : null}
        error={error}
      />
      <TextField
        InputProps={{
          classes: {
              input: classes.multilineColor
          }
        }}
        label="podaj adres portfela TokenPow" 
        className={classes.inputStyle} 
        InputLabelProps={{style: {fontWeight: '700', color: '#ef672dff', letterSpacing: '1.2px'}}} 
        value={valuesWallet.name}
        onChange={handleChangeWallet("name")}
        helperText={errorWallet ? "Proszę wstawić poprawny adres portfela" : null}
        error={error}
      />
      <Button onClick={handleDataBaseSet} className={classes.buttonStyle} variant="outlined" style={{color: '#ef672dff'}}>ZDOBĄDŹ TOKEN</Button>
      <style jsx>{`
        .form-input {
          display: flex;
          flex-direction: column;
          align-items: center; 
        }
      `}</style>
    </div>
  )}
