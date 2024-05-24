import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zorglux - L&apos;univers de Zorglub</title>
        <meta name="description" content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub." />
        <meta name="keywords" content="Zorglux, Zorglub, bande dessinée, à propos" />
        <meta name="author" content="Zorglux Team" />
        <meta property="og:title" content="À propos de nous - Zorglux" />
        <meta property="og:description" content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zorglux-zorglub.com/about" />
        <meta property="og:image" content="https://zorglux-zorglub.com/images/og-image.jpg" />
      </Head>
      <main>
        <h1>Bienvenue chez Zorglux</h1>
        <p>
          Zorglux est votre destination numéro un pour tout ce qui concerne Zorglub. Explorez notre site pour en savoir plus sur ce personnage emblématique et ses aventures.
        </p>
      </main>
    </div>
  );
}