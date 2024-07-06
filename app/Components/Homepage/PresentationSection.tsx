import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const PresentationSection = () => {
    return (
        <section>
            <Container>
                <ContainerLeft>
                    <Image
                        src="/images/zorglux-homepage-top-section.png"
                        width={300}
                        height={550}
                        alt="Image de zorglux debout avec un globe en guise de canne"
                    />
                </ContainerLeft>
                <ContainerRight>
                    <h1>ZORGLUB VS ZORGLUX</h1>
                    <HomepageDescription>
                        Z COMME ZORGLUB EST REVENU POUR NOUS TERASSER MAIS
                        COMPTEZ SUR ZORGLUX SON SEUL ENNEMI JURÉ
                    </HomepageDescription>
                    <HomepageDiscoverButton>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                            }}
                            href="/about"
                        >
                            <p>Découvrir mon histoire</p>
                        </Link>
                    </HomepageDiscoverButton>
                    <ComicContainer>
                        <Comic>
                            <Image
                                src="/images/zorglub.jpg"
                                width={185}
                                height={232}
                                alt="Image de zorglux debout avec un globe en guise de canne"
                                style={{
                                    height: '100%',
                                }}
                            />
                        </Comic>
                        <Comic>
                            <Image
                                src="/images/zorglub.jpg"
                                width={185}
                                height={232}
                                alt="Image de zorglux debout avec un globe en guise de canne"
                                style={{
                                    height: '100%',
                                }}
                            />
                        </Comic>
                        <Comic>
                            <Image
                                src="/images/zorglub.jpg"
                                width={185}
                                height={232}
                                alt="Image de zorglux debout avec un globe en guise de canne"
                                style={{
                                    height: '100%',
                                }}
                            />
                        </Comic>
                        <Comic>
                            <Image
                                objectFit="cover"
                                src="/images/zorglub.jpg"
                                width={190}
                                height={232}
                                alt="Image de zorglux debout avec un globe en guise de canne"
                                style={{
                                    height: '100%',
                                }}
                            />
                        </Comic>
                    </ComicContainer>
                </ContainerRight>
            </Container>
        </section>
    );
};

const Container = styled.div`
    height: calc(100vh - 71px);
    background: #f9febc;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;

    @media (max-width: 750px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const ContainerLeft = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
        display: none;
    }
`;
const ContainerRight = styled.div`
    width: 70%;
    padding-left: 50px;
    padding-right: 50px;
    font-family: 'BouncyThin';
    font-size: 21px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 750px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const HomepageDescription = styled.h2`
    font-family: 'montserrat';
    font-size: 18px;
    margin-top: 20px;
`;

const HomepageDiscoverButton = styled.button`
    border: none;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 5px;
    background: black;
    margin-top: 20px;
    color: #f9febc;
    font-size: 22px;
`;

const ComicContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 750px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`;

const Comic = styled.div`
    border: 3px solid black;
    border-radius: 3px;
`;

export default PresentationSection;
