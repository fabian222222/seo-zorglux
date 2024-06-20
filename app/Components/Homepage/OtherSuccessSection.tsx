import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const OtherSuccessSection = () => {
    return (
        <Container>
            <SectionTitle>OTHER SUCCESS</SectionTitle>
            <PageContainer>
                <ImageContainer>
                    <Image
                        src="/images/otherSuccess.jpg"
                        width={300}
                        height={400}
                        alt=""
                        style={{
                            objectFit: 'cover',
                            transform: 'rotate(-5deg)',
                        }}
                    />
                </ImageContainer>
                <DescriptionContainer>
                    <DescriptionContainerTitle>
                        Zorglux vs Zorglux
                    </DescriptionContainerTitle>
                    <DescriptionContainerContent>
                        Zorglux est devenu un personnage central dans
                        l&apos;univers de Spirou, connu pour ses plans astucieux
                        et ses intrigues captivantes. Le dernier numéro, mettant
                        en vedette Zorglux, a fasciné les fans du monde entier
                        avec son récit palpitant et ses illustrations
                        dynamiques.
                        <br />
                        <br />
                        L&apos;influence de Zorglux s&apos;étend au-delà des
                        pages, inspirant une gamme de produits dérivés et de
                        théories de fans. La profondeur et la complexité du
                        personnage en font un favori parmi les lecteurs,
                        contribuant à la popularité durable de Spirou.
                        <br />
                        <br />
                        Restez à l&apos;écoute pour plus d&apos;aventures
                        mettant en scène Zorglux alors qu&apos;il continue de
                        défier et d&apos;engager à la fois les anciens fans et
                        les nouveaux lecteurs. La série promet de livrer des
                        intrigues encore plus excitantes et des rebondissements
                        inattendus.
                    </DescriptionContainerContent>
                </DescriptionContainer>
            </PageContainer>
            <ImagesContainer>
                <Image
                    src="/images/otherSuccess.jpg"
                    width={150}
                    height={200}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        border: 'solid 2px black',
                    }}
                />
                <Image
                    src="/images/otherSuccess.jpg"
                    width={150}
                    height={200}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        border: 'solid 2px black',
                    }}
                />
                <Image
                    src="/images/otherSuccess.jpg"
                    width={150}
                    height={200}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        border: 'solid 2px black',
                    }}
                />
                <Image
                    src="/images/otherSuccess.jpg"
                    width={150}
                    height={200}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        border: 'solid 2px black',
                    }}
                />
                <Image
                    src="/images/otherSuccess.jpg"
                    width={150}
                    height={200}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        border: 'solid 2px black',
                    }}
                />
            </ImagesContainer>
        </Container>
    );
};

const Container = styled.section`
    background-color: #fff9eb;
    padding: 30px;
    color: black;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

const SectionTitle = styled.h1`
    font-family: 'BouncyThin';
    font-size: 40px;
`;

const PageContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 50px;
    margin-top: 50px;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DescriptionContainer = styled.div`
    width: 60%;
    padding: 100px;
`;

const DescriptionContainerTitle = styled.h2`
    margin-bottom: 30px;
    font-family: 'BouncyThin';
    font-size: 35px;
`;

const DescriptionContainerContent = styled.p`
    font-family: 'montserrat';
    font-weight: 600;
`;

const ImagesContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export default OtherSuccessSection;
