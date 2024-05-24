import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zorglux - L&apos;univers de Zorglub</title>
        <meta name="description" content="Découvrez Zorglux, votre source ultime pour tout ce qui concerne Zorglub, le célèbre personnage de bande dessinée." />
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