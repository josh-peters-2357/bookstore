import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack } from '@mui/material';

export default function ServicesMenu () {   
  const id = "services-menu";

    const items = (
      <>
        {GenerateListItem("/tech", "Printers and Computers", id)}
        {GenerateListItem("/museums", "Museum Passes", id)}
        {GenerateListItem("/meetingrooms", "Meeting Rooms", id)}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"Library Services"}
          icon={<NewspaperIcon/>} 
          items={items}
          id={id}/>
      </Stack>
    )
}