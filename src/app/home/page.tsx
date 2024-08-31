'use client'
import React from 'react';
import '../../app/globals.scss';
import Menu from '../components/menu/menu';

export default function Home() {
  return (
    <>
      <Menu/>
      <img src="/images/library.jpg"
           alt="AI-generated picture of a library haha"
           className='libraryImage'/>
    </>
  )
}
