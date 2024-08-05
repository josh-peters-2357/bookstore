import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Link, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import '../../app/globals.scss';
import { MenuContext } from './menu/menu';

export default function CreateMenuItem({ header, items, id }: { header: React.JSX.Element, items: React.JSX.Element, id: string }) {
  const {expanded, handleChange} = useContext(MenuContext);

    return (
        <Accordion expanded={expanded === 'panel1' + id} 
                   onChange={handleChange('panel1' + id)}>
            <AccordionSummary aria-controls="panel1-content"
                              id={"panel1-header-" + id}
                              className='main-menu-items'
                            >
                {header}
            </AccordionSummary>
            <AccordionDetails>{items}</AccordionDetails>
        </Accordion>
    )
}

export function GenerateListItem(path: string, desc: string)  {
    return (
      <Link href={path} className='Accordion'>
        <ListItem>
          <ListItemButton>
            <ListItemText primary={desc} className='Accordion'/>
          </ListItemButton>
        </ListItem>
      </Link>
    )
  }