import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { GridMenuIcon } from '@mui/x-data-grid'
import { FunctionComponent } from 'react'

export interface NavbarInterface {}

const Navbar: FunctionComponent<NavbarInterface> = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" arial-label="menu" sx={{ mr: 2}}>
                    <GridMenuIcon/>    
                </IconButton>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }} >
                    React gentleman
                </Typography>
                <Button color="inherit"> Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar