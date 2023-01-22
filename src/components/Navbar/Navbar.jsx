import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItems, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/HomelyTreasures.png';
import makeStyles from './navStyles';

const Navbar = () => {
  const classes = makeStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Typography>
                <img src={logo} alt="Homely Treasures Logo" height='25px' className={classes.image}/>
                Homely Treasures by Andy
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label='Show items in cart' color='inherit'>
                <Badge badgeContent={1} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
        </AppBar>
    </div>
  )
}

export default Navbar