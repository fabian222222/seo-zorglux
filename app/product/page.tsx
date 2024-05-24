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
      <h1>Nos Produits</h1>
        <p>Découvrez notre gamme exclusive de produits Zorglub. Des gadgets innovants aux articles de collection, trouvez tout ce dont vous avez besoin pour plonger dans l&apos;univers de Zorglub.</p>
        <section>
          <h2>Gadgets de Zorglub</h2>
          <ul>
            <li><a href="/products/zorglub-gadget-1">Gadget 1</a></li>
            <li><a href="/products/zorglub-gadget-2">Gadget 2</a></li>
            <li><a href="/products/zorglub-gadget-3">Gadget 3</a></li>
          </ul>
        </section>
        <section>
          <h2>Articles de Collection</h2>
          <ul>
            <li><a href="/products/zorglub-figurine">Figurine Zorglub</a></li>
            <li><a href="/products/zorglub-poster">Poster Zorglub</a></li>
            <li><a href="/products/zorglub-tshirt">T-shirt Zorglub</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
