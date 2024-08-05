import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Link, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import '../../app/globals.scss';

export default function CreateMenuItem(
    { header, items, id }: { header: React.JSX.Element, items: React.JSX.Element, id: string })  {
    return (
        <Accordion>
            <AccordionSummary aria-controls="panel1-content"
                            id={"panel1-header-" + id}>
                <Stack spacing={{ xs: 1, sm: 2 }}
                    direction="row" 
                    useFlexGap 
                    flexWrap="wrap">
                    {header}
                </Stack>
            </AccordionSummary>
            <AccordionDetails>{items}</AccordionDetails>
        </Accordion>
    )
}

export function GenerateListItem(path: string, desc: string)  {
    return (
      <Link href={path} className='Accordion'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={desc} className='Accordion'/>
          </ListItemButton>
        </ListItem>
      </Link>
    )
  }