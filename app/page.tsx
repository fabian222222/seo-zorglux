'use client';

import Head from 'next/head';
import React from 'react';
import PresentationSection from './Components/Homepage/PresentationSection';
import StatistiqueSection from './Components/Homepage/StatistiqueSection';
import OtherSuccessSection from './Components/Homepage/OtherSuccessSection';
import ContactSection from './Components/Homepage/ContactSection';
import Footer from './Components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Zorglux - L&apos;univers de Zorglub</title>
                <meta
                    name="description"
                    content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub."
                />
                <meta
                    name="keywords"
                    content="Zorglux, Zorglub, bande dessinée, à propos"
                />
                <meta name="author" content="Zorglux Team" />
                <meta
                    property="og:title"
                    content="À propos de nous - Zorglux"
                />
                <meta
                    property="og:description"
                    content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://zorglux-zorglub.com/about"
                />
                <meta
                    property="og:image"
                    content="https://zorglux-zorglub.com/images/og-image.jpg"
                />
            </Head>
            <main>
                <PresentationSection />
                <StatistiqueSection />
                <OtherSuccessSection />
                <ContactSection />
                <Footer />
            </main>
        </div>
    );
}
