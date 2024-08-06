import React, { useContext, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import '../../app/globals.scss';
import { MenuContext } from './menu/menu';
import useWindowDimensions from './hooks/useWindowDimensions';

interface props {
  name: string;
  icon: React.JSX.Element;
  items: React.JSX.Element;
  id: string;
}

export default function CreateMenuItem(props: props) {
  const {expanded, handleChange} = useContext(MenuContext);
  

    return (
        <Accordion expanded={expanded === 'panel1' + props.id} 
                   onChange={handleChange('panel1' + props.id)}
                   className='colors formatter'>
            <AccordionSummary aria-controls="panel1-content"
                              id={"panel1-header-" + props.id} className='colors'>
              <Stack spacing={{ xs: 1, sm: 2 }}
                     direction="row" 
                     flexWrap="nowrap"
                     className='AccordionSummary'>
                <div>
                  {props.name}
                </div>
                {props.icon}
              </Stack>
            </AccordionSummary>
            <AccordionDetails className='AccordionDetails'>
              <Box className='Line-2'/>
              {props.items}
            </AccordionDetails>
        </Accordion>
    )
}

export function GenerateListItem(path: string, desc: string)  {
    return (
      <Link href={path} className='colors'>
        <ListItem className='colors'>
          <ListItemButton>
            <ListItemText primary={desc} className={'colors'}/>
          </ListItemButton>
        </ListItem>
      </Link>
    )
  }