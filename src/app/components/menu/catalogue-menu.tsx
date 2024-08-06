import React from 'react';
import '../../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';
import CreateMenuItem, { GenerateListItem } from '../menu-helpers';
import { Box, Stack } from '@mui/material';

export default function CatalogueMenu () {  
    const header = (
      <Stack spacing={{ xs: 1, sm: 2 }}
             direction="row" 
             flexWrap="nowrap"
             className='AccordionSummary'>
        <div>
          Catalogue
        </div>
        <BookIcon/>
      </Stack>)

    const items = (
      <>
        <Box className='Line-2'/>
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