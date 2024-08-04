'use client'
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.scss';
import Link from "next/link";
import { NavigationEvents } from "./NavigationEvents";
import { usePathname } from "next/navigation";

export default function Home() {
  var pathname = usePathname()
  pathname = "/home"

  return (
    <main className="flex min-h-screen body">
      <Link href = "/home">
        Testing
      </Link>
    </main>
  );
}
