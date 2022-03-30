import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, FormHelperText, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { border } from '@mui/system';

export default function OrderManagement() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };

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
            <center><TextField id="outletCode" className="outletCode" disabled/></center>
            <Grid container direction="row" justifyContent="center" alignItems='center' spacing={2} className='mt-3'>
                <Grid item xs={2} sx={{alignSelf: 'center'}}>
                    <Item sx={{alignSelf: 'center', background: 'none', boxShadow: 0}}>
                        <InputLabel id="" sx={{fontSize: '1.3rem'}}>Employee Code</InputLabel>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Employee Code</InputLabel>
                        <Select
                        name="empCode"
                        onchange="openCamera(this)"
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
                <Grid item xs={2} sx={{alignSelf: 'center'}}>
                    <Item sx={{ background: 'none', boxShadow: 0}}>
                        <InputLabel id="" sx={{fontSize: '1.3rem'}}>Distributor Code</InputLabel>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Distributor Code</InputLabel>
                        <Select
                        name="distribCode"
                        defaultValue=""
                        label='Distributor Code'
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
                <Grid item xs={2} sx={{alignSelf: 'center'}}>
                    <Item sx={{ background: 'none', boxShadow: 0}}>
                        <InputLabel id="" sx={{fontSize: '1.3rem'}}>Products</InputLabel>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Products</InputLabel>
                        <Select
                        onchange="addList()"
                        defaultValue=""
                        label='Products'
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
                <Grid item xs={1.5}>
                    <Item sx={{background: 'none', boxShadow: 0}}>
                    <Button variant="contained" sx={{backgroundColor: '#1e2761'}}>Order</Button>
                    </Item>
                </Grid>
                <Grid item xs={1.5}>
                    <Item sx={{backgroundColor: '#1e2761', background: 'none', boxShadow: 0}}>
                    <Button variant="contained" sx={{backgroundColor: '#1e2761'}}>Cancel</Button>
                    </Item>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
