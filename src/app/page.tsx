'use client'
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.scss';
import Base from "@/components/Base";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from '../app/index.js';

export default function Home() {
  return (
    <main className="flex min-h-screen body">
      <Base/>
      <App/>
    </main>
  );
}
