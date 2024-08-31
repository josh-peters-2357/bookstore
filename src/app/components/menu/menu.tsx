'use client'
import React from 'react';
import { Box, Stack } from '@mui/material';
import '../../../app/globals.scss';
import CatalogueMenu from './catalogue-menu';
import NewsMenu from './news-menu';
import { createContext } from 'react';
import ServicesMenu from './services-menu';
import useWindowDimensions from '../hooks/useWindowDimensions';
import AccountMenu from './account-menu';
import Link from 'next/link';

export const MenuContext = createContext<{expanded: boolean|string, handleChange: Function}>({expanded: false, handleChange: ()=>{}});

export default function Menu () {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const isMobile = useWindowDimensions()

    return (
        <MenuContext.Provider 
            value={{expanded: expanded, 
            handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => setExpanded(newExpanded ? panel : false)}}>
            <Stack className={(isMobile ? 'AccordionMobile' : 'AccordionDesktop')} id="main-menu-bar">
                <Stack className={(!isMobile  ? 'AccordionDesktopStack' : 'AccordionMobile')}>
                    <Link href={"/home"}>
                        <img src="/images/librarylogo.png"
                             alt="Picture of the author"
                             className={isMobile ? 'MainMenuLogoMobile' : 'MainMenuLogoDesktop'}/>
                    </Link>
                    <CatalogueMenu/>
                    <NewsMenu/>
                    <ServicesMenu/>
                </Stack>

                <AccountMenu/>
            </Stack>
            <Box className='Line-1'/>
        </MenuContext.Provider>
    )
}