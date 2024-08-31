import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import '../../app/globals.scss';
import { MenuContext } from './menu/menu';

interface props {
  name: string;
  icon: React.JSX.Element;
  items: React.JSX.Element;
  id: string;
}

/** Creates an Accordion item with a title string on the left 
 * and an icon on the right, as well as a list of expandable
 * items that are passed in.
 * 
 * @param props 
 * @returns 
 */
export default function CreateMenuItem(props: props) {
  const {expanded, handleChange} = useContext(MenuContext);
  
  return (
    <Accordion 
    expanded={expanded === 'panel1' + props.id} 
    onChange={handleChange('panel1' + props.id)}
    className={expanded === 'panel1' + props.id ? 'focused-colors' : 'colors'}>
      <AccordionSummary aria-controls="panel1-content" id={"panel1-header-" + props.id}>
        <Stack spacing={{ xs: 1, sm: 2 }}
               direction="row" 
               flexWrap="nowrap"
               className='AccordionSummary'>
          <div>{props.name}</div>
          {props.icon}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Box className='Line-2'/>
        {props.items}
      </AccordionDetails>
    </Accordion>
  )
}

export function GenerateListItem(path: string, desc: string, id: string | false)  {
  const {expanded} = useContext(MenuContext);

  return (
    <Link href={path}>
      <ListItem>
        <ListItemButton>
          <ListItemText primary={desc} className={expanded === 'panel1' + id ? 'focused-colors' : 'colors'}/>
            </ListItemButton>
      </ListItem>
    </Link>
  )
}