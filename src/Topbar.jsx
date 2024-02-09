import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
export function Topbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Movies
                </Typography>
                <Link to="/">
                    <Button color="inherit" className='bar-button'>
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button color="inherit" className='bar-button'>
                        Register
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}