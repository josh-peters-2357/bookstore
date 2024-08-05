import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack } from '@mui/material';

export default function NewsMenu () {   
    const header = (
      <Stack spacing={{ xs: 1, sm: 2 }}
      direction="row" 
      useFlexGap 
      flexWrap="nowrap">
        <NewspaperIcon className='Accordion'/>
        <div className='Accordion'>
          News
        </div>
      </Stack>)

    const items = (
      <>
        {GenerateListItem("/events", "Upcoming Events")}
        {GenerateListItem("/announcements", "Announcements")}
      </>  
    )

    return (
      <CreateMenuItem 
        header={header} 
        items={items}
        id={"news-menu"}/>
    )
}