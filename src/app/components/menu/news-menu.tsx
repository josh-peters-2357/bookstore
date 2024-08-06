import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack, Box } from '@mui/material';

export default function NewsMenu () {   
    const items = (
      <>
        {GenerateListItem("/events", "Upcoming Events")}
        {GenerateListItem("/announcements", "Announcements")}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"News"} 
          icon={<NewspaperIcon/>}
          items={items}
          id={"news-menu"}/>
      </Stack>
    )
}