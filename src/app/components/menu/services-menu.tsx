import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Box, Stack } from '@mui/material';

export default function ServicesMenu () {   
    const header = (
      <Stack spacing={{ xs: 1, sm: 2 }}
      direction="row" 
      flexWrap="nowrap"
      className='AccordionSummary'>
        <div>
          Library Services
        </div>
        <NewspaperIcon/>
      </Stack>)

    const items = (
      <>
        <Box className='Line-2'/>
        {GenerateListItem("/tech", "Printers and Computers")}
        {GenerateListItem("/museums", "Museum Passes")}
        {GenerateListItem("/meetingrooms", "Meeting Rooms")}
      </>  
    )

    return (
      <CreateMenuItem 
        header={header} 
        items={items}
        id={"services-menu"}/>
    )
}