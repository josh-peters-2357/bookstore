import React, { useContext } from 'react';
import '../../../app/globals.scss';
import PersonIcon from '@mui/icons-material/Person';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack } from '@mui/material';
import { MenuContext } from './menu';

export default function AccountMenu () {  
  const isMobile = useContext(MenuContext); 
  const id = "account-menu";

    const items = (
      <>
        {GenerateListItem("/login", "Log in", id)}
        {GenerateListItem("/lockedout", "Locked out?", id)}
        {GenerateListItem("/register", "Create an account", id)}
      </>  
    )

    return (
      <Stack className={(!isMobile  ? 'AccordionDesktopStack padding-5px' : 'padding-5px')}>
        <CreateMenuItem 
          name={"Account"} 
          icon={<PersonIcon/>}
          items={items}
          id={id}/>
      </Stack>
    )
}