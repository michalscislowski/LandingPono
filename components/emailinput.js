import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  inputStyle: {
    width: '700px', 
    fontWeight: '900', 
    '& .Mui-focused' : {
      color: "#020202"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#020202',
    },
    ['@media (max-width:749px)']: {
      width: '80%',
  },
  },
});

export default function Emailinput() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function isEmail(s) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(s);
 }


  const error = isEmail(values.name) !== true && values.name.length !== 0;

  return <TextField
    label="wpisz swojego maila" 
    className={classes.inputStyle} 
    inputProps={{style: {fontWeight: '700'}}} 
    InputLabelProps={{style: {fontWeight: '900'}}} 
    value={values.name}
    onChange={handleChange("name")}
    helperText={error ? "Proszę wstawić poprawnego maila" : null}
    error={error}
    />
}
