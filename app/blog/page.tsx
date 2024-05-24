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
        <p>Bienvenue sur notre blog où vous pouvez lire les dernières nouvelles et articles sur Zorglub, son univers et ses aventures passionnantes.</p>
        <section>
          <h2>Articles Récents</h2>
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
