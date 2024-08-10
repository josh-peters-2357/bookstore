import React from 'react';
import '../../../app/globals.scss';
import PersonIcon from '@mui/icons-material/Person';
import CreateMenuItem from '../menu-helpers';
import { GenerateListItem } from '../menu-helpers';
import { Stack, Box } from '@mui/material';

export default function AccountMenu () {   
    const items = (
      <>
        {GenerateListItem("/login", "Log in")}
        {GenerateListItem("/lockedout", "Locked out?")}
        {GenerateListItem("/register", "Create an account")}
      </>  
    )

    return (
      <Stack className='padding-5px'>
        <CreateMenuItem 
          name={"Account"} 
          icon={<PersonIcon/>}
          items={items}
          id={"account-menu"}/>
      </Stack>
    )
}