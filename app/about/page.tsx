import Head from 'next/head';
import React from 'react';

export default function About() {
  return (
    <div>
      <Head>
        <title>À propos de nous - Zorglux</title>
        <meta name="description" content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub." />
      </Head>
      <main>
      <h1>À propos de Zorglux</h1>
        <p>Chez Zorglux, nous sommes passionnés par Zorglub et ses aventures. Notre équipe se consacre à fournir des informations complètes et à jour sur ce personnage fascinant et son univers. Rejoignez-nous dans cette aventure incroyable!</p>
        <img src="/images/about-zorglub.jpg" alt="À propos de Zorglub" />
      </main>
    </div>
  );
}