import React from 'react';
import StyledComponentsRegistry from '../../lib/registry';

export const metadata = {
    title: 'Les armes de zorglux',
    keywords: 'article zorlgux weapon armes arme',
    author: 'Zorglux Zorglub team',
    openGraph: {
        title: 'Page blog - Zorglux',
        description: 'En savoir plus sur les armes que possède zorglux',
        type: 'website',
        url: 'https://zorglux-zorglub.com/blog/les-armes-de-zorglux',
        images: [
            {
                url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dupuis.com%2Fseriebd%2Fzorglub%2F12955&psig=AOvVaw0EQBViD5qYzVw7ySYkguON&ust=1716602982929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDkx86apYYDFQAAAAAdAAAAABAE',
            },
        ],
    },
};
export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
