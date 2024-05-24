import Head from 'next/head';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contactez-nous - Zorglux</title>
        <meta name="description" content="Contactez l'équipe de Zorglux pour toute question ou information." />
      </Head>
      <main>
        <h1>Contactez-nous</h1>
        <p>Vous avez des questions ou des demandes concernant Zorglub? N&apos;hésitez pas à nous contacter via le formulaire ci-dessous.</p>
        <form>
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
}
