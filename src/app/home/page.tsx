'use client'
import React from 'react';
import '../../app/globals.scss';
import Menu from '../components/menu/menu';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Menu/>
      <Box className='Line-1'/>
      <img
          src="/images/library.jpg"
          alt="AI-generated picture of a library haha"
          className='ll'/>
    </>
  )
}
