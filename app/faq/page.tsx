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
        <h1>FAQ</h1>
        <p>
          Vous avez des questions ? Nous avons les réponses ! Consultez notre FAQ pour en savoir plus sur Zorglub et nos services.
        </p>
      </main>
    </div>
  );
}