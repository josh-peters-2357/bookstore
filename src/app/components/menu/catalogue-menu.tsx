import React from 'react';
import '../../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';
import CreateMenuItem, { GenerateListItem } from '../menu-helpers';
import { Stack } from '@mui/material';

export default function CatalogueMenu () {  
  const id = "catalogue-menu";  
  
  const items = (
      <>
        {GenerateListItem("/books", "Books", id)}
        {GenerateListItem("/movies", "Movies", id)}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"Catalogue"}
          icon={<BookIcon/>} 
          items={items}
          id={id}/>
        </Stack>
    )
}