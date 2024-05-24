import React from "react"
import Navigation from './Components/Navigation';
import './styles/globals.css';

export const metadata = {
  title: 'Zorglux zorglub fan page',
  description: 'This is a fan page of story zorglub x zorglux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
