import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Box, Stack } from '@mui/material';

export default function ServicesMenu () {   
    const items = (
      <>
        {GenerateListItem("/tech", "Printers and Computers")}
        {GenerateListItem("/museums", "Museum Passes")}
        {GenerateListItem("/meetingrooms", "Meeting Rooms")}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"Library Services"}
          icon={<NewspaperIcon/>} 
          items={items}
          id={"services-menu"}/>
      </Stack>
    )
}