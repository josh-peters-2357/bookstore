'use client'
import React, { Suspense } from 'react';
import {Container} from '@mui/material';
import '../../app/globals.scss';
import { useRouter,permanentRedirect,  redirect } from 'next/navigation'
import { NavigationEvents } from '../NavigationEvents';
import Link from 'next/link';

export default function Home () {
    const router = useRouter()
    
    permanentRedirect('/home')
}
