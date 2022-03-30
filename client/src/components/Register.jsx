import * as React from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Register() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div id="main">
            <div className="registerForm">
            <center>
                <Typography variant='h4'>
                    Outlet Registration Form
                </Typography>
            </center>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={2} sx={{alignSelf: 'center'}}>
                    <Item sx={{ background: 'none', boxShadow: 0}}>
                        <InputLabel id="" sx={{fontSize: '1.15rem'}}>Employee Code</InputLabel>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" htmlFor="empCode">Employee Code</InputLabel>
                        <Select
                        name="empCode"
                        defaultValue=""
                        label='Employee Code'
                        >
                            <MenuItem value={1}>Ten</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                        <FormHelperText sx={{textAlign: 'right'}}>* Required</FormHelperText>
                    </Item>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={3} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Outlet Code *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Outlet Name *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={3} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Owner Name *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Contact Number *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3 '>
                <Grid item xs={3} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-multiline" 
                        maxRows={4} 
                        multiline 
                        label="Outlet Address *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Pin Code *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={2}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                    <Button variant="contained" sx={{backgroundColor: '#1e2761'}}>Register</Button>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item sx={{backgroundColor: '#1e2761', background: 'none', boxShadow: 0}}>
                    <Button variant="contained" sx={{backgroundColor: '#1e2761'}}>Cancel</Button>
                    </Item>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
