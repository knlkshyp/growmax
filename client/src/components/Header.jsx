const react = require('react');
const reactDom = require('react-dom');
import '../style.css';
import {AppBar, Toolbar, Typography} from '@mui/material';

import logo from '../assets/images/GROWMAX.png';
import heroImg from '../assets/images/GROWMAX.png'

function Header(){
    return (
        <AppBar position="fixed" sx={{ backgroundColor:'#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography component="div">
            <a href ='#' className="logo me-auto"><img src={logo}></img></a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Header;