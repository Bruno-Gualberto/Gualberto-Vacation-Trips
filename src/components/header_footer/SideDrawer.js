import React from 'react';
import { scroller } from 'react-scroll';

import { Drawer, List, ListItem } from '@material-ui/core';;

const SideDrawer = (props) => {
  
  const links = [
    {where: 'featured', value: 'To top'},
    {where: 'tripinfo', value: 'Trip INFO'},
    {where: 'aboutportoseguro', value: 'About Porto Seguro'},
    {where: 'attractions', value: 'Attractions'},
    {where: 'location', value: 'Location'}
  ]

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      offset: -150,
      smooth: true
    });
    props.onClose(false);
  }

  const renderItem = (item) => (
    <ListItem button onClick={() => scrollTo(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  )

  return (
    <Drawer
      anchor= "right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        {links.map((item) => renderItem(item))}
      </List>
    </Drawer>
  )
}

export default SideDrawer;