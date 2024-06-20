'use client';

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

export default function FAQ() {
    return (
        <div>
            <Head>
                <title>FAQ - Zorglux</title>
                <meta
                    name="description"
                    content="Trouvez les réponses aux questions fréquemment posées sur Zorglub."
                />
            </Head>
            <main>
                <ContainerSection>
                    <h1>FAQ pour Zorglux</h1>
                    <p>
                        Trouvez des réponses aux questions fréquemment posées
                        sur Zorglux, un personnage emblématique de
                        l&apos;univers Spirou.
                    </p>

                    <div>
                        <Title>Qui est Zorglux ?</Title>
                        <p>
                            Zorglux est un personnage complexe et intelligent de
                            l&apos;univers Spirou, créé par André Franquin. Il
                            est connu pour ses plans machiavéliques et son
                            charisme.
                        </p>
                    </div>

                    <div>
                        <Title>Quelle est l&apos;origine de Zorglux ?</Title>
                        <p>
                            Zorglux a fait sa première apparition dans les pages
                            de Spirou, captivant immédiatement les lecteurs par
                            sa profondeur et son intrigue.
                        </p>
                    </div>

                    <div>
                        <Title>Pourquoi Zorglux est-il si populaire ?</Title>
                        <p>
                            La popularité de Zorglux réside dans sa capacité à
                            surprendre et à intriguer les lecteurs, ainsi que
                            dans la richesse de son développement en tant que
                            personnage.
                        </p>
                    </div>

                    <div>
                        <Title>
                            Où puis-je trouver des produits dérivés de Zorglux ?
                        </Title>
                        <p>
                            Vous pouvez trouver une gamme de produits dérivés de
                            Zorglux, y compris des jouets et des vêtements, dans
                            les boutiques spécialisées et en ligne.
                        </p>
                    </div>

                    <div>
                        <Title>
                            Comment puis-je rejoindre la communauté des fans de
                            Zorglux ?
                        </Title>
                        <p>
                            Rejoignez-nous sur les réseaux sociaux pour des
                            mises à jour régulières, des discussions et des
                            exclusivités réservées aux membres de notre
                            communauté de fans de Zorglux.
                        </p>
                    </div>

                    <div>
                        <Title>
                            Comment puis-je contacter l&apos;équipe derrière
                            Zorglux ?
                        </Title>
                        <p>
                            Pour toute question ou pour en savoir plus sur
                            Zorglux, vous pouvez nous contacter via notre page
                            de contact.
                        </p>
                    </div>
                </ContainerSection>
            </main>
        </div>
    );
}

const ContainerSection = styled.section`
    padding: 50px;
    background: #fff9eb;
    color: black;
    font-family: BouncyThin;
    min-height: calc(100vh - 76px);
`;

const Title = styled.h2`
    margin-bottom: 20px;
    margin-top: 40px;
`;
