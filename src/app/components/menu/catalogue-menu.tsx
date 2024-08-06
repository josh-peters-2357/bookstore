import React from 'react';
import '../../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';
import CreateMenuItem, { GenerateListItem } from '../menu-helpers';
import { Box, Stack } from '@mui/material';

export default function CatalogueMenu () {  
    const items = (
      <>
        
        {GenerateListItem("/books", "Books")}
        {GenerateListItem("/movies", "Movies")}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"Catalogue"}
          icon={<BookIcon/>} 
          items={items}
          id={"catalogue-menu"}/>
        </Stack>
    )
}