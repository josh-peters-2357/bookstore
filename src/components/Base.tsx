import React from 'react';
import * as Mui from '@mui/material';
import '../app/globals.scss';
import {BrowserRouter, Navigate, Route} from 'react-router-dom';

export default function Base () {
    return (
        <Mui.Container className='base' disableGutters>Testing</Mui.Container>
    )
}