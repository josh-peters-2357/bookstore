import React from 'react';
import '../../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';
import CreateMenuItem, { GenerateListItem } from '../menu-helpers';
import { Stack } from '@mui/material';

export default function CatalogueMenu () {  
    const header = (
      <Stack spacing={{ xs: 1, sm: 2 }}
             direction="row" 
             useFlexGap 
             flexWrap="nowrap">
        <BookIcon className='Accordion'/>
        <div className='Accordion'>
          Catalogue
        </div>
      </Stack>)

    const items = (
      <>
        {GenerateListItem("/books", "Books")}
        {GenerateListItem("/movies", "Movies")}
      </>  
    )

    return (
      <CreateMenuItem 
        header={header} 
        items={items}
        id={"catalogue-menu"}/>
    )
}