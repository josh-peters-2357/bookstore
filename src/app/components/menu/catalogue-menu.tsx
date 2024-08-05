import React from 'react';
import '../../../app/globals.scss';
import BookIcon from '@mui/icons-material/Book';
import CreateMenuItem, { GenerateListItem } from '../menu-helpers';

export default function CatalogueMenu () {  
    const header = (
      <>
        <BookIcon className='Accordion'/>
        <div className='Accordion'>
          Catalogue
        </div>
      </>)

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