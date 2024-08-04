'use client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.scss';
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home")
}
