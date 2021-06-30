import React, { useState } from 'react';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value)
  }

  const handleScroll = () => {
    if(window.scrollY > 0) {
      setHeaderScroll(true)
    } else {
      setHeaderScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerScroll ? "#082245" : "transparent",
        boxShadow: "none",
        padding: "10px 0px",
        transition: "all .3s"
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">Gualberto</div>
          <div className="header_logo_title">Vaccation Trips</div>
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon/>
        </IconButton>

        <SideDrawer 
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />

      </Toolbar>
    </AppBar>
  )
}

export default Header;
