import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StatistiqueSection = () => {
    return (
        <Container>
            <Title>
                GET YOUR ZORLGUX BEFORE ENDING
                <br /> ALREADY <RedText>30,000</RedText> SELLS
            </Title>
            <Image
                src="/images/wow.png"
                width={250}
                height={200}
                alt="Wow onomatopé image"
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                }}
            />
            <StatsContainer>
                <StatContainer>
                    <StatTitle>50,000</StatTitle>
                    <StatDescription>ZORGLUX BOOKS</StatDescription>
                </StatContainer>
                <StatContainer>
                    <StatTitle>45,000</StatTitle>
                    <StatDescription>ZORGLUX PRE-ORDERED</StatDescription>
                </StatContainer>
                <StatContainer>
                    <StatTitle>30,000</StatTitle>
                    <StatDescription>ZORGLUX RECEIVED</StatDescription>
                </StatContainer>
            </StatsContainer>
            <EditionsContainer>
                <EditionBandBlack>
                    LIMITED EDITION. LIMITED EDITION. LIMITED EDITION. LIMITED
                    EDITION. LIMITED EDITION. LIMITED EDITION. LIMITED
                </EditionBandBlack>
                <EditionBandRed>
                    LIMITED EDITION. LIMITED EDITION. LIMITED EDITION. LIMITED
                    EDITION. LIMITED EDITION. LIMITED EDITION.
                </EditionBandRed>
            </EditionsContainer>
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    height: 100vh;
    background-color: #fff9eb;
    color: black;
    font-family: 'BouncyThin';
    padding: 30px;
`;
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 100px;
`;
const RedText = styled.span`
    font-family: 'KgHappy';
    color: #ed4441;
`;
const StatsContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 200px;
`;
const StatContainer = styled.div``;
const StatTitle = styled.h2`
    font-size: 50px;
    font-family: 'KgHappy';
    color: #ed4441;
`;
const StatDescription = styled.h3``;
const EditionsContainer = styled.div`
    position: relative;
`;
const EditionBandRed = styled.p`
    position: absolute;
    left: -55px;
    width: 110vw;
    background: #ed4441;
    transform: rotate(-10deg);
    font-size: 1vw;
    padding-top: 12px;
    padding-bottom: 10px;
    font-family: 'actionComics';
    color: white;
`;
const EditionBandBlack = styled.p`
    position: absolute;
    left: -55px;
    width: 110vw;
    background: black;
    transform: rotate(2deg);
    font-size: 1vw;
    padding-top: 12px;
    padding-bottom: 10px;
    font-family: 'actionComicsBlack';
    color: white;
`;

export default StatistiqueSection;
