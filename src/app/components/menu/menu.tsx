'use client'
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import '../../../app/globals.scss';
import CatalogueMenu from './catalogue-menu';
import NewsMenu from './news-menu';
import { createContext } from 'react';
import ServicesMenu from './services-menu';
import useIsMobile from '../hooks/useWindowDimensions';
import Image from 'next/image';

export const MenuContext = createContext<{expanded: boolean|string, handleChange: Function}>({expanded: false, handleChange: ()=>{}});

export default function Menu () {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const isMobile = useIsMobile()

    return (
        <MenuContext.Provider 
            value={{expanded: expanded, 
            handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => setExpanded(newExpanded ? panel : false)}}>
            <Stack className={(isMobile ? 'AccordionMobile' : 'AccordionDesktop')} id="main-menu-bar">
                <Stack className='MainMenuLogo'>
                    <img 
                        src="/images/librarylogo.png"
                        alt="Picture of the author"
                        className={isMobile ? 'MainMenuLogoMobile' : 'MainMenuLogoDesktop'}
                        >
                    </img>
                </Stack>
                <Stack>
                    <CatalogueMenu/>
                </Stack>
                <Stack>
                    <NewsMenu/>
                </Stack>
                <Stack>
                    <ServicesMenu/>
                </Stack>
            </Stack>
        </MenuContext.Provider>
    )
}