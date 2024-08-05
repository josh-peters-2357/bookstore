'use client'
import React from 'react';
import { Container, Stack } from '@mui/material';
import '../../../app/globals.scss';
import Link from 'next/link';
import CatalogueMenu from './catalogue-menu';
import NewsMenu from './news-menu';

export default function Menu () {
    function LinkJSX (name: string, path: string): React.JSX.Element {
        return (
            <Link href={path} color='red'>
                <Container className="accordion">{name}</Container>
            </Link>
        )
    }

    return (
        <Stack className='Accordion'>
            <CatalogueMenu/>
            <NewsMenu/>
            {LinkJSX("Contact Us", "/contact")}
        </Stack>
    )
}