import React from "react"
import Navigation from './Components/Navigation';
import './styles/globals.css';

export const metadata = {
  title: "Zorglux - L'univers de Zorglub",
  description: 'This is a fan page of story zorglub x zorglux',
  keywords: "Zorglux, Zorglub, bande dessinée, page d'accueil",
  author: "Zorglux Zorglub team",
  openGraph: {
    title: "Page d'accueil - Zorglux",
    description: 'En savoir plus sur Zorglux et notre passion pour le monde de Zorglub.',
    type: 'website',
    url: 'https://zorglux-zorglub.com/',
    images: [
      {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dupuis.com%2Fseriebd%2Fzorglub%2F12955&psig=AOvVaw0EQBViD5qYzVw7ySYkguON&ust=1716602982929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDkx86apYYDFQAAAAAdAAAAABAE',
      },
    ],
  },
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
