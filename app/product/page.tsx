import Head from 'next/head';
import React from 'react';

export default function Products() {
  return (
    <div>
      <Head>
        <title>Produits et Services - Zorglux</title>
        <meta name="description" content="Découvrez nos produits et services dédiés à Zorglub." />
      </Head>
      <main>
        <h1>Nos Produits et Services</h1>
        <p>
          Nous proposons une gamme de produits dérivés de Zorglub, y compris des bandes dessinées, des figurines, et bien plus encore.
        </p>
      </main>
    </div>
  );
}
