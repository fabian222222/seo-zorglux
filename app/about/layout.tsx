import React from 'react'
import StyledComponentsRegistry from '../lib/registry'

export const metadata = {
    title: 'Zorglux Zorglub - About Us',
    keywords: 'Zorglux, Zorglub, bande dessinée, page à propos',
    author: 'Zorglux Zorglub team',
    openGraph: {
        title: 'Page à propos - Zorglux',
        description:
            'En savoir plus sur Zorglux et notre passion pour le monde de Zorglub.',
        type: 'website',
        url: 'https://zorglux-zorglub.com/about',
        images: [
            {
                url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dupuis.com%2Fseriebd%2Fzorglub%2F12955&psig=AOvVaw0EQBViD5qYzVw7ySYkguON&ust=1716602982929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDkx86apYYDFQAAAAAdAAAAABAE',
            },
        ],
    },
}
export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
