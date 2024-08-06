import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack, Box } from '@mui/material';

export default function NewsMenu () {   
    const header = (
      <Stack spacing={{ xs: 1, sm: 2 }}
      direction="row" 
      flexWrap="nowrap"
      className='AccordionSummary'
      >
        <div>
          News
        </div>
        <NewspaperIcon/>
      </Stack>)

    const items = (
      <>
        <Box className='Line-2'/>
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