'use client'
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import '../../../app/globals.scss';
import CatalogueMenu from './catalogue-menu';
import NewsMenu from './news-menu';
import { createContext } from 'react';
import ServicesMenu from './services-menu';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const MenuContext = createContext<{expanded: boolean|string, handleChange: Function}>({expanded: false, handleChange: ()=>{}});

export default function Menu () {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const isMobile = useWindowDimensions().isMobile

    return (
        <MenuContext.Provider 
            value={{expanded: expanded, 
            handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => setExpanded(newExpanded ? panel : false)}}>
            <Stack className={(isMobile ? ' flex-col d-flex justify-content-center ' : ' flex-row align-items-left') + "Accordion transparent-bg"}>
                <Stack className='d-flex justify-content-center'>
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