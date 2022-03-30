import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import OrderManagement from './OrderManagement';
import logo from '../assets/images/GROWMAX.png'
import '../style.css'
import Distributor from './Distrubutor';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';

const drawerWidth = 240;

export default function ClippedDrawer() {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header/>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { color: 'white', backgroundColor: '#1e2761', width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            Account Details
            <Divider />
            <List>
              {['Register', 'Order Management', 'Distributor'].map((text) => (
                <ListItem onClick={(e)=>{
                  if(e.target.innerText === 'Register'){
                    document.getElementById('register').style.display="block";
                    document.getElementById('ordMgr').style.display="none";
                    document.getElementById('distributor').style.display="none";
                  } else if(e.target.innerText === 'Distributor'){
                    document.getElementById('register').style.display="none";
                    document.getElementById('ordMgr').style.display="none";
                    document.getElementById('distributor').style.display="block";
                  } else if(e.target.innerText === 'Order Management'){
                    document.getElementById('register').style.display="none";
                    document.getElementById('ordMgr').style.display="block";
                    document.getElementById('distributor').style.display="none";
                  }
                }} sx={{ ':focus':{backgroundColor: '#1e2790'} }} button key={text}>
                <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1 }}>
          <Toolbar />
          <div id='ordMgr'><OrderManagement/></div>
          <div id='distributor' style={{'display': 'none'}}><Distributor/></div>
          <div id='register' style={{'display': 'none'}}><Register/></div>
        </Box>
        <Footer/>
      </Box>
    </>
  );
}
