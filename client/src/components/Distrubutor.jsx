import * as React from 'react';
import { Button, Input, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Distributor() {

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
                    Distributor Registration Form
                </Typography>
            </center>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={3} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <TextField
                        id="standard-basic" 
                        label="Company Name *" 
                        size='medium' 
                        variant="standard" 
                        sx={{background:'none', width: '100%'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <TextField 
                        id="standard-basic" 
                        label="Company Owner Name *" 
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
                        label="Experience (in Years) *" 
                        size='medium' 
                        variant="standard" 
                        sx={{width: '100%'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <TextField 
                        inputProps={{ min: 0, max: 10 }}
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="standard-basic" 
                        label="Annual Turnover (INR) *" 
                        size='medium' 
                        type='number'
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
                        label="Contact Number *" 
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
                        label="Email Address *" 
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
                        label="Firm Mailing Address *" 
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
            <Typography my={3} sx={{marginLeft:'26%'}}>
                Required Documents*
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2}>
                <Grid item xs={3} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <label htmlFor='proof' >Proof of Establishment</label>
                        <Input type='file' accept='image/*' required/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <label >GST Certificate</label>
                        <Input type='file' accept='image/*' required/>
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