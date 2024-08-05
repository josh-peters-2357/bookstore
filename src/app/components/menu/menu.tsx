'use client'
import React from 'react';
import { Container, Stack } from '@mui/material';
import '../../../app/globals.scss';
import Link from 'next/link';
import CatalogueMenu from './catalogue-menu';
import NewsMenu from './news-menu';
import { useContext, createContext } from 'react';

export const MenuContext = createContext<{expanded: boolean|string, handleChange: Function}>({expanded: false, handleChange: ()=>{}});

export default function Menu () {
    function LinkJSX (name: string, path: string): React.JSX.Element {
        return (
            <Link href={path} color='red'>
                <Container className="accordion">{name}</Container>
            </Link>
        )
    }
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

     const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <MenuContext.Provider value={{expanded: expanded, handleChange: handleChange}}>
            <Stack className='Accordion'>
                <Stack>
                    <CatalogueMenu/>
                </Stack>
                <Stack>
                    <NewsMenu/>
                </Stack>
            </Stack>
        </MenuContext.Provider>
    )
}