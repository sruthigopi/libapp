import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
        <Toolbar>
        <Typography variant='h4' style={{color:'red',fontFamily:'cursive'}}>Library App</Typography>
         <Button variant='contained'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>View books</Link></Button> 
         <Button variant='contained'><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Addbooks</Link> </Button>
         {/* <Button variant='contained'><Link to={'/post'} style={{textDecoration:'none',color:'white'}}>Post</Link> </Button> */}
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
