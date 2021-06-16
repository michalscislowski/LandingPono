import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        fontWeight: '900',
        borderColor: '#ef672dff', 
        '& .Mui-focused' : {
          color: "#ef672dff"
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#ef672dff',
        },
        ['@media (max-width:749px)']: {
          width: '80%',
      },
      },
      
  }));

export default function Sendbutton() {
    const classes = useStyles();

  return (
    <div>
        <Button className={classes.inputStyle} variant="outlined" style={{color: '#ef672dff'}}>ZDOBĄDŹ TOKEN</Button>
        <style jsx>{`

         `}</style>
    </div>
  ) 
}
