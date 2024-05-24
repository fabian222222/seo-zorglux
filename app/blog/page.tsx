import Head from 'next/head';
import React from 'react';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Zorglux</title>
        <meta name="description" content="Lisez les dernières nouvelles et articles sur Zorglub sur notre blog." />
      </Head>
      <main>
        <h1>Blog Zorglux</h1>
        <p>
          Bienvenue sur le blog de Zorglux. Retrouvez ici les dernières nouvelles, articles et mises à jour sur Zorglub.
        </p>
      </main>
    </div>
  );
}
