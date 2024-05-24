import Head from 'next/head';
import React from 'react';

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Politique de confidentialité - Zorglux</title>
        <meta name="description" content="Lisez notre politique de confidentialité pour comprendre comment nous protégeons vos données." />
      </Head>
      <main>
        <h1>Politique de Confidentialité</h1>
        <p>Chez Zorglux, nous prenons la confidentialité de vos données très au sérieux. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.</p>
        <section>
          <h2>Collecte des Informations</h2>
          <p>Nous collectons des informations lorsque vous visitez notre site, vous inscrivez à notre newsletter, ou effectuez un achat.</p>
          <h2>Utilisation des Informations</h2>
          <p>Vos informations sont utilisées pour améliorer votre expérience utilisateur, traiter vos commandes, et vous envoyer des mises à jour importantes.</p>
        </section>
      </main>
    </div>
  );
}
