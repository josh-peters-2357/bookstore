import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack, } from '@mui/material';

export default function NewsMenu () {   
  const id = "news-menu";
    const items = (
      <>
        {GenerateListItem("/events", "Upcoming Events", id)}
        {GenerateListItem("/announcements", "Announcements", id)}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"News"} 
          icon={<NewspaperIcon/>}
          items={items}
          id={id}/>
      </Stack>
    )
}