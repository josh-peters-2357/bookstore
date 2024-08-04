'use client'
import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import '../../app/globals.scss';
import Link from 'next/link';
import CatalogueMenu from './catalogue-menu';

export default function Menu () {
    function LinkJSX (name: string, path: string): React.JSX.Element {
        return (
            <Link href={path}>
                <Container className="body">{name}</Container>
            </Link>
        )
    }

    return (
        <Stack spacing={{ xs: 1, sm: 2 }}
               direction="row" 
               useFlexGap 
               flexWrap="wrap">
            <CatalogueMenu/>
            {LinkJSX("Contact Us", "/contact")}
        </Stack>
    // <Grid container>
    //     <Grid item><CatalogueMenu/></Grid>
    //     <Grid item>{LinkJSX("Contact Us", "/contact")}</Grid>
    //     <Grid item>{LinkJSX("About Cliff's Edge Bookstore", "/about")}</Grid>
    // </Grid>
    )
}