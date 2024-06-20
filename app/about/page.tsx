'use client';

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

export default function About() {
    return (
        <div>
            <Head>
                <title>À propos de nous - Zorglux</title>
                <meta
                    name="description"
                    content="En savoir plus sur Zorglux et notre passion pour le monde de Zorglub."
                />
            </Head>
            <main>
                <SectionContainer>
                    <Title>À propos de Zorglux</Title>
                    <p>
                        Bienvenue sur notre page &apos;À propos&apos; dédiée à
                        Zorglux, un personnage emblématique de l&apos;univers
                        Spirou. Ici, vous découvrirez tout ce qu&apos;il y a à
                        savoir sur Zorglux et son impact dans le monde de la
                        bande dessinée.
                    </p>

                    <Title>L&apos;Origine de Zorglux</Title>
                    <p>
                        Zorglux est apparu pour la première fois dans les pages
                        de Spirou, captivant immédiatement les lecteurs par son
                        intelligence et sa complexité. Créé par le légendaire
                        auteur André Franquin, Zorglux a évolué au fil des ans,
                        devenant l&apos;un des antagonistes les plus redoutés et
                        appréciés de l&apos;univers Spirou.
                    </p>

                    <Title>Les Caractéristiques de Zorglux</Title>
                    <p>
                        Zorglux est connu pour son esprit brillant, ses plans
                        machiavéliques et son charisme indéniable. Il incarne à
                        la fois le génie et la menace, rendant chaque rencontre
                        avec Spirou et Fantasio palpitante et mémorable. Sa
                        capacité à surprendre et à intriguer est ce qui le
                        distingue et ce qui continue de fasciner les fans.
                    </p>

                    <Title>L&apos;Impact de Zorglux</Title>
                    <p>
                        Depuis sa création, Zorglux a eu un impact significatif
                        non seulement sur les histoires de Spirou mais aussi sur
                        la culture populaire en général. Ses aventures ont
                        inspiré des générations de lecteurs et ont donné
                        naissance à de nombreux produits dérivés, y compris des
                        jouets, des vêtements, et même des adaptations en dessin
                        animé.
                    </p>

                    <Title>Les Valeurs de Zorglux</Title>
                    <p>
                        Notre mission est de continuer à célébrer le personnage
                        de Zorglux en créant du contenu qui honore son héritage
                        et en engageant une communauté de fans passionnés. Nous
                        croyons en l&apos;importance de personnages bien
                        développés et de récits captivants pour inspirer et
                        divertir.
                    </p>

                    <Title>Rejoignez la Communauté Zorglux</Title>
                    <p>
                        Nous invitons tous les fans de Zorglux à rejoindre notre
                        communauté en ligne. Suivez-nous sur les réseaux sociaux
                        pour des mises à jour régulières, des discussions sur
                        les dernières aventures de Zorglux et des exclusivités
                        réservées à nos membres. Ensemble, nous pouvons partager
                        notre amour pour l&apos;un des personnages les plus
                        fascinants de la bande dessinée.
                    </p>

                    <Title>Contactez-Nous</Title>
                    <p>
                        Pour toute question ou pour en savoir plus sur Zorglux,
                        n&apos;hésitez pas à nous contacter. Nous sommes
                        toujours ravis d&apos;entendre des fans et de discuter
                        de tout ce qui concerne Zorglux et l&apos;univers
                        Spirou.
                    </p>
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
`;

const Title = styled.h1`
    margin-bottom: 20px;
    margin-top: 40px;
`;
