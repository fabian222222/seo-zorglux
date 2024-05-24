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
        <p>Découvrez Zorglux, votre destination ultime pour tout ce qui concerne Zorglub, l&apos;ennemi du héros Zurglux dans l&apos;anime célèbre. Plongez dans l&apos;univers fascinant de Zorglub, explorez ses aventures, et apprenez-en plus sur ce personnage emblématique.</p>
        <img src="/images/zorglub-home.jpg" alt="Zorglub" />
        <section>
          <h2>Nos Dernières Aventures</h2>
          <ul>
            <li><a href="/blog/zorglub-vs-zurglux">Zorglub vs Zurglux: Une Bataille Épique</a></li>
            <li><a href="/blog/les-origines-de-zorglub">Les Origines de Zorglub</a></li>
            <li><a href="/blog/les-armes-de-zorglub">Les Armes Secrètes de Zorglub</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}