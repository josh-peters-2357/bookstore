import React, { useContext, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Link, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import '../../app/globals.scss';
import { MenuContext } from './menu/menu';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function CreateMenuItem({ header, items, id }: { header: React.JSX.Element, items: React.JSX.Element, id: string }) {
  const {expanded, handleChange} = useContext(MenuContext);
  

    return (
        <Accordion expanded={expanded === 'panel1' + id} 
                   onChange={handleChange('panel1' + id)}
                   className='colors'>
            <AccordionSummary aria-controls="panel1-content"
                              id={"panel1-header-" + id} className='colors'>
              {header}
            </AccordionSummary>
            <AccordionDetails className='AccordionDetails'>{items}</AccordionDetails>
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