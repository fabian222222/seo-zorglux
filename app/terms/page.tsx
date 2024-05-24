import Head from 'next/head';
import React from 'react';

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Conditions Générales - Zorglux</title>
        <meta name="description" content="Prenez connaissance de nos conditions générales d'utilisation." />
      </Head>
      <main>
        <h1>Conditions Générales</h1>
        <p>Les présentes conditions générales régissent l&apos;utilisation de notre site web et des services offerts par Zorglux.</p>
        <section>
          <h2>Utilisation du Site</h2>
          <p>En utilisant notre site, vous acceptez de respecter les conditions stipulées dans ce document. Si vous n&apos;êtes pas d&apos;accord avec ces conditions, veuillez ne pas utiliser notre site.</p>
          <h2>Produits et Services</h2>
          <p>Nous nous efforçons de fournir des descriptions précises de nos produits et services. Cependant, nous ne garantissons pas que les descriptions ou autres contenus de ce site soient exacts, complets, fiables, actuels ou exempts d&apos;erreurs.</p>
        </section>
      </main>
    </div>
  );
}
