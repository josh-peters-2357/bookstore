import React from 'react';
import '../../../app/globals.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';

export default function NewsMenu () {   
    const header = (
      <>
        <NewspaperIcon className='Accordion'/>
        <div className='Accordion'>
          News
        </div>
      </>)

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