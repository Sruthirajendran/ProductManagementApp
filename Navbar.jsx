import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" sx={{flexGrow:1}}>
                ProductManagement
            </Typography>
            <Link to ='/'>
            <Button color='inherit' variant='contained'>Home</Button>
            </Link>&nbsp;
           <Link to='/add-product'>
           <Button color='inherit' variant='contained'>Add Product</Button>
           </Link>&nbsp;
           
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
