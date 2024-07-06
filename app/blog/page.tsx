'use client';

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Blog - Zorglux</title>
                <meta
                    name="description"
                    content="Lisez les dernières nouvelles et articles sur Zorglux sur notre blog."
                />
            </Head>
            <main>
                <Container>
                    <DescriptionContainer>
                        <DescriptionTitle>Blog Zorglux</DescriptionTitle>
                        <p>
                            Bienvenue sur notre blog où vous pouvez lire les
                            dernières nouvelles et articles sur Zorglub, son
                            univers et ses aventures passionnantes.
                        </p>
                    </DescriptionContainer>
                    <ContentContainer>
                        <h2>Articles Récents</h2>
                        <ul>
                            <li>
                                <Link href="/blog/zorglub-vs-zurglux">
                                    Zorglub vs Zurglux: Une Bataille Épique
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/les-origines-de-zorglux">
                                    Les Origines de Zorglux
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/les-armes-de-zorglux">
                                    Les Armes Secrètes de Zorglux
                                </Link>
                            </li>
                        </ul>
                    </ContentContainer>
                </Container>
            </main>
        </div>
    );
}

const Container = styled.section`
    background: #fff9eb;
    min-height: 100vh;
    color: black;
    font-family: 'BouncyThin';
`;

const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const DescriptionTitle = styled.h1`
    font-size: 30px;
`;

const ContentContainer = styled.section`
    margin-top: 25px;
`;

const Link = styled.a`
    color: black;
    &:visited {
        color: black;
    }
`;
