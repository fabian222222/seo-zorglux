import Head from 'next/head';
import React from 'react';

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>FAQ - Zorglux</title>
        <meta name="description" content="Trouvez les réponses aux questions fréquemment posées sur Zorglub." />
      </Head>
      <main>
        <h1>Foire Aux Questions</h1>
        <section>
          <h2>Questions Générales</h2>
          <h3>Qui est Zorglub?</h3>
          <p>Zorglub est un personnage emblématique et l&apos;ennemi juré du héros Zurglux dans l&apos;anime populaire.</p>
          <h3>Comment puis-je acheter des produits Zorglub?</h3>
          <p>Vous pouvez acheter nos produits exclusifs sur notre page <a href="/products">Produits</a>.</p>
        </section>
      </main>
    </div>
  );
}