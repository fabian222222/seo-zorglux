'use client';

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contactez-nous - Zorglux</title>
                <meta
                    name="description"
                    content="Contactez l'équipe de Zorglux pour toute question ou information."
                />
            </Head>
            <main>
                <SectionContainer>
                    <PageTitle>Contactez-nous</PageTitle>
                    <p>
                        Pour toute question ou pour en savoir plus sur Zorglux
                        et l&apos;univers Spirou, n&apos;hésitez pas à nous
                        contacter. Remplissez le formulaire ci-dessous et nous
                        vous répondrons dans les plus brefs délais.
                    </p>
                    <form>
                        <label htmlFor="name">Nom:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </SectionContainer>
            </main>
        </div>
    );
}

const SectionContainer = styled.section`
    padding: 50px;
    background: #fff9eb;
    color: black;
    font-family: BouncyThin;
    min-height: calc(100vh - 76px);
    text-align: center;
`;

const PageTitle = styled.h1`
    margin-bottom: 20px;
`;
