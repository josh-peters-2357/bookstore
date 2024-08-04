import React from 'react';
import { Accordion,
         AccordionDetails, 
         AccordionSummary, 
         List, 
         ListItem, 
         ListItemButton, 
         ListItemText, 
         Stack } from '@mui/material';
import '../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';

export default function CatalogueMenu () {
    return (
        <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Stack spacing={{ xs: 1, sm: 2 }}
                   direction="row" 
                   useFlexGap 
                   flexWrap="wrap">
                <BookIcon className='book-accordion'/>
                <div className='book-accordion'>
                    Catalogue
                </div>
            </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Books" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Movies" />
            </ListItemButton>
          </ListItem>
        </List>
        </AccordionDetails>
        </Accordion>
    )
}